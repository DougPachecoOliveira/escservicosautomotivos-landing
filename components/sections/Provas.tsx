import { SectionLabel } from "@/components/SectionLabel";
import { CounterAnimado } from "@/components/CounterAnimado";

// História real: ESC nasceu em 2023 numa garagem de 2 carros.
// Maio/2026 inaugurou o primeiro espaço próprio com CNPJ.
// Sem hipérbole. Métricas qualitativas (não financeiras internas).

type Marco = {
  numero: string;
  rotulo: string;
  detalhe: string;
};

const marcos: Marco[] = [
  {
    numero: "2023",
    rotulo: "Começo na garagem",
    detalhe: "Dois carros por vez, atendimento pessoal",
  },
  {
    numero: "Maio/26",
    rotulo: "Espaço próprio",
    detalhe: "Primeira sede com CNPJ, em Barueri",
  },
  {
    numero: "100%",
    rotulo: "Serviços com registro",
    detalhe: "Foto, tempo e nota fiscal documentados",
  },
  {
    numero: "< 2%",
    rotulo: "Índice de retrabalho",
    detalhe: "Indicador interno auditado",
  },
];

const depoimentos = [
  {
    nome: "Naor Antonio",
    veiculo: "Honda City 2025",
    texto:
      "Melhor lugar que já levei meu carro. Atendimento prestativo do começo ao fim, técnico e cuidadoso em cada detalhe, transparente em tudo. Pessoa justa, algo difícil de encontrar hoje em dia — recomendo de olhos fechados.",
  },
  {
    nome: "Suzi Soares",
    veiculo: "Polo Track",
    texto:
      "Terceiro carro que levo na oficina, desde o Celta lá em Osasco. Confio porque nunca tive dor de cabeça — viajo bastante e não tenho medo, sei que está pronto pra estrada. Preço justo e transparência me fazem voltar.",
  },
  {
    nome: "Rafael Caetano",
    veiculo: "VW Fox",
    texto:
      "Fiz o motor: estava com folgas e vazamentos, voltou como se fosse zero — conforto e consumo. Aproveitei e fiz suspensão, freios e arrefecimento. Mais de 1 ano e meio rodando sem dor de cabeça, minha oficina de confiança.",
  },
];

export function Provas() {
  return (
    <section className="border-b border-[var(--color-black-deep)] bg-[var(--color-black-deep)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionLabel numero="09">Nossa trajetória</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            De 2 carros na garagem ao espaço próprio.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            Começamos em 2023 atendendo poucos clientes na garagem. Em maio de
            2026 abrimos o primeiro espaço próprio em Barueri. O método é o
            mesmo desde o primeiro dia.
          </p>
        </div>

        {/* KPI cards estilo Business Case — número gigante laranja + label apertado + detalhe */}
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {marcos.map((m) => (
            <div key={m.rotulo} className="border-t border-white/10 pt-6">
              <p className="text-5xl font-bold leading-none tracking-tight text-[var(--color-orange)] sm:text-6xl">
                <CounterAnimado valor={m.numero} />
              </p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                {m.rotulo}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {m.detalhe}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <blockquote
              key={d.nome}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-sm leading-relaxed text-white/90">
                &ldquo;{d.texto}&rdquo;
              </p>
              <footer className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                {d.nome}{" "}
                <span className="text-[var(--color-orange)]">·</span>{" "}
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
