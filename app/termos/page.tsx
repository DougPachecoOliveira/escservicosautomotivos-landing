import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do site da ESC Serviços Automotivos. Regras claras para o uso da plataforma e do formulário de pré-diagnóstico.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
};

export default function Termos() {
  return (
    <LegalPageLayout
      titulo="Termos de Uso"
      subtitulo="Regras de uso do site escservicosautomotivos.com.br. Ao navegar, você concorda com os termos abaixo."
      vigenteEm="17 de maio de 2026"
    >
      <Section titulo="1. Aceitação">
        <p>
          Ao acessar ou usar este site, você declara ter lido, compreendido e
          concordado com estes Termos de Uso e com a{" "}
          <a
            href="/politica-privacidade"
            className="text-[var(--color-orange)] underline decoration-dotted underline-offset-2"
          >
            Política de Privacidade
          </a>
          . Se não concorda com algum item, por favor não utilize o site.
        </p>
      </Section>

      <Section titulo="2. Quem somos">
        <p>
          O site é operado por{" "}
          <strong className="text-[var(--fg)]">
            ESC Serviços Automotivos LTDA
          </strong>
          , inscrita no CNPJ sob o nº 65.296.437/0001-60, com sede em Barueri,
          SP. Para falar conosco:{" "}
          <a
            href="mailto:atendimento@escservicosautomotivos.com.br"
            className="text-[var(--color-orange)] underline decoration-dotted underline-offset-2"
          >
            atendimento@escservicosautomotivos.com.br
          </a>
          .
        </p>
      </Section>

      <Section titulo="3. Finalidade do site">
        <p>
          Este site tem como finalidade apresentar a ESC Serviços Automotivos,
          explicar o método de trabalho e oferecer um canal de pré-diagnóstico
          via formulário e WhatsApp.
        </p>
        <p>
          O preenchimento do formulário <strong>não constitui contrato</strong>{" "}
          de prestação de serviço, orçamento formal, nem agendamento garantido.
          É uma manifestação de interesse para subsequente contato e
          tratamento adequado.
        </p>
      </Section>

      <Section titulo="4. Uso permitido">
        <p>Você concorda em usar o site:</p>
        <Lista
          itens={[
            "Apenas para finalidades lícitas",
            "Sem tentativas de comprometer a segurança, integridade ou disponibilidade",
            "Sem uso de robôs, scrapers ou ferramentas automatizadas não autorizadas",
            "Sem envio de dados falsos, ofensivos ou de terceiros sem autorização",
          ]}
        />
        <p>
          Violações podem resultar em bloqueio de acesso e, quando aplicável,
          comunicação às autoridades competentes.
        </p>
      </Section>

      <Section titulo="5. Conteúdo e propriedade intelectual">
        <p>
          Todo o conteúdo deste site — incluindo textos, imagens, logomarca
          &ldquo;ESC&rdquo;, identidade visual, código-fonte público, frases
          de marca (&ldquo;Sem improviso. Sem surpresa.&rdquo;,
          &ldquo;Diagnóstico Método ESC&rdquo;, &ldquo;Você entende antes ·
          Acompanha durante · Confirma na entrega.&rdquo;) — é de
          propriedade exclusiva da ESC Serviços Automotivos LTDA ou de seus
          licenciantes.
        </p>
        <p>
          É proibida a reprodução, total ou parcial, sem autorização prévia
          por escrito.
        </p>
      </Section>

      <Section titulo="6. Disponibilidade do serviço">
        <p>
          Trabalhamos para manter o site disponível 24 horas por dia, mas não
          garantimos disponibilidade ininterrupta. Manutenções programadas,
          falhas de terceiros (provedores de hospedagem, conectividade) ou
          eventos de força maior podem interromper temporariamente o acesso.
        </p>
        <p>
          Tais interrupções não geram direito a indenização, salvo nos casos
          previstos em lei.
        </p>
      </Section>

      <Section titulo="7. Limitação de responsabilidade">
        <p>
          As informações apresentadas no site (incluindo sintomas comuns,
          orientações gerais, exemplos de serviços) têm caráter exclusivamente
          informativo. <strong>Não substituem o diagnóstico técnico</strong>{" "}
          presencial realizado por nossa equipe.
        </p>
        <p>
          Decisões tomadas exclusivamente com base no conteúdo do site, sem
          consulta posterior à oficina, são de responsabilidade do usuário.
        </p>
      </Section>

      <Section titulo="8. Links externos">
        <p>
          O site pode conter links para terceiros (Google Maps, WhatsApp,
          redes sociais). Não temos controle sobre o conteúdo ou as práticas
          de privacidade desses sites e não nos responsabilizamos por eles.
          Leia os termos de uso e políticas de privacidade aplicáveis antes de
          utilizar.
        </p>
      </Section>

      <Section titulo="9. Alterações destes termos">
        <p>
          Estes Termos podem ser atualizados a qualquer momento. A versão
          vigente é sempre a publicada nesta página, com a data de vigência
          indicada no topo. O uso continuado após uma alteração configura
          aceitação dos novos termos.
        </p>
      </Section>

      <Section titulo="10. Foro de eleição">
        <p>
          Eventuais controvérsias decorrentes do uso deste site serão dirimidas
          no foro da Comarca de Barueri, Estado de São Paulo, com renúncia
          expressa a qualquer outro, por mais privilegiado que seja.
        </p>
        <p>
          Aplica-se a legislação brasileira, em especial o Código de Defesa do
          Consumidor (Lei 8.078/1990) e a Lei Geral de Proteção de Dados (Lei
          13.709/2018).
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
