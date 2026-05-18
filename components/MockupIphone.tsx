"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Moldura iPhone em CSS puro (sem SVG pesado).
// Slot interno aceita imagem ou qualquer ReactNode.
// Se a imagem do screenshot não existir (404), mostra fallback bonito.

type Props = {
  src?: string;
  alt: string;
  fallbackTitulo?: string;
  fallbackLegenda?: string;
  className?: string;
};

export function MockupIphone({
  src,
  alt,
  fallbackTitulo,
  fallbackLegenda,
  className,
}: Props) {
  const [erro, setErro] = useState(false);
  const mostrarFallback = !src || erro;

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-full max-w-[260px]",
        "rounded-[34px] border-[10px] border-[#0a0a0a] bg-[#0a0a0a]",
        "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]",
        "dark:shadow-[0_20px_60px_-15px_rgba(242,107,31,0.15)]",
        className,
      )}
    >
      {/* Notch */}
      <div
        aria-hidden
        className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0a0a0a]"
      />

      {/* Tela */}
      <div className="absolute inset-0 overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {mostrarFallback ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center text-white/80">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-orange)]/15 text-[var(--color-orange)]">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-orange)]">
              {fallbackTitulo ?? "Em breve"}
            </p>
            {fallbackLegenda && (
              <p className="text-xs leading-relaxed text-white/60">
                {fallbackLegenda}
              </p>
            )}
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setErro(true)}
          />
        )}
      </div>
    </div>
  );
}
