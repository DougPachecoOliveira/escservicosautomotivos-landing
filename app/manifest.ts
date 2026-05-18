import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// PWA manifest — habilita "Add to Home Screen" no Android com identidade ESC.
// Next.js gera /manifest.webmanifest e adiciona <link rel="manifest"> auto.

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ESC Serviços Automotivos",
    short_name: "ESC",
    description:
      "Diagnóstico Método ESC em Barueri. Sem improviso. Sem surpresa. Você entende antes, acompanha durante, confirma na entrega.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#F26B1F",
    lang: "pt-BR",
    orientation: "portrait",
    categories: ["business", "automotive", "productivity"],
    icons: [
      {
        src: "/icon0",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon1",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon1",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
