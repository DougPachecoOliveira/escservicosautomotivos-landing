// Validação Cloudflare Turnstile (CAPTCHA invisível).
// Doc: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

const VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Token especial pra desenvolvimento sem widget configurado.
// Em produção, sempre passar token real do widget.
const DEV_BYPASS_TOKEN = "stub-dev-token";

export type TurnstileResult =
  | { ok: true; hostname?: string }
  | { ok: false; reason: "missing-secret" | "invalid-token" | "network" };

export async function verificarTurnstile(
  token: string,
  ip: string,
  secret: string | undefined,
): Promise<TurnstileResult> {
  if (!secret) return { ok: false, reason: "missing-secret" };

  // Atalho de DEV (configurado via env TURNSTILE_DEV_BYPASS=1)
  if (
    token === DEV_BYPASS_TOKEN &&
    process.env.TURNSTILE_DEV_BYPASS === "1"
  ) {
    return { ok: true };
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  try {
    const resp = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!resp.ok) return { ok: false, reason: "network" };
    const data = (await resp.json()) as {
      success: boolean;
      hostname?: string;
      "error-codes"?: string[];
    };
    if (data.success) return { ok: true, hostname: data.hostname };
    return { ok: false, reason: "invalid-token" };
  } catch {
    return { ok: false, reason: "network" };
  }
}
