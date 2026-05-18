// Client FIPE via Brasil API (proxy gratuito sem rate-limit relevante).
// Doc: https://brasilapi.com.br/docs#tag/FIPE
// CORS aberto — pode ser chamado direto do browser sem proxy.
// Cache em localStorage com TTL 30 dias (lista de marcas/modelos quase imutável).

const BASE_URL = "https://brasilapi.com.br/api/fipe";
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 dias
const CACHE_PREFIX = "esc:fipe:v1:";

export type MarcaFipe = {
  /** Código FIPE da marca (ex: "21" pra Honda) */
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
 * Cache TTL 30d. Primeira chamada faz fetch (~30KB).
 */
export async function fetchMarcasCarros(): Promise<MarcaFipe[]> {
  const cached = readCache<MarcaFipe[]>("marcas:carros");
  if (cached) return cached;

  const resp = await fetch(`${BASE_URL}/marcas/v1/carros`);
  if (!resp.ok) throw new Error(`FIPE marcas falhou: ${resp.status}`);
  const raw = (await resp.json()) as Array<{ valor: string; nome: string }>;

  // Brasil API retorna {valor, nome}; normaliza pra {codigo, nome}
  const marcas: MarcaFipe[] = raw
    .map((m) => ({ codigo: m.valor, nome: m.nome }))
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  writeCache("marcas:carros", marcas);
  return marcas;
}

/**
 * Lista de modelos de uma marca específica.
 * Cache por marca, TTL 30d. Cada marca = ~50-200 modelos (~5-30KB).
 */
export async function fetchModelosCarros(
  codigoMarca: string,
): Promise<ModeloFipe[]> {
  const cacheKey = `modelos:carros:${codigoMarca}`;
  const cached = readCache<ModeloFipe[]>(cacheKey);
  if (cached) return cached;

  const resp = await fetch(
    `${BASE_URL}/veiculos/v1/carros/${encodeURIComponent(codigoMarca)}`,
  );
  if (!resp.ok) throw new Error(`FIPE modelos falhou: ${resp.status}`);
  const raw = (await resp.json()) as Array<{
    modelo: string;
    valor?: string;
  }>;

  // Brasil API pode retornar duplicatas (ex: "Civic LX" várias gerações).
  // Dedup por nome.
  const seen = new Set<string>();
  const modelos: ModeloFipe[] = [];
  for (const item of raw) {
    const nome = (item.modelo || "").trim();
    if (!nome || seen.has(nome)) continue;
    seen.add(nome);
    modelos.push({ codigo: item.valor ?? nome, nome });
  }
  modelos.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  writeCache(cacheKey, modelos);
  return modelos;
}
