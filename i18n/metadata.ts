import type { Metadata } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

type AppHref = Parameters<typeof getPathname>[0]["href"];

function hasAppLocale(value: string): value is AppLocale {
  return routing.locales.includes(value as AppLocale);
}

function absoluteUrl(locale: AppLocale, href: AppHref) {
  return `${SITE_URL}${getPathname({ locale, href })}`;
}

/**
 * Canonical = URL de la page courante (propre à la langue).
 * languages = équivalents réciproques FR / EN / IT / ES + x-default → FR.
 */
function languageAlternates(
  locale: string,
  href: AppHref,
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = absoluteUrl(loc, href);
  }
  languages["x-default"] = absoluteUrl(routing.defaultLocale, href);

  const current = hasAppLocale(locale) ? locale : routing.defaultLocale;
  return {
    canonical: absoluteUrl(current, href),
    languages,
  };
}

function openGraphLocale(locale: string) {
  if (locale === "en") return "en_US";
  if (locale === "it") return "it_IT";
  if (locale === "es") return "es_ES";
  return "fr_FR";
}

/** Titre complet (évite le template layout qui doublonnerait le nom). */
function absoluteTitle(title: string): Metadata["title"] {
  return { absolute: title };
}

export {
  languageAlternates,
  openGraphLocale,
  absoluteUrl,
  absoluteTitle,
};
export type { AppHref };
