import { SectionLabel } from "@/components/SectionLabel";

// SVG inline do logo Instagram (lucide-react removeu ícones de marca por trademark)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Mini-seção institucional pra mostrar presença no Instagram.
// 2 cards quadrados clicáveis (linkam pro perfil) + CTA.
// Posicionada antes do ManifestoFinal pra criar transição social → manifesto.

const PERFIL_INSTAGRAM = "https://instagram.com/escservicosautomotivos";

const posts = [
  {
    src: "/instagram/post-1.jpg",
    alt: "Postagem da ESC no Instagram",
  },
  {
    src: "/instagram/post-2.jpg",
    alt: "Postagem da ESC no Instagram",
  },
];

export function NasRedes() {
  return (
    <section
      id="instagram"
      className="border-b border-[var(--border)] bg-[var(--card)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          {/* Coluna texto */}
          <div>
            <SectionLabel numero="10">Nas redes</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl">
              Acompanhe nossa rotina no Instagram.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--fg-body)]">
              Compartilhamos os bastidores, os aprendizados técnicos e o
              trabalho da equipe. Sem propaganda — só o registro real do
              método em ação.
            </p>
            <a
              href={PERFIL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=instagram_click mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--fg)] px-6 text-sm font-bold text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              <InstagramIcon className="h-4 w-4" />
              Seguir @escservicosautomotivos
            </a>
          </div>

          {/* Coluna posts */}
          <div className="grid grid-cols-2 gap-4">
            {posts.map((post, i) => (
              <a
                key={post.src}
                href={PERFIL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=instagram_post_click group relative aspect-square overflow-hidden rounded-2xl bg-[var(--bg)] ring-1 ring-[var(--border)]"
                aria-label={`Ver postagem ${i + 1} no Instagram`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-black-deep)]/0 transition-colors group-hover:bg-[var(--color-black-deep)]/40">
                  <InstagramIcon className="h-7 w-7 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
