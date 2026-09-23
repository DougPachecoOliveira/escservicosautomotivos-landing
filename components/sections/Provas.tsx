import { Camera, BadgeCheck } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { CounterAnimado } from "@/components/CounterAnimado";
import { Estrelas } from "@/components/Estrelas";
import {
  avaliacoesDestaque,
  NOTA_MEDIA,
  TOTAL_AVALIACOES,
  GOOGLE_REVIEWS_URL,
} from "@/lib/avaliacoes";

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

// Logo "G" do Google (4 cores oficiais) — SVG inline, sem request externo.
function GoogleG({ tamanho = 20 }: { tamanho?: number }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

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

        {/* Selo Google — prova social verificável */}
        <div className="mt-24 flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <GoogleG tamanho={40} />
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold leading-none tracking-tight text-white">
                  {NOTA_MEDIA}
                </span>
                <Estrelas
                  nota={5}
                  tamanho={18}
                  label={`Nota ${NOTA_MEDIA} de 5 no Google`}
                />
              </div>
              <p className="mt-1.5 text-sm text-white/70">
                <CounterAnimado valor={String(TOTAL_AVALIACOES)} /> avaliações no
                Google · 100% cinco estrelas
              </p>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=google_review_click inline-flex h-12 flex-shrink-0 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[var(--color-black-deep)] transition-colors hover:bg-white/90"
          >
            Ver no Google
          </a>
        </div>

        {/* Vitrine de avaliações transcritas (autorização dos clientes).
            Layout masonry (CSS columns) — encaixa textos de tamanhos diferentes. */}
        <div className="mt-8 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {avaliacoesDestaque.map((d) => (
            <blockquote
              key={d.nome}
              className="mb-6 flex break-inside-avoid flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <Estrelas nota={d.nota ?? 5} tamanho={16} />
                <GoogleG tamanho={18} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/90">
                &ldquo;{d.texto}&rdquo;
              </p>
              <footer className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  {d.nome}
                  {d.veiculo && (
                    <>
                      {" "}
                      <span className="text-[var(--color-orange)]">·</span>{" "}
                      {d.veiculo}
                    </>
                  )}
                </span>
                {d.localGuide && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-white/45">
                    <BadgeCheck className="h-3.5 w-3.5 text-[#4285F4]" strokeWidth={2.2} />
                    Local Guide
                  </span>
                )}
                {d.fotos ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-white/45">
                    <Camera className="h-3.5 w-3.5" strokeWidth={2.2} />
                    {d.fotos} fotos
                  </span>
                ) : null}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Depoimentos exibidos com autorização dos clientes
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=google_review_click text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-orange)] underline-offset-4 hover:underline"
          >
            Ver todas as {TOTAL_AVALIACOES} avaliações →
          </a>
        </div>
      </div>
    </section>
  );
}
