import { SectionLabel } from "@/components/SectionLabel";

// "Pra qual carro" — auto-qualificação. Cliente confirma em 5s se vale
// preencher o form. Honestidade > esforço perdido dos dois lados.

const colunas = [
  {
    titulo: "Veículos",
    label: "Atendemos",
    cor: "ok",
    itens: [
      "Carros de passeio",
      "SUVs e crossovers",
      "Picapes leves",
      "Comerciais leves",
      "Gasolina, etanol, flex",
      "Diesel leve",
      "Híbridos (revisão preventiva)",
    ],
  },
  {
    titulo: "Sistemas e serviços",
    label: "Especialidades",
    cor: "ok",
    itens: [
      "Diagnóstico computadorizado",
      "Injeção eletrônica",
      "Mecânica geral de motor",
      "Freios completos",
      "Suspensão e direção",
      "Arrefecimento",
      "Alinhamento e balanceamento (máquinas próprias)",
      "Sistema elétrico",
    ],
  },
  {
    titulo: "Fora do escopo",
    label: "Não atendemos",
    cor: "no",
    itens: [
      "Motos",
      "Caminhões pesados",
      "Funilaria e pintura",
      "Blindagem",
      "Veículos 100% elétricos (eletrificação)",
    ],
  },
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--color-orange)]"
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

function CrossIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--fg-mantra)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4L12 12M12 4L4 12" />
    </svg>
  );
}

export function OQueAtendemos() {
  return (
    <section
      id="atendimento"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionLabel numero="06">Pra qual carro</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Confirma rapidinho se atendemos seu caso.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Sem rodeio. O que entra na nossa especialidade, o que não entra.
            Assim você não perde tempo nem a gente perde a sua confiança.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {colunas.map((coluna) => (
            <article
              key={coluna.titulo}
              className={`rounded-2xl border p-6 sm:p-8 ${
                coluna.cor === "ok"
                  ? "border-[var(--border)] bg-[var(--card)]"
                  : "border-dashed border-[var(--border)] bg-[var(--bg)]"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.22em] ${
                  coluna.cor === "ok"
                    ? "text-[var(--color-orange)]"
                    : "text-[var(--fg-mantra)]"
                }`}
              >
                {coluna.label}
              </p>
              <h3 className="mt-3 text-xl font-bold text-[var(--fg)]">
                {coluna.titulo}
              </h3>
              <ul className="mt-6 space-y-3">
                {coluna.itens.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm leading-relaxed ${
                      coluna.cor === "ok"
                        ? "text-[var(--fg)]"
                        : "text-[var(--fg-body)]"
                    }`}
                  >
                    {coluna.cor === "ok" ? <CheckIcon /> : <CrossIcon />}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[var(--fg-mantra)]">
          <span className="font-medium text-[var(--fg-body)]">
            Atendemos todas as principais marcas
          </span>{" "}
          nacionais e importados — desde que o carro se encaixe nas categorias
          acima. Em dúvida, mande a placa no pré-diagnóstico que confirmamos
          antes de você precisar trazer o carro.
        </p>
      </div>
    </section>
  );
}
