import { SectionLabel } from "@/components/SectionLabel";

// Reels = prova de registro, não marketing. Linguagem factual: serviço · veículo · tempo.
const reels = [
  {
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=900&fit=crop",
    servico: "Troca de pastilhas dianteiras",
    veiculo: "Civic 2018",
    tempo: "47 min",
  },
  {
    img: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?w=600&h=900&fit=crop",
    servico: "Revisão 10 mil km",
    veiculo: "HB20 2021",
    tempo: "1 h 12 min",
  },
  {
    img: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=900&fit=crop",
    servico: "Verificação de suspensão",
    veiculo: "Onix 2019",
    tempo: "38 min",
  },
  {
    img: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee6c?w=600&h=900&fit=crop",
    servico: "Alinhamento e balanceamento",
    veiculo: "Corolla 2020",
    tempo: "54 min",
  },
  {
    img: "https://images.unsplash.com/photo-1605618826115-fb9e0cd61287?w=600&h=900&fit=crop",
    servico: "Troca de bateria",
    veiculo: "Ford Ka 2017",
    tempo: "22 min",
  },
  {
    img: "https://images.unsplash.com/photo-1632935190508-bafd9b3a7c01?w=600&h=900&fit=crop",
    servico: "Troca de filtros",
    veiculo: "T-Cross 2022",
    tempo: "29 min",
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
            <SectionLabel numero="02">Em campo</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
              Registramos cada etapa.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--fg-body)]">
            Foto antes, durante e depois. Tempo cronometrado por serviço. Peça
            trocada com nota. Você recebe o registro completo da intervenção.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel) => (
            <figure
              key={reel.img}
              className="group relative aspect-[9/12] overflow-hidden rounded-2xl bg-[var(--card)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={reel.img}
                alt={`${reel.servico} — ${reel.veiculo}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black-deep)]/90 via-[var(--color-black-deep)]/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-base font-bold leading-tight">
                  {reel.servico}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/75">
                  {reel.veiculo}{" "}
                  <span className="text-[var(--color-orange)]">·</span>{" "}
                  {reel.tempo}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--fg-mantra)]">
          Imagens ilustrativas <span className="text-[var(--color-orange)]">·</span> Substituídas por registros reais quando o cliente autoriza divulgação
        </p>
      </div>
    </section>
  );
}
