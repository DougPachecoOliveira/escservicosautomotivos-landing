// Placeholders profissionais (Unsplash automotive). Substituir por vídeos/fotos
// reais na Fase 2 via CMS simples. Todos com legenda fixa: serviço + carro + tempo.

const reels = [
  {
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=900&fit=crop",
    legenda: "Troca de pastilhas dianteiras",
    veiculo: "Civic 2018",
    tempo: "47min",
  },
  {
    img: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?w=600&h=900&fit=crop",
    legenda: "Revisão de 10 mil km",
    veiculo: "HB20 2021",
    tempo: "1h 12min",
  },
  {
    img: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=900&fit=crop",
    legenda: "Diagnóstico de suspensão",
    veiculo: "Onix 2019",
    tempo: "38min",
  },
  {
    img: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee6c?w=600&h=900&fit=crop",
    legenda: "Alinhamento e balanceamento",
    veiculo: "Corolla 2020",
    tempo: "54min",
  },
  {
    img: "https://images.unsplash.com/photo-1605618826115-fb9e0cd61287?w=600&h=900&fit=crop",
    legenda: "Troca de bateria",
    veiculo: "Ford Ka 2017",
    tempo: "22min",
  },
  {
    img: "https://images.unsplash.com/photo-1632935190508-bafd9b3a7c01?w=600&h=900&fit=crop",
    legenda: "Troca de filtros",
    veiculo: "T-Cross 2022",
    tempo: "29min",
  },
];

export function ReelsProcesso() {
  return (
    <section id="processo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-orange">
              Em campo
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Registramos tudo. Não como marketing — como prova.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Cada serviço executado vira material de auditoria. Foto antes,
            durante e depois. Tempo cronometrado. Você recebe o registro
            completo da intervenção.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel) => (
            <figure
              key={reel.img}
              className="group relative aspect-[9/12] overflow-hidden rounded-2xl bg-slate-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={reel.img}
                alt={`${reel.legenda} — ${reel.veiculo}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-base font-semibold leading-tight">
                  {reel.legenda}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                  {reel.veiculo} · {reel.tempo}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs uppercase tracking-widest text-slate-400">
          Imagens ilustrativas · Substituídas por registros reais quando o
          cliente autoriza divulgação
        </p>
      </div>
    </section>
  );
}
