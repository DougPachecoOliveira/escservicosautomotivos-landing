import Link from "next/link";
import { FaixaCTA } from "@/components/FaixaCTA";

const anoAtual = new Date().getFullYear();

export function Footer() {
  return (
    <footer>
      {/* Faixa CTA: assinatura visual invariante da marca (brand system §1.5) */}
      <FaixaCTA />

      <div className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--fg)]">
                <span className="text-[var(--color-orange)]">ESC</span>{" "}
                Serviços Automotivos
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--fg-body)]">
                Método, transparência e capricho.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--fg-mantra)]">
                Sem improviso. Sem surpresa.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                Navegação
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--fg-body)]">
                <li>
                  <Link
                    href="#metodo"
                    className="transition-colors hover:text-[var(--color-orange)]"
                  >
                    O Método
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="transition-colors hover:text-[var(--color-orange)]"
                  >
                    Fast e Sistema Completo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pre-diagnostico"
                    className="transition-colors hover:text-[var(--color-orange)]"
                  >
                    Diagnóstico Método ESC
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="transition-colors hover:text-[var(--color-orange)]"
                  >
                    Onde estamos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                Legal
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--fg-body)]">
                <li>
                  <Link
                    href="/politica-privacidade"
                    className="transition-colors hover:text-[var(--color-orange)]"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos"
                    className="transition-colors hover:text-[var(--color-orange)]"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li className="text-xs text-[var(--fg-mantra)]">
                  Pedidos LGPD:{" "}
                  <a
                    href="mailto:atendimento@escservicosautomotivos.com.br?subject=LGPD"
                    className="underline decoration-dotted underline-offset-2 transition-colors hover:text-[var(--color-orange)]"
                  >
                    atendimento@escservicosautomotivos.com.br
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--fg-mantra)]">
                Empresa
              </p>
              <address className="mt-3 not-italic text-xs leading-relaxed text-[var(--fg-body)]">
                ESC Serviços Automotivos LTDA
                <br />
                CNPJ 65.296.437/0001-60
                <br />
                Rua José Maria Balieiro, 241 — Centro
                <br />
                Barueri <span className="text-[var(--color-orange)]">·</span>{" "}
                SP <span className="text-[var(--color-orange)]">·</span> CEP
                06401-126
              </address>
              <p className="mt-3 text-xs text-[var(--fg-body)]">
                <a
                  href="tel:+5511991783807"
                  className="transition-colors hover:text-[var(--color-orange)]"
                >
                  (11) 99178-3807
                </a>
              </p>
              <p className="text-xs text-[var(--fg-body)]">
                <a
                  href="mailto:atendimento@escservicosautomotivos.com.br"
                  className="transition-colors hover:text-[var(--color-orange)]"
                >
                  atendimento@escservicosautomotivos.com.br
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-[var(--fg-mantra)]">
              © {anoAtual} ESC Serviços Automotivos LTDA. Todos os direitos
              reservados.
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--fg-mantra)]">
              Você entende antes{" "}
              <span className="text-[var(--color-orange)]">·</span> Acompanha
              durante{" "}
              <span className="text-[var(--color-orange)]">·</span> Confirma na
              entrega
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
