import { Search, Timer, MessageCircleCheck } from "lucide-react";

const pilares = [
  {
    letra: "E",
    titulo: "Entendimento",
    descricao: "Entendemos o carro antes de tocar nele.",
    detalhe:
      "Check-in guiado, fotos, sintomas registrados. Antes de qualquer chave, sabemos o que está em jogo.",
    Icon: Search,
  },
  {
    letra: "S",
    titulo: "Serviço",
    descricao: "Executamos com fotos e tempo cronometrado.",
    detalhe:
      "Cada etapa documentada. Você acompanha o que foi feito, quando, e por qual mecânico responsável.",
    Icon: Timer,
  },
  {
    letra: "C",
    titulo: "Confirmação",
    descricao: "Você aprova cada etapa pelo WhatsApp.",
    detalhe:
      "Nada é feito sem autorização. Nada é cobrado sem comprovação. Termo de entrega assinado e arquivado.",
    Icon: MessageCircleCheck,
  },
] as const;

export function MetodoESC() {
  return (
    <section id="metodo" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-orange">
            O Método
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            E → S → C: três momentos, zero improviso.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Nossa oficina não vende preço. Vende processo. Cada serviço passa
            pelos três momentos do método ESC. Nada é feito por intuição.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pilares.map(({ letra, titulo, descricao, detalhe, Icon }) => (
            <article
              key={letra}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-colors hover:border-brand-orange/40"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-2xl font-semibold text-brand-orange">
                  {letra}
                </span>
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                  <Icon className="h-4 w-4" aria-hidden />
                  <span>{titulo}</span>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {descricao}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {detalhe}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate-500">
          <span className="font-medium text-slate-700">
            Técnica é livre. Processo é obrigatório. Registro é inegociável.
          </span>{" "}
          Essa é a regra interna da nossa equipe — e é também o que você recebe
          como cliente.
        </p>
      </div>
    </section>
  );
}
