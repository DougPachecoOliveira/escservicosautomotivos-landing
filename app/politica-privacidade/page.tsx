import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a ESC Serviços Automotivos coleta, usa, armazena e protege seus dados pessoais — em conformidade com a LGPD.",
  alternates: { canonical: "/politica-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidade() {
  return (
    <LegalPageLayout
      titulo="Política de Privacidade"
      subtitulo="Como tratamos seus dados pessoais com transparência, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018)."
      vigenteEm="17 de maio de 2026"
    >
      <Section titulo="1. Quem somos">
        <p>
          <strong className="text-[var(--fg)]">
            ESC Serviços Automotivos LTDA
          </strong>{" "}
          (CNPJ 65.296.437/0001-60), sediada na Rua José Maria Balieiro, 241 —
          Centro, Barueri/SP, CEP 06401-126, é o{" "}
          <strong className="text-[var(--fg)]">controlador</strong> dos dados
          pessoais coletados por este site.
        </p>
        <p>
          Esta política se aplica a{" "}
          <code className="rounded bg-[var(--card)] px-1.5 py-0.5 text-sm">
            escservicosautomotivos.com.br
          </code>{" "}
          e a todas as páginas hospedadas no mesmo domínio.
        </p>
      </Section>

      <Section titulo="2. Quais dados coletamos">
        <p>
          Coletamos apenas o estritamente necessário para responder ao seu
          contato.
        </p>
        <Lista
          itens={[
            <>
              <strong>Identificação:</strong> nome e número de WhatsApp.
              E-mail é opcional.
            </>,
            <>
              <strong>Informações do veículo:</strong> placa, marca, modelo,
              ano e descrição do problema relatado.
            </>,
            <>
              <strong>Dados técnicos:</strong> endereço IP, tipo de
              dispositivo, navegador, e referência da página de origem —
              coletados automaticamente apenas no momento do envio do
              formulário, para prevenção de fraude e abuso.
            </>,
          ]}
        />
        <p>
          <strong className="text-[var(--fg)]">Não coletamos</strong> CPF,
          endereço residencial, dados bancários, data de nascimento, ou
          qualquer outro dado sensível através deste site.
        </p>
      </Section>

      <Section titulo="3. Por que coletamos">
        <p>Os dados são usados exclusivamente para:</p>
        <Lista
          itens={[
            "Responder ao seu pré-diagnóstico via WhatsApp ou e-mail",
            "Indicar o caminho de atendimento adequado (Fast ou Sistema Completo)",
            "Prevenir abuso, spam e fraude (análise dos dados técnicos)",
          ]}
        />
        <p>
          Não enviamos publicidade não solicitada, não fazemos remarketing por
          este canal, e não vendemos seus dados a terceiros.
        </p>
      </Section>

      <Section titulo="4. Base legal (LGPD)">
        <p>O tratamento dos seus dados é fundamentado em:</p>
        <Lista
          itens={[
            <>
              <strong>Consentimento</strong> (art. 7º, I) — você marca o
              checkbox de autorização ao enviar o formulário.
            </>,
            <>
              <strong>Execução de procedimentos preliminares a contrato</strong>{" "}
              (art. 7º, V) — para te responder e formalizar eventual
              atendimento.
            </>,
            <>
              <strong>Legítimo interesse</strong> (art. 7º, IX) — apenas para
              os dados técnicos usados em prevenção de abuso.
            </>,
          ]}
        />
      </Section>

      <Section titulo="5. Por quanto tempo guardamos">
        <p>
          Leads <strong>não convertidos</strong> em atendimento são excluídos
          automaticamente após{" "}
          <strong className="text-[var(--fg)]">6 meses</strong>.
        </p>
        <p>
          Leads que viraram cliente entram na base operacional da oficina e
          passam a ser regidos pela política de retenção do nosso app, que
          mantém histórico de serviços enquanto o vínculo comercial existir,
          conforme exigência fiscal e tributária.
        </p>
      </Section>

      <Section titulo="6. Com quem compartilhamos">
        <p>
          Para operar o site, contamos com prestadores de serviço (operadores,
          na linguagem da LGPD) que tratam dados em nosso nome:
        </p>
        <Lista
          itens={[
            <>
              <strong>Cloudflare, Inc.</strong> — hospedagem do site,
              proteção contra ataques e entrega de conteúdo. Dados em trânsito.
            </>,
            <>
              <strong>Google LLC (Firebase)</strong> — armazenamento dos leads
              em banco de dados na região{" "}
              <code className="rounded bg-[var(--card)] px-1.5 py-0.5 text-sm">
                southamerica-east1
              </code>{" "}
              (São Paulo).
            </>,
            <>
              <strong>Resend, Inc.</strong> — envio de notificação interna
              quando um lead é recebido.
            </>,
            <>
              <strong>Brasil API</strong> — consulta pública de marca/modelo
              do veículo a partir da placa.
            </>,
          ]}
        />
        <p>
          Todos os operadores acima possuem termos de processamento de dados
          (DPA) que asseguram níveis de proteção compatíveis com a LGPD.
        </p>
      </Section>

      <Section titulo="7. Seus direitos">
        <p>
          A LGPD garante a você (titular dos dados) os seguintes direitos a
          qualquer momento:
        </p>
        <Lista
          itens={[
            "Confirmar se tratamos seus dados",
            "Acessar uma cópia dos dados que temos sobre você",
            "Corrigir dados incompletos, inexatos ou desatualizados",
            "Solicitar a exclusão (anonimização) dos seus dados",
            "Solicitar portabilidade para outro fornecedor",
            "Revogar o consentimento dado, a qualquer momento",
            "Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD)",
          ]}
        />
        <p>
          Para exercer qualquer um destes direitos, envie um e-mail para{" "}
          <a
            href="mailto:suporte@escservicosautomotivos.com.br?subject=LGPD%20-%20Solicita%C3%A7%C3%A3o%20de%20direito%20do%20titular"
            className="text-[var(--color-orange)] underline decoration-dotted underline-offset-2"
          >
            suporte@escservicosautomotivos.com.br
          </a>{" "}
          com o assunto &ldquo;LGPD&rdquo;. Respondemos em até 15 dias.
        </p>
      </Section>

      <Section titulo="8. Segurança">
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus
          dados:
        </p>
        <Lista
          itens={[
            "Conexão HTTPS (TLS 1.3) em todas as páginas",
            "Headers de segurança restritivos (CSP, HSTS, X-Frame-Options)",
            "Proteção anti-bot (Cloudflare Turnstile) e rate-limiting no formulário",
            "Banco de dados com regras de acesso restritivas (apenas o controlador acessa)",
            "Backup diário com retenção de 30 dias",
            "Autenticação multifator (2FA) no acesso administrativo",
          ]}
        />
        <p>
          Nenhum sistema é 100% seguro. Em caso de incidente de segurança que
          possa gerar risco relevante aos titulares, a ANPD e os afetados
          serão comunicados conforme exigido pelo art. 48 da LGPD.
        </p>
      </Section>

      <Section titulo="9. Cookies e tecnologias similares">
        <p>
          Este site não utiliza cookies de rastreamento, de publicidade ou de
          terceiros. Não fazemos perfilagem comportamental.
        </p>
        <p>
          Utilizamos uma ferramenta de analytics que respeita a privacidade
          (sem cookies, sem dados pessoais) apenas para entender o volume
          agregado de visitas. Você não precisa consentir nada para navegar.
        </p>
      </Section>

      <Section titulo="10. Crianças e adolescentes">
        <p>
          Este site não é direcionado a menores de 18 anos. Não coletamos
          dados de menores conscientemente. Se você é responsável legal e
          identificar coleta indevida, entre em contato para que possamos
          excluir.
        </p>
      </Section>

      <Section titulo="11. Alterações nesta política">
        <p>
          Esta política pode ser atualizada para refletir mudanças
          regulatórias ou operacionais. A data de vigência (no topo) indica a
          versão atual. Alterações materiais serão comunicadas em destaque na
          página inicial por pelo menos 30 dias.
        </p>
      </Section>

      <Section titulo="12. Encarregado de Dados (DPO)">
        <p>
          Funções de Encarregado de Dados são exercidas pela administração da
          ESC Serviços Automotivos LTDA. Contato:{" "}
          <a
            href="mailto:suporte@escservicosautomotivos.com.br?subject=LGPD"
            className="text-[var(--color-orange)] underline decoration-dotted underline-offset-2"
          >
            suporte@escservicosautomotivos.com.br
          </a>
          .
        </p>
      </Section>
    </LegalPageLayout>
  );
}

function Section({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold leading-tight tracking-tight text-[var(--fg)]">
        {titulo}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Lista({ itens }: { itens: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {itens.map((item, i) => (
        <li
          key={i}
          className="list-[circle] text-sm leading-relaxed marker:text-[var(--color-orange)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
