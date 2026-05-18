"use client";

import { useEffect, useRef, useState } from "react";

// Counter que conta de 0 ao valor final quando entra no viewport.
// Aceita prefixo/sufixo (%, K, R$, etc) e valor numérico OU string (mantém literal).
// Se reduce-motion estiver ativo, mostra valor final direto sem animar.

type Props = {
  /** Valor a animar — se string contém texto não-numérico, é exibido literal */
  valor: string;
  /** Duração da animação em ms (padrão 1500) */
  duracaoMs?: number;
  className?: string;
};

export function CounterAnimado({
  valor,
  duracaoMs = 1500,
  className,
}: Props) {
  const [exibido, setExibido] = useState(valor);
  const ref = useRef<HTMLSpanElement>(null);
  const jaAnimou = useRef(false);

  useEffect(() => {
    if (!ref.current || jaAnimou.current) return;

    // Extrai número do valor (ex: "100%" → 100, "2.400+" → 2400, "Maio/26" → null)
    const match = valor.match(/-?\d[\d.,]*/);
    if (!match) {
      // Valor sem número (ex: "Maio/26") — não anima, mostra literal
      return;
    }
    const numFinal = parseFloat(match[0].replace(/\./g, "").replace(",", "."));
    if (isNaN(numFinal)) return;

    const prefixo = valor.slice(0, match.index);
    const sufixo = valor.slice(match.index! + match[0].length);

    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || jaAnimou.current) return;
        jaAnimou.current = true;

        if (prefersReduce) {
          setExibido(valor);
          return;
        }

        const inicio = performance.now();
        const numInicial = 0;

        function tick(agora: number) {
          const progresso = Math.min(1, (agora - inicio) / duracaoMs);
          // Easing out cubic
          const eased = 1 - Math.pow(1 - progresso, 3);
          const atual = numInicial + (numFinal - numInicial) * eased;

          // Formata: se valor original tinha decimal, preserva; senão inteiro
          const temDecimal = match![0].includes(",") || match![0].includes(".");
          const formatado = temDecimal
            ? atual.toFixed(1).replace(".", ",")
            : Math.round(atual).toString();

          setExibido(`${prefixo}${formatado}${sufixo}`);

          if (progresso < 1) requestAnimationFrame(tick);
          else setExibido(valor); // garante valor exato no final
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [valor, duracaoMs]);

  return (
    <span ref={ref} className={className}>
      {exibido}
    </span>
  );
}
