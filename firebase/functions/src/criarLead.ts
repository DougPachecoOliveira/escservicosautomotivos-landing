import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { z } from "zod";

import { verificarTurnstile } from "./utils/turnstile";
import {
  checarRateLimitGlobal,
  checarRateLimitIp,
} from "./utils/ratelimit";
import { sanitizeObject } from "./utils/sanitize";

const TURNSTILE_SECRET = defineSecret("TURNSTILE_SECRET");

const placaRegex = /^[A-Z]{3}-?\d[A-Z\d]\d{2}$/;
const whatsappRegex = /^\+?5?5?\s?\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;

// Schema espelho do client (lib/schemas.ts da landing). Server é fonte de verdade.
const leadSchema = z.object({
  data: z.object({
    placa: z.string().trim().toUpperCase().regex(placaRegex),
    marca: z.string().trim().min(2).max(40),
    modelo: z.string().trim().min(1).max(60),
    ano: z.number().int().min(1980).max(new Date().getFullYear() + 1),
    sintomas: z.array(z.string().max(60)).max(10),
    problemaDescricao: z.string().trim().min(10).max(2000),
    nome: z.string().trim().min(2).max(80),
    whatsapp: z.string().trim().regex(whatsappRegex),
    email: z.union([z.string().email(), z.literal("")]).optional(),
    consentimentoLgpd: z.literal(true),
    website: z.literal("").optional(), // honeypot — vazio ou ausente
    turnstileToken: z.string().min(1),
  }),
});

const ORIGENS_PERMITIDAS = new Set([
  "https://escservicosautomotivos.com.br",
  "https://www.escservicosautomotivos.com.br",
  "https://escservicosautomotivos-landing.doug-pacheco.workers.dev",
  // dev local
  "http://localhost:3000",
]);

function corsHeaders(origin: string | null) {
  const permitida = origin && ORIGENS_PERMITIDAS.has(origin);
  return {
    "Access-Control-Allow-Origin": permitida ? origin : "null",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "3600",
    Vary: "Origin",
  };
}

async function logSecurityEvent(
  motivo: string,
  ip: string,
  userAgent: string,
  detalhe?: Record<string, unknown>,
) {
  try {
    await getFirestore()
      .collection("securityEvents")
      .add({
        motivo,
        ip,
        userAgent: userAgent.slice(0, 200),
        criadoEm: FieldValue.serverTimestamp(),
        expiresAt: Timestamp.fromMillis(
          Date.now() + 30 * 24 * 3600 * 1000, // TTL 30 dias
        ),
        ...detalhe,
      });
  } catch (e) {
    logger.error("Falha ao gravar securityEvent", e);
  }
}

export const criarLead = onRequest(
  {
    region: "southamerica-east1",
    cors: false, // CORS manual pra controle fino
    invoker: "public", // Cloud Functions v2 são privadas por default (mudança abril/24)
    maxInstances: 10, // anti-runaway de billing
    memory: "256MiB",
    timeoutSeconds: 30,
    secrets: [TURNSTILE_SECRET],
  },
  async (req, res) => {
    const origin = req.get("origin") ?? null;
    const headers = corsHeaders(origin);
    for (const [k, v] of Object.entries(headers)) res.setHeader(k, v);

    // Preflight
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") {
      res.status(405).json({ error: "method-not-allowed" });
      return;
    }
    if (!origin || !ORIGENS_PERMITIDAS.has(origin)) {
      res.status(403).json({ error: "origin-not-allowed" });
      return;
    }

    const ip =
      (req.get("cf-connecting-ip") ?? req.get("x-forwarded-for") ?? req.ip ?? "0.0.0.0")
        .toString()
        .split(",")[0]
        .trim();
    const userAgent = req.get("user-agent") ?? "";

    // Parse + valida
    let parsed: z.infer<typeof leadSchema>;
    try {
      parsed = leadSchema.parse(req.body);
    } catch (e) {
      await logSecurityEvent("payload-invalido", ip, userAgent, {
        erro: e instanceof z.ZodError ? e.issues.slice(0, 5) : String(e),
      });
      res.status(400).json({ error: "invalid-payload" });
      return;
    }

    const data = sanitizeObject(parsed.data, 2000);

    // Honeypot disparado = bot
    if (data.website && data.website !== "") {
      await logSecurityEvent("honeypot-disparado", ip, userAgent);
      res.status(204).send(""); // resposta vazia, bot não percebe bloqueio
      return;
    }

    // Rate limit
    const rlIp = await checarRateLimitIp(ip);
    if (!rlIp.ok) {
      await logSecurityEvent("rate-limit-ip", ip, userAgent, {
        resetEm: rlIp.resetEm,
      });
      res.status(429).json({ error: "rate-limited" });
      return;
    }
    const rlGlobal = await checarRateLimitGlobal();
    if (!rlGlobal.ok) {
      logger.warn("Rate limit global ativado", { resetEm: rlGlobal.resetEm });
      res.status(429).json({ error: "rate-limited-global" });
      return;
    }

    // Turnstile
    const turnstileResult = await verificarTurnstile(
      data.turnstileToken,
      ip,
      TURNSTILE_SECRET.value(),
    );
    if (!turnstileResult.ok) {
      await logSecurityEvent("turnstile-falhou", ip, userAgent, {
        reason: turnstileResult.reason,
      });
      res.status(403).json({ error: "turnstile-invalid" });
      return;
    }

    // Grava lead
    const agora = Timestamp.now();
    const expiresAt = Timestamp.fromMillis(
      agora.toMillis() + 180 * 24 * 3600 * 1000, // 180 dias = 6 meses (LGPD + custo)
    );

    const leadDoc = {
      placa: data.placa,
      marca: data.marca,
      modelo: data.modelo,
      ano: data.ano,
      sintomas: data.sintomas,
      problemaDescricao: data.problemaDescricao,
      contato: {
        nome: data.nome,
        whatsapp: data.whatsapp,
        email: data.email || null,
      },
      consentimentoLgpd: {
        aceito: true,
        versao: "2026-05-17",
        aceitoEm: agora,
      },
      meta: {
        ip,
        userAgent: userAgent.slice(0, 200),
        referer: req.get("referer")?.slice(0, 300) ?? null,
        origin,
        turnstileHostname: turnstileResult.hostname ?? null,
      },
      status: "novo",
      criadoEm: agora,
      expiresAt,
    };

    try {
      const ref = await getFirestore().collection("leads").add(leadDoc);
      logger.info("Lead criado", { leadId: ref.id, marca: data.marca });
      res.status(200).json({ ok: true, leadId: ref.id });
    } catch (e) {
      logger.error("Falha ao gravar lead", e);
      res.status(500).json({ error: "internal" });
    }
  },
);
