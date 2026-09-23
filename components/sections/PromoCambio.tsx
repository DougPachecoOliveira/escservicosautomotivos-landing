import {
  ShieldCheck,
  Waves,
  Thermometer,
  BadgeCheck,
  Droplet,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

// Promoção em destaque — Troca do fluido do câmbio automático.
// Reproduzida NATIVAMENTE (não é imagem): responsiva, acessível, com o
// WhatsApp como link real. Usa os tokens de tema (--bg/--fg/--card/--border),
// então fica bonita TANTO no modo escuro quanto no modo claro. O laranja é
// o destaque constante (spec do brand).
//
// Para tirar do ar depois: remover <PromoCambio /> de app/page.tsx.

const WHATSAPP_PROMO = `https://wa.me/5511991783807?text=${encodeURIComponent(
  "Olá! Eu gostaria de conhecer a ESC e também solicitar um orçamento para a troca do fluido de câmbio.",
)}`;

const beneficios = [
  { Icon: ShieldCheck, texto: "Maior vida útil da transmissão" },
  { Icon: Waves, texto: "Trocas mais suaves e precisas" },
  { Icon: Thermometer, texto: "Controle térmico eficiente" },
  { Icon: BadgeCheck, texto: "Fluido especificado pelo fabricante" },
];

const veiculos = ["T-Cross", "Civic", "Kicks", "Pulse", "Creta"];

export function PromoCambio() {
  return (
    <section
      id="promocao"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--card)] py-20 sm:py-28"
    >
      {/* brilho laranja de fundo, sutil (funciona nos dois temas) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[var(--color-orange)] opacity-[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* topo: texto à esquerda, foto do câmbio à direita */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div>
            {/* selos topo */}
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel numero="★">Promoção</SectionLabel>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-orange)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-orange)]">
                Linha Nacional
              </span>
            </div>

            {/* headline */}
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-[var(--fg)] sm:text-6xl">
              Você troca o{" "}
              <span className="text-[var(--color-orange)]">fluido agora</span> ou
              paga pelo{" "}
              <span className="text-[var(--color-orange)]">câmbio depois?</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg-body)] sm:text-lg">
              Uma manutenção preventiva pode evitar um prejuízo de{" "}
              <strong className="font-bold text-[var(--fg)]">
                dezenas de milhares
              </strong>
              .
            </p>
          </div>

          {/* foto do câmbio — quadro dark que fica bonito nos dois temas */}
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-orange)]/30 shadow-xl shadow-black/20">
            <img
              src="/promo/cambio.jpg"
              alt="Câmbio automático aberto, mostrando engrenagens e corrente"
              className="h-full w-full object-cover"
              loading="lazy"
              width={400}
              height={315}
            />
          </div>
        </div>

        {/* prevenir vs remediar */}
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-[var(--color-orange)]/50 bg-[var(--bg)] p-6">
            <div className="flex items-center gap-3">
              <Droplet
                className="h-9 w-9 flex-shrink-0 text-[var(--color-orange)]"
                strokeWidth={2}
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                  Prevenir hoje
                </p>
                <p className="mt-1 text-lg font-bold leading-snug text-[var(--fg)]">
                  Troca do fluido do câmbio automático
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ChevronRight
              className="h-8 w-8 rotate-90 text-[var(--fg-mantra)] sm:rotate-0"
              strokeWidth={2.5}
              aria-hidden
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle
                className="h-9 w-9 flex-shrink-0 text-[var(--fg-mantra)]"
                strokeWidth={2}
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--fg-mantra)]">
                  Remediar depois
                </p>
                <p className="mt-1 text-lg font-bold leading-snug text-[var(--fg)]">
                  Câmbio inteiro — pode passar de R$ 20 mil
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* benefícios */}
        <div className="mt-4 grid gap-x-6 gap-y-8 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-8 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(({ Icon, texto }) => (
            <div key={texto} className="flex flex-col items-center text-center">
              <Icon
                className="h-9 w-9 text-[var(--color-orange)]"
                strokeWidth={2}
                aria-hidden
              />
              <p className="mt-3 text-sm font-medium leading-snug text-[var(--fg-body)]">
                {texto}
              </p>
            </div>
          ))}
        </div>

        {/* preço + garantia do fluido */}
        <div className="mt-4 grid gap-4 rounded-2xl border border-[var(--color-orange)]/40 bg-[var(--bg)] p-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
              Parcelas a partir de
            </p>
            <p className="mt-1 flex items-start font-bold leading-none tracking-tight text-[var(--fg)]">
              <span className="mt-2 text-3xl sm:text-4xl">R$</span>
              <span className="text-6xl sm:text-7xl">189,90</span>
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--fg)]">
              No cartão de crédito
            </p>
            <p className="mt-1 text-sm text-[var(--fg-body)]">
              Valor varia conforme modelo e transmissão.
            </p>
          </div>

          <div className="flex items-center gap-4 border-t border-[var(--border)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <Droplet
              className="h-10 w-10 flex-shrink-0 text-[var(--color-orange)]"
              strokeWidth={2}
              aria-hidden
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-orange)]">
                Fluido especificado pelo fabricante
              </p>
              <p className="mt-1 text-xl font-bold leading-snug text-[var(--fg)]">
                Aqui não usamos óleo de tonel.
              </p>
            </div>
          </div>
        </div>

        {/* veículos atendidos */}
        <div className="mt-8 text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg font-bold text-[var(--fg)] sm:text-xl">
            {veiculos.map((v, i) => (
              <span key={v} className="inline-flex items-center gap-3">
                {v}
                {i < veiculos.length - 1 && (
                  <span className="text-[var(--color-orange)]">·</span>
                )}
              </span>
            ))}
          </p>
          <p className="mt-1 text-sm text-[var(--fg-body)]">
            e outros veículos nacionais
          </p>
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_PROMO}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=whatsapp_inline_click group inline-flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-8 text-base font-bold text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M12.04 2.003c-5.502 0-9.97 4.466-9.97 9.97 0 1.756.457 3.464 1.327 4.965L2 22l5.207-1.36a9.94 9.94 0 0 0 4.834 1.227h.004c5.5 0 9.97-4.466 9.97-9.97 0-2.665-1.039-5.17-2.923-7.054a9.92 9.92 0 0 0-7.05-2.84zm0 18.166h-.003a8.27 8.27 0 0 1-4.212-1.155l-.302-.18-3.135.82.836-3.054-.196-.314a8.27 8.27 0 0 1-1.267-4.413c0-4.575 3.722-8.297 8.293-8.297a8.24 8.24 0 0 1 5.866 2.432 8.24 8.24 0 0 1 2.43 5.87c0 4.575-3.72 8.291-8.31 8.291zm4.547-6.213c-.249-.124-1.473-.727-1.7-.81-.229-.083-.395-.124-.561.125-.166.249-.643.81-.789.976-.145.166-.291.187-.54.062-.249-.124-1.052-.388-2.003-1.236-.741-.66-1.241-1.477-1.387-1.725-.146-.249-.016-.384.109-.508.112-.111.249-.291.374-.437.124-.146.166-.249.249-.415.083-.166.041-.311-.021-.436-.062-.124-.561-1.353-.769-1.852-.203-.486-.408-.42-.561-.428-.146-.008-.311-.01-.477-.01-.166 0-.436.062-.665.311-.229.249-.873.852-.873 2.077 0 1.225.893 2.41 1.018 2.577.124.166 1.758 2.685 4.262 3.765.595.257 1.06.41 1.422.525.598.19 1.142.163 1.572.099.479-.071 1.473-.602 1.681-1.184.207-.581.207-1.08.145-1.185-.062-.104-.228-.166-.477-.291z" />
            </svg>
            Agende pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
