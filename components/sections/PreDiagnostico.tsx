// Placeholder da seção de pré-diagnóstico.
// Form completo (4 steps + FIPE + Turnstile) implementado na Task #5.
import { ArrowRight } from "lucide-react";

export function PreDiagnostico() {
  return (
    <section
      id="pre-diagnostico"
      className="border-y border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 via-white to-brand-orange/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-orange">
          Pré-diagnóstico
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Conte o que está acontecendo. Te respondemos no WhatsApp em até 2h
          úteis.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Sem cadastro, sem login, sem ligação chata. Você passa a placa, conta
          o problema e nós te orientamos sobre o melhor caminho — Fast ou
          Sistema Completo.
        </p>

        <div className="mt-12 rounded-2xl border border-dashed border-brand-orange/40 bg-white p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Formulário em construção
          </p>
          <p className="mt-3 text-sm text-slate-600">
            O formulário multi-step (placa → veículo → problema → contato) será
            integrado em breve. Enquanto isso, fale conosco direto:
          </p>
          <a
            href="https://wa.me/55_____________"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
