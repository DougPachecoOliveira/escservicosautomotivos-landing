import { MapPin, Clock, Phone, Star } from "lucide-react";

// Endereço oficial confirmado no brand system.
const endereco = "Rua José Maria Balieiro, 241";
const cidade = "Barueri · SP";
const horario = [
  { dia: "Segunda a sexta", horas: "08:00 às 18:00" },
  { dia: "Sábado", horas: "08:00 às 13:00" },
  { dia: "Domingo", horas: "Fechado" },
];
const telefoneExibicao = "(11) ____-____";

// Placeholder do embed. Substitua por iframe real do Google Maps quando
// confirmar a localização no Google Meu Negócio.
const googleMapsQuery =
  "Rua José Maria Balieiro, 241, Barueri, SP";
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
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">
            Onde estamos
          </p>
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
                <p className="text-sm text-[var(--fg-body)]">{cidade}</p>
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
                  Telefone
                </p>
                <p className="mt-1 text-base text-[var(--fg)]">
                  {telefoneExibicao}
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=ESC+Servi%C3%A7os+Automotivos+Barueri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] px-6 text-sm font-bold text-[var(--fg)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
            >
              <Star
                className="h-4 w-4 text-[var(--color-orange)]"
                strokeWidth={2.2}
              />
              Avalie no Google
            </a>
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
