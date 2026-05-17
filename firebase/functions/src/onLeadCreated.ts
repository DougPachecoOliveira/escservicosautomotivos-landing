import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";

import { enviarEmailLead } from "./utils/email";

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");
const PROJECT_ID = "escservicosautomotivos-landing";

export const onLeadCreated = onDocumentCreated(
  {
    document: "leads/{leadId}",
    region: "southamerica-east1",
    memory: "256MiB",
    secrets: [RESEND_API_KEY],
  },
  async (event) => {
    const snap = event.data;
    if (!snap) {
      logger.warn("onLeadCreated disparou sem snapshot");
      return;
    }

    const lead = snap.data() as {
      placa: string;
      marca: string;
      modelo: string;
      ano: number;
      sintomas: string[];
      problemaDescricao: string;
      contato: { nome: string; whatsapp: string; email?: string | null };
    };

    const leadId = event.params.leadId;
    const consoleUrl = `https://console.firebase.google.com/project/${PROJECT_ID}/firestore/data/~2Fleads~2F${leadId}`;

    await enviarEmailLead(
      {
        leadId,
        placa: lead.placa,
        marca: lead.marca,
        modelo: lead.modelo,
        ano: lead.ano,
        sintomas: lead.sintomas ?? [],
        problemaDescricao: lead.problemaDescricao,
        nome: lead.contato.nome,
        whatsapp: lead.contato.whatsapp,
        email: lead.contato.email ?? undefined,
      },
      RESEND_API_KEY.value(),
      consoleUrl,
    );

    logger.info("Email do lead processado", { leadId });
  },
);
