// Client FIPE via Parallelum API (backend direto que Brasil API proxiava).
// Doc: https://deividfortuna.github.io/fipe/
// Trocado de Brasil API → Parallelum em 2026-05-17 porque Brasil API estava
// retornando 500 (upstream FIPE oficial bloqueou o backend deles).
//
// CORS aberto, sem rate-limit relevante, schema { codigo, nome }.
// Cache em localStorage com TTL 30 dias (lista quase imutável).

const BASE_URL = "https://parallelum.com.br/fipe/api/v1";
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 dias
const CACHE_PREFIX = "esc:fipe:v2:"; // v2 = pós-migração Parallelum

export type MarcaFipe = {
  /** Código FIPE da marca (ex: "25" pra Honda no Parallelum) */
  codigo: string;
  /** Nome legível pra exibir (ex: "Honda") */
  nome: string;
};

export type ModeloFipe = {
  codigo: string;
  nome: string;
};

type CacheEntry<T> = {
  expiresAt: number;
  data: T;
};

function readCache<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (Date.now() > entry.expiresAt) {
      localStorage.removeItem(CACHE_PREFIX + key);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function writeCache<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  try {
    const entry: CacheEntry<T> = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      data,
    };
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(entry));
  } catch {
    // localStorage cheio ou disabled — fail silently
  }
}

/**
 * Lista de marcas de carros (~95 marcas).
 * Cache TTL 30d. Primeira chamada faz fetch (~5KB).
 */
export async function fetchMarcasCarros(): Promise<MarcaFipe[]> {
  const cached = readCache<MarcaFipe[]>("marcas:carros");
  if (cached) return cached;

  const resp = await fetch(`${BASE_URL}/carros/marcas`);
  if (!resp.ok) throw new Error(`FIPE marcas falhou: ${resp.status}`);
  const raw = (await resp.json()) as Array<{ codigo: string; nome: string }>;

  // Parallelum já retorna {codigo, nome} — só normaliza e ordena
  const marcas: MarcaFipe[] = raw
    .map((m) => ({ codigo: String(m.codigo), nome: m.nome }))
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  writeCache("marcas:carros", marcas);
  return marcas;
}

/**
 * Lista de modelos de uma marca específica.
 * Cache por marca, TTL 30d. Cada marca = ~50-300 modelos (~5-30KB).
 *
 * Parallelum retorna { modelos: [...], anos: [...] }. Extraímos só modelos.
 */
export async function fetchModelosCarros(
  codigoMarca: string,
): Promise<ModeloFipe[]> {
  const cacheKey = `modelos:carros:${codigoMarca}`;
  const cached = readCache<ModeloFipe[]>(cacheKey);
  if (cached) return cached;

  const resp = await fetch(
    `${BASE_URL}/carros/marcas/${encodeURIComponent(codigoMarca)}/modelos`,
  );
  if (!resp.ok) throw new Error(`FIPE modelos falhou: ${resp.status}`);
  const raw = (await resp.json()) as {
    modelos: Array<{ codigo: number | string; nome: string }>;
  };

  // Dedup por nome (Parallelum pode ter versões com mesmo nome em anos diferentes)
  const seen = new Set<string>();
  const modelos: ModeloFipe[] = [];
  for (const item of raw.modelos ?? []) {
    const nome = (item.nome || "").trim();
    if (!nome || seen.has(nome)) continue;
    seen.add(nome);
    modelos.push({ codigo: String(item.codigo), nome });
  }
  modelos.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  writeCache(cacheKey, modelos);
  return modelos;
}
