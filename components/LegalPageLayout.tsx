import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";

export function LegalPageLayout({
  titulo,
  subtitulo,
  vigenteEm,
  children,
}: {
  titulo: string;
  subtitulo?: string;
  vigenteEm: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg)] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--fg-mantra)] transition-colors hover:text-[var(--color-orange)]"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            Voltar ao site
          </Link>

          <header className="mt-8 border-b border-[var(--border)] pb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
              Documento legal
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-4xl">
              {titulo}
            </h1>
            {subtitulo && (
              <p className="mt-3 text-base text-[var(--fg-body)]">
                {subtitulo}
              </p>
            )}
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-[var(--fg-mantra)]">
              Vigente desde {vigenteEm}
            </p>
          </header>

          <article className="legal mt-10 space-y-6 text-[var(--fg-body)]">
            {children}
          </article>

          <footer className="mt-16 border-t border-[var(--border)] pt-8">
            <p className="text-xs leading-relaxed text-[var(--fg-mantra)]">
              ESC Serviços Automotivos LTDA{" "}
              <span className="text-[var(--color-orange)]">·</span> CNPJ
              65.296.437/0001-60{" "}
              <span className="text-[var(--color-orange)]">·</span> Rua José
              Maria Balieiro, 241 — Centro, Barueri/SP — CEP 06401-126
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--fg-mantra)]">
              Dúvidas sobre este documento:{" "}
              <a
                href="mailto:suporte@escservicosautomotivos.com.br"
                className="underline decoration-dotted underline-offset-2 transition-colors hover:text-[var(--color-orange)]"
              >
                suporte@escservicosautomotivos.com.br
              </a>
            </p>
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
