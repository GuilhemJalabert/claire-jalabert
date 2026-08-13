import type { Metadata } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

type AppHref = Parameters<typeof getPathname>[0]["href"];

function absoluteUrl(locale: AppLocale, href: AppHref) {
  return `${siteConfig.url}${getPathname({ locale, href })}`;
}

function languageAlternates(
  locale: string,
  href: AppHref
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

function hasAppLocale(value: string): value is AppLocale {
  return routing.locales.includes(value as AppLocale);
}

function openGraphLocale(locale: string) {
  if (locale === "en") return "en_US";
  if (locale === "it") return "it_IT";
  if (locale === "es") return "es_ES";
  return "fr_FR";
}

export { languageAlternates, openGraphLocale, absoluteUrl };
export type { AppHref };
