import type { MetadataRoute } from "next";

import { educationalArticles } from "@/lib/educational";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

/** Pages publiques indexables (hors /prototype). */
const routes = [
  "/",
  "/a-propos",
  "/accompagnements",
  "/comprendre",
  "/tarifs",
  "/contact",
] as const;

function localizedUrl(locale: string, route: string) {
  const path = route === "/" ? "" : route;
  if (locale === routing.defaultLocale) {
    return path ? `${SITE_URL}${path}` : SITE_URL;
  }
  return `${SITE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: localizedUrl(locale, route),
      priority:
        route === "/" ? 1 : route === "/comprendre" ? 0.8 : 0.6,
    })),
  );

  const educational = routing.locales.flatMap((locale) =>
    educationalArticles.map((article) => ({
      url: localizedUrl(locale, `/comprendre/${article.slug}`),
      lastModified: new Date(`${article.updatedAt}T12:00:00`),
      priority: 0.75,
    })),
  );

  return [...base, ...educational];
}
