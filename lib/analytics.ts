// Wrapper minimalista pra Plausible Analytics.
// Sem cookies, sem PII, LGPD-clean — não exige cookie banner.
// Doc: https://plausible.io/docs/custom-event-goals
//
// Configurável via env var NEXT_PUBLIC_PLAUSIBLE_DOMAIN (commitado em .env.production):
// - Se setada → script Plausible carrega em layout.tsx e trackEvent envia
// - Se vazia → todas as chamadas viram no-op (zero overhead)
//
// Alternativa gratuita: Cloudflare Web Analytics (também privacy-friendly).
// Configuração: setar NEXT_PUBLIC_PLAUSIBLE_DOMAIN no .env.production e
// adicionar o site no painel Plausible.

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

export const PLAUSIBLE_DOMAIN =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";
export const ANALYTICS_HABILITADO = !!PLAUSIBLE_DOMAIN;

/**
 * Eventos custom da landing. Adicionar aqui pra centralizar nomenclatura.
 * Convenção: snake_case, prefixo por contexto.
 */
export type EventoAnalytics =
  | "hero_cta_click"
  | "metodo_link_click"
  | "form_start"
  | "form_step_advance"
  | "form_step_back"
  | "form_submit_success"
  | "form_submit_error"
  | "whatsapp_fab_click"
  | "whatsapp_inline_click"
  | "google_review_click"
  | "telefone_click"
  | "theme_toggle";

export function trackEvent(
  evento: EventoAnalytics,
  props?: Record<string, string | number | boolean>,
): void {
  if (!ANALYTICS_HABILITADO) return;
  if (typeof window === "undefined") return;
  if (typeof window.plausible !== "function") return;
  try {
    window.plausible(evento, props ? { props } : undefined);
  } catch {
    // analytics nunca pode quebrar o site
  }
}
