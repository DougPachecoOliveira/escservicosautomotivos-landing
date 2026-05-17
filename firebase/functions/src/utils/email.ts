import { Resend } from "resend";

const REMETENTE = "ESC Site <site@escservicosautomotivos.com.br>";
const DESTINATARIO = "atendimento@escservicosautomotivos.com.br";

type LeadEmail = {
  leadId: string;
  placa: string;
  marca: string;
  modelo: string;
  ano: number;
  sintomas: string[];
  problemaDescricao: string;
  nome: string;
  whatsapp: string;
  email?: string;
};

function esc(s: string | number): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function enviarEmailLead(
  lead: LeadEmail,
  apiKey: string,
  consoleUrl: string,
): Promise<void> {
  if (!apiKey) {
    console.warn("RESEND_API_KEY ausente; pulando email do lead", lead.leadId);
    return;
  }

  const resend = new Resend(apiKey);
  const sintomasHtml = lead.sintomas.length
    ? lead.sintomas.map((s) => `<li>${esc(s)}</li>`).join("")
    : "<li>Nenhum selecionado</li>";

  const html = `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.5;color:#0a0a0a;max-width:560px;margin:0 auto;padding:24px">
  <div style="border-left:4px solid #f26b1f;padding-left:16px;margin-bottom:24px">
    <p style="margin:0 0 4px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#f26b1f;font-weight:700">Novo pré-diagnóstico</p>
    <h1 style="margin:0;font-size:22px">${esc(lead.nome)} <span style="color:#666;font-weight:400">· ${esc(lead.whatsapp)}</span></h1>
  </div>

  <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:.18em;color:#666;margin:0 0 8px">Veículo</h2>
  <p style="margin:0 0 24px"><strong>${esc(lead.marca)} ${esc(lead.modelo)}</strong> · ${esc(lead.ano)} · Placa <strong>${esc(lead.placa)}</strong></p>

  <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:.18em;color:#666;margin:0 0 8px">Sintomas marcados</h2>
  <ul style="margin:0 0 24px;padding-left:20px">${sintomasHtml}</ul>

  <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:.18em;color:#666;margin:0 0 8px">Descrição</h2>
  <p style="margin:0 0 24px;white-space:pre-wrap;padding:12px;background:#f7f5f2;border-radius:6px">${esc(lead.problemaDescricao)}</p>

  ${lead.email ? `<p style="margin:0 0 16px"><strong>E-mail:</strong> ${esc(lead.email)}</p>` : ""}

  <p style="margin:32px 0 0;font-size:12px;color:#666">
    <a href="https://wa.me/${esc(lead.whatsapp.replace(/\\D/g, ""))}" style="color:#f26b1f">Abrir WhatsApp</a>
    &nbsp;·&nbsp;
    <a href="${esc(consoleUrl)}" style="color:#f26b1f">Ver no Firebase Console</a>
  </p>
  <p style="margin:24px 0 0;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:.18em">
    Lead ID: ${esc(lead.leadId)}
  </p>
</body></html>`;

  try {
    await resend.emails.send({
      from: REMETENTE,
      to: DESTINATARIO,
      subject: `[ESC] Pré-diagnóstico: ${lead.marca} ${lead.modelo} — ${lead.nome}`,
      html,
    });
  } catch (e) {
    console.error("Falha ao enviar email", lead.leadId, e);
    // Não relança: falha de email não deve afetar o status do trigger
  }
}
