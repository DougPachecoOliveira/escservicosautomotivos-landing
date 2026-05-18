import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
        <Link
          href="/"
          className="flex items-baseline gap-2 text-base font-bold tracking-tight"
          aria-label="ESC Serviços Automotivos — Início"
        >
          <span className="text-[var(--color-orange)]">ESC</span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-[var(--fg-mantra)] sm:inline">
            Serviços Automotivos
          </span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          <Link
            href="#metodo"
            className="hidden rounded-full px-3 py-2 text-[var(--fg-body)] transition-colors hover:text-[var(--color-orange)] md:inline-block"
          >
            Método
          </Link>
          <Link
            href="#portfolio"
            className="hidden rounded-full px-3 py-2 text-[var(--fg-body)] transition-colors hover:text-[var(--color-orange)] lg:inline-block"
          >
            Serviços
          </Link>
          <Link
            href="#contato"
            className="hidden rounded-full px-3 py-2 text-[var(--fg-body)] transition-colors hover:text-[var(--color-orange)] md:inline-block"
          >
            Contato
          </Link>

          {/* CTA primário sempre visível — leva pro form de pré-diagnóstico */}
          <Link
            href="#pre-diagnostico"
            className="plausible-event-name=header_cta_click ml-2 inline-flex h-9 items-center rounded-full bg-[var(--color-orange)] px-4 text-xs font-bold uppercase tracking-wider text-[var(--color-black-deep)] transition-colors hover:bg-[var(--color-orange-hover)] sm:text-sm sm:tracking-wide"
          >
            <span className="sm:hidden">Diagnóstico</span>
            <span className="hidden sm:inline">Diagnóstico Método ESC</span>
          </Link>

          <ThemeToggle className="ml-1" />
        </nav>
      </div>
    </header>
  );
}
