// KPIs e depoimentos placeholder. Dono passa números reais antes do go-live.
const kpis = [
  { numero: "5+", rotulo: "anos de operação" },
  { numero: "2.400+", rotulo: "OSs concluídas" },
  { numero: "< 2%", rotulo: "índice de retrabalho" },
  { numero: "9,1", rotulo: "NPS médio" },
];

const depoimentos = [
  {
    nome: "Marcos R.",
    veiculo: "Hilux 2018",
    texto:
      "Levei achando que era turbina. Mandaram foto do diagnóstico, era só um sensor. Pagaram-me a honestidade.",
  },
  {
    nome: "Patrícia L.",
    veiculo: "Corolla 2020",
    texto:
      "Aprovei o orçamento por WhatsApp na hora do almoço. Tudo registrado, peça com nota fiscal. Sem surpresa.",
  },
  {
    nome: "André V.",
    veiculo: "Renegade 2019",
    texto:
      "Primeira oficina que me mostra a peça velha antes de jogar fora. Mudou minha relação com manutenção.",
  },
];

export function Provas() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.rotulo} className="text-center sm:text-left">
              <p className="text-4xl font-semibold tracking-tight text-brand-orange sm:text-5xl">
                {kpi.numero}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                {kpi.rotulo}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <blockquote
              key={d.nome}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-800/40 p-6"
            >
              <p className="text-sm leading-relaxed text-slate-200">
                &ldquo;{d.texto}&rdquo;
              </p>
              <footer className="mt-6 text-xs uppercase tracking-widest text-slate-400">
                {d.nome} · {d.veiculo}
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-10 text-xs uppercase tracking-widest text-slate-500">
          Números e depoimentos exibidos com autorização dos clientes
        </p>
      </div>
    </section>
  );
}
