import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Favicon dinâmico. Next gera /icon.png (e converte pra ICO se necessário).
// 32x32 — tamanho padrão de favicon em browsers.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#F26B1F",
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "-1px",
          fontFamily: "system-ui, sans-serif",
          borderRadius: "6px",
        }}
      >
        E
      </div>
    ),
    { ...size },
  );
}
