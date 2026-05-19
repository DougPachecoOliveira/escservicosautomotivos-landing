import { MockupIphone } from "@/components/MockupIphone";
import { SectionLabel } from "@/components/SectionLabel";

// Seção "Por dentro do método" — prova visual da tecnologia.
// Cada slot renderiza screenshot real do app ESC (quando colocado em
// /public/app-screens/) ou fallback elegante. Sem mockup genérico.

const telas = [
  {
    src: "/app-screens/checkin.png",
    titulo: "Check-up guiado",
    descricao:
      "Sistema conduz a inspeção etapa por etapa. Cada item registrado com timestamp.",
    label: "Entrada",
    fallbackTitulo: "Check-up",
    fallbackLegenda: "Inspeção guiada do veículo",
  },
  {
    src: "/app-screens/orcamento.png",
    titulo: "Orçamento item-a-item",
    descricao:
      "Cada peça e serviço aparece com preço, justificativa e foto. Cliente aprova individualmente.",
    label: "Aprovação",
    fallbackTitulo: "Orçamento",
    fallbackLegenda: "Aprovação item‑a‑item",
  },
  {
    src: "/app-screens/execucao.png",
    titulo: "Tempo cronometrado",
    descricao:
      "Cada serviço com timer rodando. O cliente sabe quanto tempo o técnico investiu em cada etapa.",
    label: "Execução",
    fallbackTitulo: "Execução",
    fallbackLegenda: "Timer por serviço",
  },
  {
    src: "/app-screens/entrega.png",
    titulo: "Relatório de entrega",
    descricao:
      "Checklist final completo + assinatura digital. PDF gerado e arquivado pra consulta futura.",
    label: "Entrega",
    fallbackTitulo: "Relatório",
    fallbackLegenda: "Termo digital assinado",
  },
];

export function ShowroomApp() {
  return (
    <section
      id="showroom"
      className="border-b border-[var(--border)] bg-[var(--card)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionLabel numero="02">Por dentro do método</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Nosso software acompanha cada etapa.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Não é planilha de oficina. É sistema próprio, desenvolvido pelo
            método ESC. Você vê o que o técnico vê — em tempo real, com foto,
            tempo e responsável.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {telas.map((tela, i) => (
            <article key={tela.titulo} className="flex flex-col items-center">
              <MockupIphone
                src={tela.src}
                alt={tela.titulo}
                fallbackTitulo={tela.fallbackTitulo}
                fallbackLegenda={tela.fallbackLegenda}
              />
              <div className="mt-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                  {String(i + 1).padStart(2, "0")} · {tela.label}
                </p>
                <h3 className="mt-2 text-base font-bold text-[var(--fg)]">
                  {tela.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-body)]">
                  {tela.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--fg-mantra)]">
          Telas do app ESC — software interno, exclusivo da oficina
        </p>
      </div>
    </section>
  );
}
