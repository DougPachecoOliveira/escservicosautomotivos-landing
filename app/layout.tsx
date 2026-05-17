import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
    default: "ESC Serviços Automotivos · Diagnóstico Método ESC em Barueri",
    template: "%s · ESC Serviços Automotivos",
  },
  description:
    "Você entende antes. Acompanha durante. Confirma na entrega. Diagnóstico Método ESC para o seu carro em Barueri-SP. Sem improviso. Sem surpresa.",
  keywords: [
    "oficina mecânica Barueri",
    "Diagnóstico Método ESC",
    "manutenção automotiva Barueri",
    "ESC Serviços Automotivos",
    "Rua José Maria Balieiro Barueri",
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
    title: "ESC Serviços Automotivos · Sem improviso. Sem surpresa.",
    description:
      "Diagnóstico Método ESC em Barueri. Você entende antes · Acompanha durante · Confirma na entrega.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ESC Serviços Automotivos — Diagnóstico Método ESC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESC Serviços Automotivos",
    description: "Sem improviso. Sem surpresa. Diagnóstico Método ESC.",
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
  image: `${siteUrl}/og-image.png`,
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
  email: "atendimento@escservicosautomotivos.com.br",
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
      </body>
    </html>
  );
}
