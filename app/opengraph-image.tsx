import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Open Graph image gerada dinamicamente no build (Next.js infere a URL).
// 1200x630 — padrão Facebook/WhatsApp/Twitter Cards.
// Brand: preto profundo #0A0A0A, laranja #F26B1F, branco puro.
//
// Quando alterar este arquivo, mudar também o `alt` no Twitter card
// pra forçar cache-bust nas redes sociais.

export const alt =
  "ESC Serviços Automotivos — Sem improviso. Sem surpresa.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0A0A0A",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Header: marca */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: "-4px",
              color: "#F26B1F",
              lineHeight: 1,
            }}
          >
            ESC
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Serviços Automotivos
          </div>
        </div>

        {/* Headline: manifesto */}
        <div
          style={{
            fontSize: 112,
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 1,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div style={{ color: "#FFFFFF" }}>Sem improviso.</div>
          <div style={{ color: "rgba(255,255,255,0.65)" }}>Sem surpresa.</div>
        </div>

        {/* Subhead: método */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "auto",
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <span style={{ color: "#F26B1F" }}>›</span>
          Diagnóstico Método ESC
          <span style={{ color: "#F26B1F" }}>·</span>
          Barueri / SP
        </div>

        {/* Faixa CTA inferior — assinatura visual invariante do brand */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "8px",
            background: "#F26B1F",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
