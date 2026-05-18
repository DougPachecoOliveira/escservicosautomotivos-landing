import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-static";

// PWA icon 192x192 — Android home screen, manifest standard.
// Aqui já cabe o logo real (vs favicon 32x32 que precisa ser texto).

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

async function carregarLogo(): Promise<string> {
  const filePath = path.join(process.cwd(), "public/logo/logo.jpeg");
  const buffer = await readFile(filePath);
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

export default async function Icon192() {
  const logoSrc = await carregarLogo();
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
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 6,
            background: "#F26B1F",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
