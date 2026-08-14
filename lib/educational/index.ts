import { asAppLocale } from "@/i18n/routing";
import { aspergerArticle } from "./asperger";
import { autresReperesArticle } from "./autres-reperes";
import { educationalHub } from "./hub";
import { hpiArticle } from "./hpi";
import { comprendreNav } from "./navigation";
import { tsaArticle } from "./tsa";
import { aspergerArticle as aspergerArticleEn } from "./en/asperger";
import { autresReperesArticle as autresReperesArticleEn } from "./en/autres-reperes";
import { educationalHubEn } from "./en/hub";
import { hpiArticle as hpiArticleEn } from "./en/hpi";
import { tsaArticle as tsaArticleEn } from "./en/tsa";
import { aspergerArticle as aspergerArticleIt } from "./it/asperger";
import { autresReperesArticle as autresReperesArticleIt } from "./it/autres-reperes";
import { educationalHubIt } from "./it/hub";
import { hpiArticle as hpiArticleIt } from "./it/hpi";
import { tsaArticle as tsaArticleIt } from "./it/tsa";
import { aspergerArticle as aspergerArticleEs } from "./es/asperger";
import { autresReperesArticle as autresReperesArticleEs } from "./es/autres-reperes";
import { educationalHubEs } from "./es/hub";
import { hpiArticle as hpiArticleEs } from "./es/hpi";
import { tsaArticle as tsaArticleEs } from "./es/tsa";
import type { EducationalArticle } from "./types";

export const EDUCATIONAL_UPDATED_AT = "2026-08-12";

export type { EducationalArticle } from "./types";
export * from "./types";
export { educationalHub } from "./hub";
export { educationalHubEn } from "./en/hub";
export { educationalHubIt } from "./it/hub";
export { educationalHubEs } from "./es/hub";
export { comprendreNav } from "./navigation";
export { tsaArticle } from "./tsa";
export { aspergerArticle } from "./asperger";
export { hpiArticle } from "./hpi";
export { autresReperesArticle } from "./autres-reperes";

/** Cartes du hub /comprendre (une phrase max par carte). */
export const educationalHubCards = educationalHub.cards;

/** Articles pédagogiques publiés (français, slugs de référence). */
export const educationalArticles: EducationalArticle[] = [
  tsaArticle,
  aspergerArticle,
  hpiArticle,
  autresReperesArticle,
];

const educationalArticlesEn: EducationalArticle[] = [
  tsaArticleEn,
  aspergerArticleEn,
  hpiArticleEn,
  autresReperesArticleEn,
];

const educationalArticlesIt: EducationalArticle[] = [
  tsaArticleIt,
  aspergerArticleIt,
  hpiArticleIt,
  autresReperesArticleIt,
];

const educationalArticlesEs: EducationalArticle[] = [
  tsaArticleEs,
  aspergerArticleEs,
  hpiArticleEs,
  autresReperesArticleEs,
];

export function getEducationalHub(locale: string) {
  const loc = asAppLocale(locale);
  if (loc === "en") return educationalHubEn;
  if (loc === "it") return educationalHubIt;
  if (loc === "es") return educationalHubEs;
  return educationalHub;
}

export function getEducationalArticles(locale: string): EducationalArticle[] {
  const loc = asAppLocale(locale);
  if (loc === "en") return educationalArticlesEn;
  if (loc === "it") return educationalArticlesIt;
  if (loc === "es") return educationalArticlesEs;
  return educationalArticles;
}

export function getEducationalArticle(
  slug: string,
  locale: string = "fr",
): EducationalArticle | undefined {
  return getEducationalArticles(locale).find((article) => article.slug === slug);
}

export function getEducationalNavLabel(href: string): string | undefined {
  return comprendreNav.find((item) => item.href === href)?.label;
}
