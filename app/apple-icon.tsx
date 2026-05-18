import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Apple touch icon (iPhone/iPad home screen).
// 180x180 — tamanho recomendado iOS atual.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#F26B1F",
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          ESC
        </div>
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
