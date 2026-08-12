import { aspergerArticle } from "./asperger";
import { autresReperesArticle } from "./autres-reperes";
import { educationalHub } from "./hub";
import { hpiArticle } from "./hpi";
import { comprendreNav } from "./navigation";
import { tsaArticle } from "./tsa";
import type { EducationalArticle } from "./types";

export const EDUCATIONAL_UPDATED_AT = "2026-08-12";

export type { EducationalArticle } from "./types";
export * from "./types";
export { educationalHub } from "./hub";
export { comprendreNav } from "./navigation";
export { tsaArticle } from "./tsa";
export { aspergerArticle } from "./asperger";
export { hpiArticle } from "./hpi";
export { autresReperesArticle } from "./autres-reperes";

/** Cartes du hub /comprendre (une phrase max par carte). */
export const educationalHubCards = educationalHub.cards;

/** Articles pédagogiques publiés. */
export const educationalArticles: EducationalArticle[] = [
  tsaArticle,
  aspergerArticle,
  hpiArticle,
  autresReperesArticle,
];

export function getEducationalArticle(
  slug: string,
): EducationalArticle | undefined {
  return educationalArticles.find((article) => article.slug === slug);
}

export function getEducationalNavLabel(href: string): string | undefined {
  return comprendreNav.find((item) => item.href === href)?.label;
}
