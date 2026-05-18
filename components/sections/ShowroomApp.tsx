import { MockupIphone } from "@/components/MockupIphone";
import { SectionLabel } from "@/components/SectionLabel";

// Seção "Por dentro do método" — prova visual da tecnologia.
// Cada slot renderiza screenshot real do app ESC (quando colocado em
// /public/app-screens/) ou fallback elegante. Sem mockup genérico.

const telas = [
  {
    src: "/app-screens/checkin-fotos.png",
    titulo: "Check-in guiado",
    descricao:
      "Stepper com 8 fotos obrigatórias do estado de entrada. Cada captura registrada com timestamp e responsável.",
    label: "Entrada",
    fallbackTitulo: "Check-in",
    fallbackLegenda: "8 fotos obrigatórias",
  },
  {
    src: "/app-screens/orcamento-whatsapp.png",
    titulo: "Orçamento item-a-item",
    descricao:
      "Cada peça e serviço aparece com preço, justificativa e foto. Cliente aprova item por item pelo WhatsApp.",
    label: "Aprovação",
    fallbackTitulo: "Orçamento",
    fallbackLegenda: "Aprovação item‑a‑item",
  },
  {
    src: "/app-screens/execucao-timer.png",
    titulo: "Tempo cronometrado",
    descricao:
      "Cada serviço com timer rodando. O cliente sabe quanto tempo o técnico investiu em cada etapa.",
    label: "Execução",
    fallbackTitulo: "Execução",
    fallbackLegenda: "Timer por serviço",
  },
  {
    src: "/app-screens/entrega-termo.png",
    titulo: "Termo de entrega digital",
    descricao:
      "Checklist final + assinatura digital. Documento PDF gerado e arquivado pra consulta futura.",
    label: "Entrega",
    fallbackTitulo: "Entrega",
    fallbackLegenda: "Termo assinado e arquivado",
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
          <SectionLabel numero="07">Por dentro do método</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Nosso software acompanha cada etapa.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Não é planilha de oficina. É sistema próprio, desenvolvido pelo
            método ESC. Você vê o que o técnico vê — em tempo real, com foto,
            tempo e responsável.
          </p>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
