"use client";

import { cn } from "@/lib/utils";

type WhatsappFABProps = {
  /** Número no formato 55DDD9XXXXXXXX (sem símbolos). */
  numero: string;
  mensagemPadrao?: string;
  className?: string;
};

export function WhatsappFAB({
  numero,
  mensagemPadrao = "Olá! Vim pelo site da ESC Serviços Automotivos e gostaria de tirar uma dúvida.",
  className,
}: WhatsappFABProps) {
  const href = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemPadrao)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        "plausible-event-name=whatsapp_fab_click",
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95",
        "sm:bottom-8 sm:right-8 sm:h-16 sm:w-16",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12.04 2.003c-5.502 0-9.97 4.466-9.97 9.97 0 1.756.457 3.464 1.327 4.965L2 22l5.207-1.36a9.94 9.94 0 0 0 4.834 1.227h.004c5.5 0 9.97-4.466 9.97-9.97 0-2.665-1.039-5.17-2.923-7.054a9.92 9.92 0 0 0-7.05-2.84zm0 18.166h-.003a8.27 8.27 0 0 1-4.212-1.155l-.302-.18-3.135.82.836-3.054-.196-.314a8.27 8.27 0 0 1-1.267-4.413c0-4.575 3.722-8.297 8.293-8.297a8.24 8.24 0 0 1 5.866 2.432 8.24 8.24 0 0 1 2.43 5.87c0 4.575-3.72 8.291-8.31 8.291zm4.547-6.213c-.249-.124-1.473-.727-1.7-.81-.229-.083-.395-.124-.561.125-.166.249-.643.81-.789.976-.145.166-.291.187-.54.062-.249-.124-1.052-.388-2.003-1.236-.741-.66-1.241-1.477-1.387-1.725-.146-.249-.016-.384.109-.508.112-.111.249-.291.374-.437.124-.146.166-.249.249-.415.083-.166.041-.311-.021-.436-.062-.124-.561-1.353-.769-1.852-.203-.486-.408-.42-.561-.428-.146-.008-.311-.01-.477-.01-.166 0-.436.062-.665.311-.229.249-.873.852-.873 2.077 0 1.225.893 2.41 1.018 2.577.124.166 1.758 2.685 4.262 3.765.595.257 1.06.41 1.422.525.598.19 1.142.163 1.572.099.479-.071 1.473-.602 1.681-1.184.207-.581.207-1.08.145-1.185-.062-.104-.228-.166-.477-.291z" />
      </svg>
    </a>
  );
}
