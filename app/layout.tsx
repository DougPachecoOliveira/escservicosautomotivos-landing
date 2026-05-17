import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://escservicosautomotivos.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ESC Serviços Automotivos · Oficina com método em Barueri",
    template: "%s · ESC Serviços Automotivos",
  },
  description:
    "Oficina mecânica em Barueri com método registrado em cada serviço. Diagnóstico transparente, fotos do processo, aprovação por WhatsApp. Cada peça justificada, cada etapa documentada.",
  keywords: [
    "oficina mecânica Barueri",
    "manutenção automotiva",
    "diagnóstico automotivo",
    "ESC Serviços Automotivos",
    "troca de óleo Barueri",
    "freios alinhamento balanceamento",
  ],
  authors: [{ name: "ESC Serviços Automotivos LTDA" }],
  creator: "ESC Serviços Automotivos LTDA",
  publisher: "ESC Serviços Automotivos LTDA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "ESC Serviços Automotivos",
    title: "ESC Serviços Automotivos · Oficina com método em Barueri",
    description:
      "Método registrado em cada serviço. Diagnóstico transparente, fotos do processo, aprovação por WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ESC Serviços Automotivos — Oficina com método",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESC Serviços Automotivos",
    description:
      "Oficina com método. Cada etapa registrada, cada peça justificada.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff6000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "ESC Serviços Automotivos",
  legalName: "ESC Serviços Automotivos LTDA",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  description:
    "Oficina mecânica em Barueri com método ESC: cada etapa registrada, cada peça justificada.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barueri",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Barueri",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
