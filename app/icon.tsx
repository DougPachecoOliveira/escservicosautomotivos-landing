import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Favicon (Opção A): bloco laranja sólido com "E" preto bold.
// Mais chamativo na aba do navegador que o "E sobre preto" antes.

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
          background: "#F26B1F",
          color: "#0A0A0A",
          fontSize: 24,
          fontWeight: 900,
          letterSpacing: "-1.5px",
          fontFamily: "system-ui, sans-serif",
          borderRadius: 6,
        }}
      >
        E
      </div>
    ),
    { ...size },
  );
}
