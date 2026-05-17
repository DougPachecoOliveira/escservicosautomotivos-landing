import { LogoAnimado } from "@/components/LogoAnimado";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-orange">
              ESC Serviços Automotivos · Barueri
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Sua oficina com método.
              <br />
              <span className="text-slate-500">
                Cada etapa registrada, cada peça justificada.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Diagnóstico transparente, fotos do processo, aprovação por
              WhatsApp. Você sabe o que vai fazer no seu carro antes que a
              chave entre na ignição.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pre-diagnostico"
                className="inline-flex h-14 items-center justify-center rounded-full bg-brand-orange px-8 text-base font-semibold text-white transition-colors hover:bg-brand-orange-dark"
              >
                Pré-diagnóstico em 90 segundos
              </a>
              <a
                href="#metodo"
                className="inline-flex h-14 items-center justify-center rounded-full border border-slate-300 px-8 text-base font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Conheça o método
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-slate-400">
              Não fazemos serviço que você não autorizou
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
