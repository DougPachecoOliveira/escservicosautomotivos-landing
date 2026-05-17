import { ArrowRight } from "lucide-react";

// Faixa CTA inferior — assinatura visual invariante da ESC.
// Spec: brand system §1.5 — fundo laranja #F26B1F, texto preto,
// "Diagnóstico Método ESC" + seta. NUNCA mudar de cor entre dark/light.
export function FaixaCTA() {
  return (
    <a
      href="#pre-diagnostico"
      className="group flex items-center justify-between gap-4 bg-[var(--color-orange)] px-6 py-5 text-[var(--color-black-deep)] transition-colors hover:bg-[var(--color-orange-hover)]"
    >
      <span className="text-base font-bold tracking-tight sm:text-lg">
        Diagnóstico Método ESC
      </span>
      <ArrowRight
        className="h-5 w-5 transition-transform group-hover:translate-x-1"
        strokeWidth={2.5}
        aria-hidden
      />
    </a>
  );
}
