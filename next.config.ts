import type { NextConfig } from "next";

// Static export: gera HTML/CSS/JS puros em /out, sem servidor Node.
// Compatível com Cloudflare Pages, Firebase Hosting, S3, qualquer CDN.
// Trade-off: headers HTTP NÃO vêm daqui (`headers()` é ignorado em export mode).
// Em Cloudflare Pages, headers vivem em /public/_headers (formato nativo do CF).
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Obrigatório em export mode: next/image precisa de servidor pra otimizar.
    // Usamos <img> direto nos componentes; este flag só evita surpresa futura.
    unoptimized: true,
  },
  // trailingSlash: false (default) — Cloudflare Pages prefere sem barra final.
};

export default nextConfig;
