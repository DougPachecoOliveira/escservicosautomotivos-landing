import { Check } from "lucide-react";

const portfolios = [
  {
    nome: "ESC Fast",
    posicionamento: "Para serviços rápidos do dia a dia",
    indicado: "Troca de óleo, filtros, pastilhas, bateria, alinhamento",
    tempo: "Até 90 minutos no balcão",
    voceRecebe: [
      "Atendimento direto, sem fila",
      "Foto da peça trocada e do KM de saída",
      "Pagamento à vista com desconto",
      "Garantia escrita do serviço",
    ],
    cta: "Falar sobre ESC Fast",
    accent: "border-slate-200",
  },
  {
    nome: "ESC Sistema Completo",
    posicionamento: "Para diagnóstico, manutenção corretiva ou revisão completa",
    indicado: "Barulhos, falhas, luz no painel, revisão acima de 20 mil km",
    tempo: "Tempo médio: 1 a 3 dias úteis",
    voceRecebe: [
      "Check-in completo com 8+ fotos do estado de entrada",
      "Diagnóstico técnico documentado",
      "Orçamento item-a-item por WhatsApp pra aprovar",
      "Foto e tempo de cada serviço executado",
      "Termo de entrega assinado + garantia",
    ],
    cta: "Falar sobre Sistema Completo",
    accent: "border-brand-orange/40 ring-1 ring-brand-orange/20",
  },
] as const;

export function FastVsCompleto() {
  return (
    <section id="portfolio" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-orange">
            Dois caminhos
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            O carro precisa do quê hoje?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Nem todo serviço exige o método completo. Trabalhamos em dois
            formatos, ambos com o mesmo padrão de registro e transparência.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolios.map((p) => (
            <article
              key={p.nome}
              className={`flex flex-col rounded-2xl border bg-white p-8 ${p.accent}`}
            >
              <h3 className="text-2xl font-semibold text-slate-900">{p.nome}</h3>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {p.posicionamento}
              </p>

              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-slate-500">Indicado para</dt>
                  <dd className="mt-1 text-slate-700">{p.indicado}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Tempo</dt>
                  <dd className="mt-1 text-slate-700">{p.tempo}</dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-sm font-medium text-slate-500">
                  Você recebe
                </p>
                <ul className="mt-3 space-y-2">
                  {p.voceRecebe.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#pre-diagnostico"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-medium text-slate-700 transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
