// Numeração de seção estilo Business Case ESC (slide header "02 · ESC SERVIÇOS...").
// Uso: <SectionLabel numero="01">O Método</SectionLabel>

export function SectionLabel({
  numero,
  children,
}: {
  numero: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
      <span className="font-mono text-[10px] tabular-nums text-[var(--color-orange)]/70">
        {numero}
      </span>
      <span className="h-px w-6 bg-[var(--color-orange)]/40" />
      <span>{children}</span>
    </p>
  );
}
