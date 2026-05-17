// Placeholder do form. Implementação completa (4 steps + FIPE + Turnstile)
// na Task #5. CTA usa o serviço-âncora oficial: "Diagnóstico Método ESC".
import { ArrowRight } from "lucide-react";

export function PreDiagnostico() {
  return (
    <section
      id="pre-diagnostico"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
          Diagnóstico Método ESC
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
          Antecipar custa menos do que socorrer.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
          Conte o que está acontecendo com o carro. Respondemos no WhatsApp em
          até 2 horas úteis com o caminho recomendado: Fast ou Sistema
          Completo.
        </p>

        <div className="mt-12 rounded-2xl border border-dashed border-[var(--color-orange)]/40 bg-[var(--card)] p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
            Formulário em construção
          </p>
          <p className="mt-3 text-sm text-[var(--fg-body)]">
            O formulário (placa → veículo → sintoma → contato) entra na
            próxima atualização. Por enquanto, fale conosco direto.
          </p>
          <a
            href="https://wa.me/5511991783807?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20ESC%20Servi%C3%A7os%20Automotivos%20e%20gostaria%20de%20um%20diagn%C3%B3stico."
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-orange)] px-6 text-sm font-bold text-[var(--color-black-deep)] transition-colors hover:bg-[var(--color-orange-hover)]"
          >
            Falar no WhatsApp
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
