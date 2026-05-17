import Link from "next/link";

const anoAtual = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              ESC Serviços Automotivos
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Oficina mecânica com método registrado em cada serviço.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Navegação
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <Link href="#metodo" className="hover:text-brand-orange">
                  O Método
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-brand-orange">
                  Fast vs Sistema Completo
                </Link>
              </li>
              <li>
                <Link href="#pre-diagnostico" className="hover:text-brand-orange">
                  Pré-diagnóstico
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-brand-orange">
                  Onde estamos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <Link
                  href="/politica-privacidade"
                  className="hover:text-brand-orange"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-brand-orange">
                  Termos de Uso
                </Link>
              </li>
              <li className="text-xs text-slate-500">
                Pedidos LGPD:{" "}
                <a
                  href="mailto:lgpd@escservicosautomotivos.com.br"
                  className="underline decoration-dotted underline-offset-2 hover:text-brand-orange"
                >
                  lgpd@escservicosautomotivos.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Empresa
            </p>
            <address className="mt-3 not-italic text-xs leading-relaxed text-slate-600">
              ESC Serviços Automotivos LTDA
              <br />
              CNPJ XX.XXX.XXX/0001-XX
              <br />
              Barueri · SP
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {anoAtual} ESC Serviços Automotivos LTDA. Todos os direitos
            reservados.
          </p>
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Método registrado em cada serviço
          </p>
        </div>
      </div>
    </footer>
  );
}
