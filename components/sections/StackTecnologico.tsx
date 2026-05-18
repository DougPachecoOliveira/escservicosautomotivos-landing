import { SectionLabel } from "@/components/SectionLabel";
import {
  Camera,
  Clock,
  MessageSquareText,
  FileSignature,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// Por que a ESC consegue esse nível de transparência:
// posiciona como "oficina + empresa de tecnologia".
// Voz factual, não vende — explica.

const pilares = [
  {
    icone: Camera,
    titulo: "App próprio",
    descricao:
      "Sistema desenvolvido pela ESC. Check-in guiado, 8 fotos obrigatórias, registro técnico por etapa.",
  },
  {
    icone: Clock,
    titulo: "Cronometragem",
    descricao:
      "Tempo de cada serviço medido. Não é estimativa — é registro real, por mecânico e por etapa.",
  },
  {
    icone: MessageSquareText,
    titulo: "Aprovação via WhatsApp",
    descricao:
      "Cada item do orçamento enviado individualmente. Você aprova o que quiser, recusa o que quiser.",
  },
  {
    icone: FileSignature,
    titulo: "Termo digital",
    descricao:
      "Entrada e saída do veículo assinadas no app. PDF arquivado pra consulta futura, sem papel.",
  },
  {
    icone: ShieldCheck,
    titulo: "Auditoria automática",
    descricao:
      "Sistema detecta inconsistências (foto faltando, etapa pulada) antes do veículo sair.",
  },
  {
    icone: Sparkles,
    titulo: "IA na sugestão",
    descricao:
      "Diagnóstico assistido por IA pra acelerar identificação — confirmado sempre por técnico humano.",
  },
];

export function StackTecnologico() {
  return (
    <section
      id="stack"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionLabel numero="08">Por que conseguimos</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Tecnologia atrás de cada etapa.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Transparência não é discurso, é processo executado por sistema.
            O que outras oficinas fazem em papel ou no improviso, nós fazemos
            no app desenvolvido pra isso.
          </p>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {pilares.map(({ icone: Icon, titulo, descricao }) => (
            <div
              key={titulo}
              className="border-t border-[var(--border)] pt-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-orange)]/10 text-[var(--color-orange)]">
                <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              </div>
              <h3 className="mt-5 text-base font-bold text-[var(--fg)]">
                {titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-body)]">
                {descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
