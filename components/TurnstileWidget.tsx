"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

// Widget Cloudflare Turnstile (CAPTCHA invisível).
// Renderiza se NEXT_PUBLIC_TURNSTILE_SITE_KEY estiver definida.
// Caso contrário, é silent no-op (form usa token stub e CF tem bypass de dev).

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          appearance?: "always" | "execute" | "interaction-only";
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId?: string) => void;
    };
    onloadTurnstile?: () => void;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export function TurnstileWidget({
  onToken,
}: {
  onToken: (token: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useEffect(() => {
    if (!SITE_KEY) return;

    function render() {
      if (!containerRef.current || !window.turnstile) return;
      if (widgetIdRef.current) return; // já renderizado
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        appearance: "interaction-only", // só aparece se exigir interação
        callback: (token) => onTokenRef.current(token),
        "expired-callback": () => onTokenRef.current(""),
        "error-callback": () => onTokenRef.current(""),
      });
    }

    if (window.turnstile) {
      render();
    } else {
      window.onloadTurnstile = render;
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (!SITE_KEY) {
    // Aviso só visível em dev — em prod sem key, simplesmente não renderiza
    if (process.env.NODE_ENV === "development") {
      return (
        <p className="text-xs text-amber-700 dark:text-amber-400">
          ⚠ Turnstile site key não configurado (NEXT_PUBLIC_TURNSTILE_SITE_KEY).
          Form usará token de bypass de dev.
        </p>
      );
    }
    return null;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstile&render=explicit"
        strategy="afterInteractive"
      />
      <div ref={containerRef} className="cf-turnstile" />
    </>
  );
}
