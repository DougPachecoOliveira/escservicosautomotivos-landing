import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";

// Rate limit por janela deslizante simples baseado em contador Firestore.
// Cada IP tem um doc `rateLimits/ip:{hash}` com count + janelaIniciadaEm.
// Janela fecha após `janelaSegundos`; passou disso, conta zera.

export type RateLimitResult =
  | { ok: true; restantes: number }
  | { ok: false; resetEm: Date };

const COLECAO = "rateLimits";

async function consumir(
  chave: string,
  limite: number,
  janelaSegundos: number,
): Promise<RateLimitResult> {
  const db = getFirestore();
  const docRef = db.collection(COLECAO).doc(chave);
  const agora = Date.now();

  const result = await db.runTransaction<RateLimitResult>(async (tx) => {
    const snap = await tx.get(docRef);
    const data = snap.data() as
      | { count: number; janelaIniciadaEm: Timestamp }
      | undefined;

    const janelaIniciadaMs =
      data?.janelaIniciadaEm?.toMillis() ?? agora;
    const janelaEncerraEm = janelaIniciadaMs + janelaSegundos * 1000;
    const dentroDaJanela = agora < janelaEncerraEm;

    const novaContagem = dentroDaJanela ? (data?.count ?? 0) + 1 : 1;
    const janelaIniciadaEm = dentroDaJanela
      ? Timestamp.fromMillis(janelaIniciadaMs)
      : Timestamp.fromMillis(agora);

    if (novaContagem > limite) {
      return {
        ok: false,
        resetEm: new Date(janelaIniciadaMs + janelaSegundos * 1000),
      };
    }

    tx.set(
      docRef,
      {
        count: novaContagem,
        janelaIniciadaEm,
        ultimoAcessoEm: FieldValue.serverTimestamp(),
        // Auto-cleanup: TTL field policy deve apagar após a janela + 1h
        expiresAt: Timestamp.fromMillis(
          janelaIniciadaMs + (janelaSegundos + 3600) * 1000,
        ),
      },
      { merge: true },
    );

    return { ok: true, restantes: limite - novaContagem };
  });

  return result;
}

// Hash simples pra usar IP como chave sem expor IP cru no docId.
function hashIp(ip: string): string {
  let h = 0;
  for (let i = 0; i < ip.length; i++) {
    h = (h << 5) - h + ip.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
}

export async function checarRateLimitIp(ip: string) {
  // 5 leads por hora por IP
  return consumir(`ip:${hashIp(ip)}`, 5, 3600);
}

export async function checarRateLimitGlobal() {
  // 100 leads por hora total (circuit breaker)
  return consumir("global:leads", 100, 3600);
}
