import { MapPin, Clock, Phone, Star } from "lucide-react";

// Placeholders — dono confirma antes do go-live.
const enderecoCompleto = "Endereço — a confirmar · Barueri · SP";
const horario = [
  { dia: "Segunda a sexta", horas: "08:00 – 18:00" },
  { dia: "Sábado", horas: "08:00 – 13:00" },
  { dia: "Domingo", horas: "Fechado" },
];
const telefoneExibicao = "(11) ____-____";
const googleMapsEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14633.123!2d-46.876!3d-23.510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBarueri%20Centro!5e0!3m2!1spt-BR!2sbr!4v0";

export function Localizacao() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-orange">
            Onde estamos
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Em Barueri Centro. Estacionamento próprio.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-orange" />
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                  Endereço
                </p>
                <p className="mt-1 text-base text-slate-800">
                  {enderecoCompleto}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-brand-orange" />
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                  Horário
                </p>
                <dl className="mt-1 space-y-0.5 text-base text-slate-800">
                  {horario.map((h) => (
                    <div key={h.dia} className="flex gap-2">
                      <dt className="text-slate-500">{h.dia}:</dt>
                      <dd>{h.horas}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-brand-orange" />
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                  Telefone
                </p>
                <p className="mt-1 text-base text-slate-800">
                  {telefoneExibicao}
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=ESC+Servi%C3%A7os+Automotivos+Barueri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-300 px-6 text-sm font-medium text-slate-700 transition-colors hover:border-brand-orange hover:bg-brand-orange/5"
            >
              <Star className="h-4 w-4 text-brand-orange" />
              Avalie no Google
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
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
