import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://escservicosautomotivos.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/obrigado"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
