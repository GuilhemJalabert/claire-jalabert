import type { MetadataRoute } from "next";

import { educationalArticles } from "@/lib/educational";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/a-propos",
  "/accompagnements",
  "/comprendre",
  "/tarifs",
  "/contact",
  "/prototype",
] as const;

function localizedUrl(locale: string, route: string) {
  const path = route === "/" ? "" : route;
  if (locale === routing.defaultLocale) {
    return path ? `${siteConfig.url}${path}` : siteConfig.url;
  }
  return `${siteConfig.url}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const base = routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: localizedUrl(locale, route),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority:
        route === "/"
          ? 1
          : route === "/prototype"
            ? 0.2
            : route === "/comprendre"
              ? 0.8
              : 0.6,
    }))
  );

  const educational = routing.locales.flatMap((locale) =>
    educationalArticles.map((article) => ({
      url: localizedUrl(locale, `/comprendre/${article.slug}`),
      lastModified: new Date(`${article.updatedAt}T12:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  return [...base, ...educational];
}
