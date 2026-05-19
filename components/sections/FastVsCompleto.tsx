import { SectionLabel } from "@/components/SectionLabel";

// Checkmark desenhado como primitiva SVG (não emoji nem unicode — spec do brand §1.6)
function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-1 h-4 w-4 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 8.5L7 12L13 5" />
    </svg>
  );
}

const portfolios = [
  {
    nome: "ESC Fast",
    posicionamento: "Serviços rápidos do dia a dia.",
    indicado: "Troca de óleo, filtros, pastilhas, bateria, alinhamento",
    tempo: "Até 90 minutos no balcão",
    voceRecebe: [
      "Atendimento direto, sem fila",
      "Foto da peça trocada e do KM de saída",
      "Pagamento à vista com desconto",
      "Garantia escrita do serviço",
    ],
    cta: "Diagnóstico Método ESC",
    destaque: false,
  },
  {
    nome: "ESC Sistema Completo",
    posicionamento: "Diagnóstico, manutenção corretiva ou revisão completa.",
    indicado: "Barulhos, falhas, luz no painel, revisão acima de 20 mil km",
    tempo: "1 a 3 dias úteis",
    voceRecebe: [
      "Check-in com 8 fotos do estado de entrada",
      "Diagnóstico técnico documentado",
      "Orçamento item-a-item por WhatsApp",
      "Foto e tempo de cada serviço executado",
      "Termo de entrega assinado e arquivado",
    ],
    cta: "Diagnóstico Método ESC",
    destaque: true,
  },
] as const;

export function FastVsCompleto() {
  return (
    <section
      id="portfolio"
      className="border-b border-[var(--border)] bg-[var(--card)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionLabel numero="05">Dois caminhos</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            O que o carro precisa hoje?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Dois formatos, mesmo padrão de registro e transparência.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolios.map((p) => (
            <article
              key={p.nome}
              className={`flex flex-col rounded-2xl bg-[var(--bg)] p-8 transition-all ${
                p.destaque
                  ? "border-2 border-[var(--color-orange)]/50 shadow-[0_0_0_4px_rgba(242,107,31,0.08)]"
                  : "border border-[var(--border)] hover:border-[var(--color-orange)]/30 hover:shadow-[0_0_0_4px_rgba(242,107,31,0.06)]"
              }`}
            >
              <h3 className="text-2xl font-bold tracking-tight text-[var(--fg)]">
                {p.nome}
              </h3>
              <p className="mt-2 text-sm font-medium text-[var(--fg-body)]">
                {p.posicionamento}
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                    Indicado para
                  </dt>
                  <dd className="mt-1 text-[var(--fg)]">{p.indicado}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                    Tempo
                  </dt>
                  <dd className="mt-1 text-[var(--fg)]">{p.tempo}</dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-[var(--border)] pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                  Você recebe
                </p>
                <ul className="mt-3 space-y-2.5">
                  {p.voceRecebe.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[var(--fg)]"
                    >
                      <span className="text-[var(--color-orange)]">
                        <Check />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-orange)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Garantia escrita no termo digital
              </p>

              <a
                href="#pre-diagnostico"
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] px-6 text-sm font-bold text-[var(--fg)] transition-colors hover:border-[var(--color-orange)] hover:bg-[var(--color-orange)] hover:text-[var(--color-black-deep)]"
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
