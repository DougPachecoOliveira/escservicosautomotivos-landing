import { PreDiagnosticoForm } from "@/components/PreDiagnosticoForm";
import { SectionLabel } from "@/components/SectionLabel";

export function PreDiagnostico() {
  return (
    <section
      id="pre-diagnostico"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel numero="04">Diagnóstico Método ESC</SectionLabel>
          </div>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Antecipar custa menos do que socorrer.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-body)]">
            Conte o que está acontecendo com o carro. Respondemos no WhatsApp
            em até 2 horas úteis com o caminho recomendado: Fast ou Sistema
            Completo.
          </p>
        </div>

        <div className="mt-12">
          <PreDiagnosticoForm />
        </div>
      </div>
    </section>
  );
}
