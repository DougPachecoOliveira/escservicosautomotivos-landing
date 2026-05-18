"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// Wrapper que faz fade-in + slide-up sutil quando entra no viewport.
// Respeita prefers-reduced-motion (sem animação).
// Uso: <ScrollReveal><MinhaSection /></ScrollReveal>

export function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduzir = useReducedMotion();

  if (reduzir) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
