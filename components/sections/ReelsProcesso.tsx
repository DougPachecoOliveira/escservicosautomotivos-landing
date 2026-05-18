import { SectionLabel } from "@/components/SectionLabel";

// Bento grid 3 fotos REAIS — sem placeholders.
// Layout asymmetric: 1 foto grande à esquerda + 2 menores empilhadas à direita.
// Mobile: stack vertical (1 coluna).
//
// Conta uma micro-história visual: equipe física → mecânico usando o app →
// a tela que ele está vendo. Prova do método em ação.

const fotos = [
  {
    src: "/oficina/equipe.jpg",
    alt: "Equipe ESC trabalhando na oficina em Barueri",
    titulo: "Equipe técnica em campo",
    descricao: "Mecânicos certificados, processo seguido por todos.",
    posicao: "principal",
  },
  {
    src: "/oficina/trabalho-app.jpg",
    alt: "Mecânico usando o app ESC durante atendimento",
    titulo: "App acompanha cada serviço",
    descricao: "Foto, tempo, responsável — tudo registrado em tempo real.",
    posicao: "secundario-topo",
  },
  {
    src: "/oficina/nps.png",
    alt: "Cliente avaliando o serviço da ESC no app (NPS)",
    titulo: "Cliente avalia depois da entrega",
    descricao:
      "NPS direto no app. Sua nota e comentário chegam à equipe, sem intermediário.",
    posicao: "secundario-base",
  },
];

export function ReelsProcesso() {
  return (
    <section
      id="processo"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <SectionLabel numero="04">Em ação</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
              A equipe ESC no dia a dia.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--fg-body)]">
            Equipe técnica em campo, app registrando cada etapa, cliente
            avaliando ao final. Ciclo completo do método ESC operando — sem
            foto de estoque.
          </p>
        </div>

        {/* Bento grid:
            Desktop: 1 foto grande (col-span-2 row-span-2) + 2 empilhadas (col 3)
            Mobile: stack vertical */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2 sm:h-[640px]">
          {/* Foto principal — equipe */}
          <figure className="relative overflow-hidden rounded-2xl bg-[var(--card)] sm:col-span-2 sm:row-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fotos[0].src}
              alt={fotos[0].alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black-deep)]/95 via-[var(--color-black-deep)]/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
                01 · Equipe
              </p>
              <p className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
                {fotos[0].titulo}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85 sm:max-w-md">
                {fotos[0].descricao}
              </p>
            </figcaption>
          </figure>

          {/* Foto secundária topo — trabalho com app */}
          <figure className="relative overflow-hidden rounded-2xl bg-[var(--card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fotos[1].src}
              alt={fotos[1].alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black-deep)]/95 via-[var(--color-black-deep)]/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
                02 · App em uso
              </p>
              <p className="mt-1 text-sm font-bold leading-tight">
                {fotos[1].titulo}
              </p>
            </figcaption>
          </figure>

          {/* Foto secundária base — tela em uso */}
          <figure className="relative overflow-hidden rounded-2xl bg-[var(--card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fotos[2].src}
              alt={fotos[2].alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-black-deep)]/95 via-[var(--color-black-deep)]/40 to-transparent p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
                03 · Avaliação
              </p>
              <p className="mt-1 text-sm font-bold leading-tight text-white">
                {fotos[2].titulo}
              </p>
            </div>
          </figure>
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--fg-mantra)]">
          Fotos reais da operação <span className="text-[var(--color-orange)]">·</span> Equipe e clientes autorizaram divulgação
        </p>
      </div>
    </section>
  );
}
