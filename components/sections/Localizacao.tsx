import { MapPin, Clock, Phone, Star } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

// Dados oficiais confirmados.
const endereco = "Rua José Maria Balieiro, 241";
const bairro = "Centro";
const cidade = "Barueri · SP";
const cep = "CEP 06401-126";
const horario = [
  { dia: "Segunda a sexta", horas: "08:00 às 18:00" },
  { dia: "Sábado", horas: "08:00 às 13:00" },
  { dia: "Domingo", horas: "Fechado" },
];
const telefoneExibicao = "(11) 99178-3807";
const telefoneWhatsapp = "5511991783807";

const googleMapsQuery =
  "Rua José Maria Balieiro, 241, Centro, Barueri, SP, 06401-126";
const googleMapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  googleMapsQuery,
)}&output=embed`;

export function Localizacao() {
  return (
    <section
      id="contato"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionLabel numero="10">Onde estamos</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl">
            Em Barueri Centro.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-7">
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-orange)]"
                strokeWidth={2.2}
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                  Endereço
                </p>
                <p className="mt-1 text-base text-[var(--fg)]">{endereco}</p>
                <p className="text-sm text-[var(--fg-body)]">
                  {bairro} <span className="text-[var(--color-orange)]">·</span> {cidade}
                </p>
                <p className="text-xs text-[var(--fg-mantra)]">{cep}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-orange)]"
                strokeWidth={2.2}
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                  Horário
                </p>
                <dl className="mt-1 space-y-0.5 text-sm text-[var(--fg)]">
                  {horario.map((h) => (
                    <div key={h.dia} className="flex gap-2">
                      <dt className="text-[var(--fg-body)]">{h.dia}:</dt>
                      <dd>{h.horas}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone
                className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-orange)]"
                strokeWidth={2.2}
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                  Telefone <span className="text-[var(--color-orange)]">·</span> WhatsApp
                </p>
                <a
                  href={`tel:+${telefoneWhatsapp}`}
                  className="plausible-event-name=telefone_click mt-1 block text-base text-[var(--fg)] transition-colors hover:text-[var(--color-orange)]"
                >
                  {telefoneExibicao}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${telefoneWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=whatsapp_inline_click inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-orange)] px-6 text-sm font-bold text-[var(--color-black-deep)] transition-colors hover:bg-[var(--color-orange-hover)]"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://www.google.com/search?q=ESC+Servi%C3%A7os+Automotivos+Barueri#"
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=google_review_click inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] px-6 text-sm font-bold text-[var(--fg)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
              >
                <Star
                  className="h-4 w-4 text-[var(--color-orange)]"
                  strokeWidth={2.2}
                />
                Avalie no Google
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <iframe
              src={googleMapsEmbed}
              loading="lazy"
              title="Localização ESC Serviços Automotivos"
              className="h-[400px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
