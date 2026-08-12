import type { MetadataRoute } from "next";

import { educationalArticles } from "@/lib/educational";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const base = routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
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
  }));

  const educational = educationalArticles.map((article) => ({
    url: `${siteConfig.url}/comprendre/${article.slug}`,
    lastModified: new Date(`${article.updatedAt}T12:00:00`),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...base, ...educational];
}
