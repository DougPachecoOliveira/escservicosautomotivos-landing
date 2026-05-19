import { LogoAnimado } from "@/components/LogoAnimado";
import { ArrowRight, Clock, ClipboardCheck, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pt-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
              Barueri · SP
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-[var(--fg)] sm:text-6xl md:text-7xl">
              Sem improviso.
              <br />
              <span className="text-[var(--fg-mantra)]">Sem surpresa.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--fg-body)]">
              Diagnóstico Método ESC para o seu carro. Você entende o estado
              real antes de qualquer execução, acompanha cada etapa e confirma
              na entrega.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pre-diagnostico"
                className="group plausible-event-name=hero_cta_click inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--color-orange)] px-8 text-base font-bold text-[var(--color-black-deep)] transition-colors hover:bg-[var(--color-orange-hover)]"
              >
                Iniciar Diagnóstico Método ESC
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </a>
              <a
                href="#metodo"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[var(--fg)]/15 px-8 text-base font-medium text-[var(--fg)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
              >
                Conheça o método
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[var(--fg-body)]">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[var(--color-orange)]" strokeWidth={2.5} />
                Resposta em até 2h úteis
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ClipboardCheck className="h-4 w-4 text-[var(--color-orange)]" strokeWidth={2.5} />
                Você aprova antes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--color-orange)]" strokeWidth={2.5} />
                Preço fechado, sem surpresa
              </span>
            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-[var(--fg-mantra)]">
              Você entende antes <span className="text-[var(--color-orange)]">·</span> Acompanha durante <span className="text-[var(--color-orange)]">·</span> Confirma na entrega
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <LogoAnimado className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
