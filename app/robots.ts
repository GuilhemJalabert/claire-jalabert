import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Indexation désactivée tant que le contenu définitif n’est pas prêt.
      disallow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
