import { SectionLabel } from "@/components/SectionLabel";

// Seção dedicada à expertise Volkswagen — diferencial técnico.
// "Especialistas Volks + atendemos todas as outras marcas".
// Usa a imagem que a equipe já produziu pro Instagram (mesmo estilo brand).

const modelos = ["T-Cross", "Nivus", "Polo", "Saveiro", "Up!", "Gol"];
const motores = ["TSI 1.0", "TSI 1.4", "MPI", "MSI"];

export function EspecialistaVolks() {
  return (
    <section
      id="volks"
      className="border-b border-[var(--border)] bg-[var(--card)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Coluna texto */}
          <div>
            <SectionLabel numero="07">Especialização técnica</SectionLabel>

            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-[var(--fg)] sm:text-5xl">
              Especialistas na família{" "}
              <span className="text-[var(--color-orange)]">Volkswagen.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
              Conhecemos a fundo as plataformas TSI 1.0, TSI 1.4, MPI e MSI.
              Diagnóstico preciso, manutenção com método e transparência
              específicos pra cada motor.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--fg-mantra)]">
                  Modelos com expertise
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {modelos.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center rounded-full border border-[var(--color-orange)]/40 bg-[var(--color-orange)]/5 px-4 py-1.5 text-sm font-bold text-[var(--color-orange)]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--fg-mantra)]">
                  Motorizações
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {motores.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-1.5 text-sm font-medium text-[var(--fg)]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-[var(--fg-body)]">
              <span className="font-medium text-[var(--fg)]">
                Mas não atendemos só Volkswagen.
              </span>{" "}
              Trabalhamos todas as principais marcas nacionais e importadas
              dentro das categorias que mostramos acima — Volks é onde temos
              especialização mais profunda.
            </p>
          </div>

          {/* Coluna imagem */}
          <figure className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/oficina/especialista-volks.jpg"
              alt="ESC Serviços Automotivos — Especialistas na família Volkswagen: T-Cross, Nivus, Saveiro, Up!, Polo e Gol"
              loading="lazy"
              className="w-full rounded-2xl border border-[var(--border)] shadow-2xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
