import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Plausible: privacy-friendly, sem cookies. Carrega só se NEXT_PUBLIC_PLAUSIBLE_DOMAIN
// estiver setado em .env.production. Sem domínio = no-op total (zero overhead).
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";

// Poppins: fonte oficial do brand system (Bold / Medium / Regular — sem Light)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteUrl = "https://escservicosautomotivos.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ESC Serviços Automotivos · Oficina Mecânica em Barueri SP",
    template: "%s · ESC Serviços Automotivos",
  },
  description:
    "Oficina mecânica em Barueri-SP com Diagnóstico Método ESC. Especialistas em Volkswagen (T-Cross, Polo, Nivus, Gol). Orçamento transparente, sem surpresa. Agende agora.",
  keywords: [
    // Marca
    "ESC Serviços Automotivos",
    "Diagnóstico Método ESC",
    // Local — cidade e regiões vizinhas
    "oficina mecânica Barueri",
    "mecânica automotiva Barueri SP",
    "oficina mecânica Alphaville",
    "mecânica Santana de Parnaíba",
    "mecânica Jandira",
    "mecânica região de Barueri",
    "oficina Rua José Maria Balieiro Barueri",
    // Serviços
    "diagnóstico automotivo Barueri",
    "revisão veicular Barueri",
    "troca de óleo Barueri",
    "freios e suspensão Barueri",
    "manutenção preventiva carro",
    "manutenção corretiva automotiva",
    "mecânica geral Barueri",
    // Especialidade VW
    "mecânica Volkswagen Barueri",
    "especialista T-Cross Barueri",
    "especialista Polo Barueri",
    "especialista Nivus Barueri",
    "mecânica TSI MPI Barueri",
    "especialista Gol Saveiro Up Barueri",
    // Intenção de busca
    "oficina mecânica confiável Barueri",
    "mecânica sem surpresa Barueri",
    "orçamento mecânica Barueri",
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
    title: "ESC Serviços Automotivos · Oficina Mecânica em Barueri SP",
    description:
      "Diagnóstico Método ESC em Barueri-SP. Especialistas em VW (T-Cross, Polo, Nivus). Você entende antes, acompanha durante, confirma na entrega. Sem surpresa.",
    // images: Next.js infere automaticamente do app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "ESC Serviços Automotivos · Oficina em Barueri SP",
    description:
      "Oficina mecânica em Barueri-SP. Diagnóstico Método ESC, especialistas em Volkswagen. Orçamento transparente, sem surpresa.",
    // images: Next.js infere automaticamente do app/opengraph-image.tsx
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
  // Declarar `icons.other` (mask-icon) cancelava a inferência automática dos
  // PNGs gerados (app/icon.tsx, app/apple-icon.tsx). Precisa listar tudo explícito.
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#F26B1F",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
  image: `${siteUrl}/opengraph-image`,
  description:
    "Oficina mecânica em Barueri com Diagnóstico Método ESC. Você entende antes, acompanha durante, confirma na entrega.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua José Maria Balieiro, 241",
    addressLocality: "Barueri",
    addressRegion: "SP",
    postalCode: "06401-126",
    addressCountry: "BR",
  },
  telephone: "+5511991783807",
  email: "suporte@escservicosautomotivos.com.br",
  areaServed: {
    "@type": "City",
    name: "Barueri",
  },
  priceRange: "$$",
  slogan: "Sem improviso. Sem surpresa.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

// Script anti-FOUC: aplica tema ANTES do React renderizar.
// Lê localStorage > prefers-color-scheme > default light.
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('esc-theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved === 'dark' || (!saved && systemDark);
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        {PLAUSIBLE_DOMAIN && (
          <>
            <Script
              defer
              data-domain={PLAUSIBLE_DOMAIN}
              src="https://plausible.io/js/script.tagged-events.js"
              strategy="afterInteractive"
            />
            <Script id="plausible-init" strategy="afterInteractive">
              {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
