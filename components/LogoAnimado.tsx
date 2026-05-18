"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LogoAnimadoProps = {
  className?: string;
  /** Pula a animação (útil em testes ou re-renders). */
  estatico?: boolean;
};

// Ordem da animação: divider primeiro (base), letras E→S→C, carro entra da
// esquerda, speed lines piscam, subtext fecha. ViewBox idêntico em todos os
// 7 SVGs (540×340) permite sobreposição absoluta direta.
// Algumas camadas têm loop infinito sutil pós-entrada (movimento "vivo").
type Camada = {
  src: string;
  delay: number;
  transform: { x?: number; y?: number };
  loop?: { animar: Record<string, number[]>; duracao: number };
};

const camadas: Camada[] = [
  { src: "/logo/layer_divider_line.svg", delay: 0, transform: { x: 0, y: 0 } },
  { src: "/logo/layer_letter_e.svg", delay: 0.15, transform: { y: -8 } },
  { src: "/logo/layer_letter_s.svg", delay: 0.3, transform: { y: -8 } },
  { src: "/logo/layer_letter_c.svg", delay: 0.45, transform: { y: -8 } },
  {
    src: "/logo/layer_car_outline.svg",
    delay: 0.65,
    transform: { x: -16 },
    // Respiração sutil pós-entrada
    loop: { animar: { x: [0, 3, 0] }, duracao: 5 },
  },
  {
    src: "/logo/layer_speed_lines.svg",
    delay: 0.85,
    transform: { x: -8 },
    // Pulsação contínua nas speed lines (sensação de movimento)
    loop: { animar: { opacity: [1, 0.6, 1] }, duracao: 2.4 },
  },
  { src: "/logo/layer_subtext.svg", delay: 1.05, transform: { y: 8 } },
];

export function LogoAnimado({ className, estatico = false }: LogoAnimadoProps) {
  const reduceMotion = useReducedMotion();
  const skipAnimation = estatico || reduceMotion;

  return (
    <div
      className={cn("relative aspect-[540/340] w-full max-w-2xl", className)}
      role="img"
      aria-label="ESC Serviços Automotivos"
    >
      {camadas.map((camada) => {
        const animateEntrada = { opacity: 1, x: 0, y: 0 };
        const animateLoop =
          !skipAnimation && camada.loop ? camada.loop.animar : {};

        return (
          <motion.img
            key={camada.src}
            src={camada.src}
            alt=""
            aria-hidden
            draggable={false}
            className="absolute inset-0 h-full w-full select-none"
            initial={
              skipAnimation
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, ...camada.transform }
            }
            animate={{ ...animateEntrada, ...animateLoop }}
            transition={{
              duration: skipAnimation ? 0 : 0.55,
              delay: skipAnimation ? 0 : camada.delay,
              ease: [0.22, 1, 0.36, 1],
              ...(camada.loop && !skipAnimation
                ? {
                    [Object.keys(camada.loop.animar)[0]]: {
                      duration: camada.loop.duracao,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: camada.delay + 1.2,
                    },
                  }
                : {}),
            }}
          />
        );
      })}
    </div>
  );
}
