import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Recebemos o seu pré-diagnóstico",
  description: "Em breve nossa equipe entra em contato pelo WhatsApp.",
  alternates: { canonical: "/obrigado" },
  robots: { index: false, follow: true },
};

export default function Obrigado() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center bg-[var(--bg)] px-6 py-20">
        <div className="max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-orange)]/10">
            <CheckCircle2
              className="h-9 w-9 text-[var(--color-orange)]"
              strokeWidth={2.2}
            />
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
            Recebido
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Vamos olhar com calma o seu pré-diagnóstico.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[var(--fg-body)]">
            Nossa equipe técnica responde no WhatsApp em até{" "}
            <strong className="text-[var(--fg)]">2 horas úteis</strong> com o
            caminho recomendado para o seu carro — Fast ou Sistema Completo.
          </p>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-[var(--fg-mantra)]">
            Você entende antes{" "}
            <span className="text-[var(--color-orange)]">·</span> Acompanha
            durante{" "}
            <span className="text-[var(--color-orange)]">·</span> Confirma na
            entrega
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-orange)] px-6 text-sm font-bold text-[var(--color-black-deep)] transition-colors hover:bg-[var(--color-orange-hover)]"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              Voltar ao site
            </Link>
            <a
              href="https://wa.me/5511991783807?text=Ol%C3%A1!%20Acabei%20de%20enviar%20um%20pr%C3%A9-diagn%C3%B3stico%20pelo%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] px-6 text-sm font-bold text-[var(--fg)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
            >
              Abrir WhatsApp agora
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
