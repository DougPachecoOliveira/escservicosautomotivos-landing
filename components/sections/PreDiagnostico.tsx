import { PreDiagnosticoForm } from "@/components/PreDiagnosticoForm";
import { SectionLabel } from "@/components/SectionLabel";

const WHATSAPP_PREDIAGNOSTICO = `https://wa.me/5511991783807?text=${encodeURIComponent(
  "Oi! Gostaria de fazer um pré-diagnóstico do meu carro.",
)}`;

export function PreDiagnostico() {
  return (
    <section
      id="pre-diagnostico"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel numero="08">Diagnóstico Método ESC</SectionLabel>
          </div>

          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-orange)]/30 bg-[var(--color-orange)]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-orange)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-orange)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-orange)]" />
              </span>
              Atendendo · Resposta em até 2h úteis
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Antecipar custa menos do que socorrer.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Conte o que está acontecendo com o carro. Respondemos no WhatsApp
            com o caminho recomendado: Fast ou Sistema Completo.
          </p>
        </div>

        <div className="mt-12">
          <PreDiagnosticoForm />
        </div>

        <p className="mt-8 text-center text-sm text-[var(--fg-body)]">
          Prefere conversar direto?{" "}
          <a
            href={WHATSAPP_PREDIAGNOSTICO}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=whatsapp_form_alt_click font-bold text-[var(--color-orange)] underline-offset-4 hover:underline"
          >
            Abra o WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
