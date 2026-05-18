import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-static";

// Open Graph image gerada dinamicamente no build com o logo REAL embeddado.
// 1200x630 — padrão Facebook/WhatsApp/Twitter Cards.
// Brand: preto profundo #0A0A0A, laranja #F26B1F, branco puro.

export const alt =
  "ESC Serviços Automotivos — Sem improviso. Sem surpresa.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function carregarLogo(): Promise<string> {
  const filePath = path.join(process.cwd(), "public/logo/logo.jpeg");
  const buffer = await readFile(filePath);
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

export default async function OpengraphImage() {
  const logoSrc = await carregarLogo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0A0A0A",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Coluna esquerda: logo */}
        <div
          style={{
            width: "42%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={420}
            height={420}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        {/* Coluna direita: copy */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 70px",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#F26B1F",
              marginBottom: 32,
            }}
          >
            ESC Serviços Automotivos
          </div>

          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              letterSpacing: "-2px",
              lineHeight: 1.02,
              display: "flex",
              flexDirection: "column",
              color: "#FFFFFF",
            }}
          >
            <span>Sem improviso.</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              Sem surpresa.
            </span>
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 24,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ color: "#F26B1F" }}>›</span>
            Diagnóstico Método ESC
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 18,
              fontWeight: 500,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "1px",
            }}
          >
            Barueri · SP
          </div>
        </div>

        {/* Faixa CTA inferior — assinatura visual invariante do brand */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 10,
            background: "#F26B1F",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
