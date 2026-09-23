import { Star } from "lucide-react";

// Fileira de estrelas preenchidas (avaliação Google). Decorativa por padrão;
// passe `label` pra anunciar a nota a leitores de tela.
export function Estrelas({
  nota = 5,
  className = "",
  tamanho = 16,
  label,
}: {
  nota?: number;
  className?: string;
  tamanho?: number;
  label?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={label ?? `${nota} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={tamanho}
          height={tamanho}
          aria-hidden="true"
          className={
            i < Math.round(nota)
              ? "fill-[#fbbc04] text-[#fbbc04]"
              : "fill-transparent text-[var(--border)]"
          }
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
