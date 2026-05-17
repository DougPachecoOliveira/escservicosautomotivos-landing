// História real: ESC nasceu em 2023 numa garagem de 2 carros.
// Maio/2026 inaugurou o primeiro espaço próprio com CNPJ.
// Sem hipérbole. Sem volume gigante (recém-inaugurado).
// Métricas que importam: método consistente, retrabalho baixo, retorno do cliente.

const marcos = [
  { numero: "2023", rotulo: "Começo na garagem" },
  { numero: "Maio/26", rotulo: "Espaço próprio inaugurado" },
  { numero: "< 2%", rotulo: "Índice de retrabalho" },
  { numero: "100%", rotulo: "Serviços com registro" },
];

const depoimentos = [
  {
    nome: "Marcos R.",
    veiculo: "Hilux 2018",
    texto:
      "Levei achando que era turbina. Mandaram foto do diagnóstico, era um sensor. Pagaram-me a honestidade.",
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
      "Primeira oficina que me mostra a peça antiga antes de descartar. Mudou minha relação com manutenção.",
  },
];

export function Provas() {
  return (
    <section className="border-b border-[var(--color-black-deep)] bg-[var(--color-black-deep)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
            Nossa trajetória
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            De 2 carros na garagem ao espaço próprio.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            Começamos em 2023 atendendo poucos clientes na garagem. Em maio de
            2026 abrimos o primeiro espaço próprio em Barueri. O método é o
            mesmo desde o primeiro dia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-4">
          {marcos.map((m) => (
            <div key={m.rotulo} className="border-l-2 border-[var(--color-orange)] pl-4">
              <p className="text-3xl font-bold tracking-tight text-[var(--color-orange)] sm:text-4xl">
                {m.numero}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                {m.rotulo}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <blockquote
              key={d.nome}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm leading-relaxed text-white/90">
                &ldquo;{d.texto}&rdquo;
              </p>
              <footer className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                {d.nome} <span className="text-[var(--color-orange)]">·</span>{" "}
                {d.veiculo}
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
          Depoimentos exibidos com autorização dos clientes
        </p>
      </div>
    </section>
  );
}
