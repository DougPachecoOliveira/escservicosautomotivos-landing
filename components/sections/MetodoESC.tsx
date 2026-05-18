import { SectionLabel } from "@/components/SectionLabel";

// Microcopy alinhada ao brand: E.S.C. = Entendimento · Serviço Guiado · Confirmação
// Voz factual, vocabulário-sim, sem hype.
const pilares = [
  {
    letra: "E",
    titulo: "Entendimento",
    descricao: "Verificamos o estado real antes de tocar no carro.",
    detalhe:
      "Check-in guiado, fotos do estado de entrada e registro técnico. Antes de qualquer execução, você sabe exatamente o que está em jogo.",
  },
  {
    letra: "S",
    titulo: "Serviço Guiado",
    descricao: "Executamos com etapa, foto e tempo registrados.",
    detalhe:
      "Cada serviço passa pelo processo. Cada peça com nota. Cada hora cronometrada. Você acompanha o que foi feito e por qual técnico.",
  },
  {
    letra: "C",
    titulo: "Confirmação",
    descricao: "Você aprova cada etapa antes da próxima começar.",
    detalhe:
      "Orçamento item-a-item por WhatsApp. Nada executado sem autorização. Termo de entrega assinado e arquivado para consulta.",
  },
] as const;

export function MetodoESC() {
  return (
    <section
      id="metodo"
      className="border-b border-[var(--border)] bg-[var(--card)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionLabel numero="01">O Método</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            E.S.C. <span className="text-[var(--color-orange)]">·</span> três
            momentos, zero improviso.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Não vendemos preço. Vendemos previsibilidade. Cada serviço passa
            pelos três momentos do método. Você participa de todos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pilares.map(({ letra, titulo, descricao, detalhe }) => (
            <article
              key={letra}
              className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-7 transition-colors hover:border-[var(--color-orange)]/40"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-orange)]/10 text-2xl font-bold text-[var(--color-orange)]">
                  {letra}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--fg-mantra)]">
                  {titulo}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold leading-snug text-[var(--fg)]">
                {descricao}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fg-body)]">
                {detalhe}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm font-medium leading-relaxed text-[var(--fg-mantra)]">
          <span className="text-[var(--fg)]">
            Técnica é livre. Processo é obrigatório. Registro é inegociável.
          </span>{" "}
          Regra interna da equipe — e o que você recebe como cliente.
        </p>
      </div>
    </section>
  );
}
