import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

// Backup do TTL nativo do Firestore — roda 1x/dia e deleta leads vencidos.
// O TTL nativo (configurado em firestore.indexes.json) faz isso automático,
// mas pode levar até 72h. Este job faz cleanup imediato.
export const limparLeadsExpirados = onSchedule(
  {
    schedule: "every day 03:00",
    timeZone: "America/Sao_Paulo",
    region: "southamerica-east1",
    memory: "256MiB",
  },
  async () => {
    const db = getFirestore();
    const agora = Timestamp.now();

    const snap = await db
      .collection("leads")
      .where("expiresAt", "<", agora)
      .limit(500) // segurança: max 500 por execução
      .get();

    if (snap.empty) {
      logger.info("Sem leads expirados pra limpar");
      return;
    }

    const batch = db.batch();
    snap.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();

    logger.info(`Removidos ${snap.size} leads expirados (LGPD)`);
  },
);
