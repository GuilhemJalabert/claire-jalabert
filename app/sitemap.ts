import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/a-propos",
  "/accompagnements",
  "/tarifs",
  "/contact",
  "/prototype",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "monthly" : "monthly",
    priority: route === "/" ? 1 : route === "/prototype" ? 0.2 : 0.6,
  }));
}
