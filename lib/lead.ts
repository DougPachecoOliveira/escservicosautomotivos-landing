import type { Lead } from "@/lib/schemas";

// URL da Cloud Function `criarLead` — definida via env var em produção.
// Em dev/preview sem CF, o client mostra mensagem amigável e cai pro WhatsApp.
const LEAD_URL = process.env.NEXT_PUBLIC_LEAD_URL ?? "";

export class LeadSubmitError extends Error {
  code: "config" | "rate-limited" | "invalid" | "network" | "server";
  constructor(message: string, code: LeadSubmitError["code"]) {
    super(message);
    this.code = code;
  }
}

export async function enviarLead(lead: Lead): Promise<void> {
  if (!LEAD_URL) {
    throw new LeadSubmitError(
      "Formulário em configuração. Por enquanto, fale conosco no WhatsApp.",
      "config",
    );
  }

  let response: Response;
  try {
    response = await fetch(LEAD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: lead }),
    });
  } catch {
    throw new LeadSubmitError(
      "Falha de conexão. Verifique a internet e tente novamente.",
      "network",
    );
  }

  if (response.status === 429) {
    throw new LeadSubmitError(
      "Muitas tentativas seguidas. Tente novamente em alguns minutos.",
      "rate-limited",
    );
  }
  if (response.status === 400) {
    throw new LeadSubmitError(
      "Algum campo está incorreto. Confira e tente novamente.",
      "invalid",
    );
  }
  if (!response.ok) {
    throw new LeadSubmitError(
      "Não foi possível enviar agora. Tente novamente em instantes.",
      "server",
    );
  }
}
