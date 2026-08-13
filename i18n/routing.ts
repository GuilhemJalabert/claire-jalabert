import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en", "it", "es"] as const;
export type AppLocale = (typeof locales)[number];

export function asAppLocale(value: string): AppLocale {
  return locales.includes(value as AppLocale) ? (value as AppLocale) : "fr";
}

export const localeNames: Record<AppLocale, string> = {
  fr: "Français",
  en: "English",
  it: "Italiano",
  es: "Español",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "fr",
  localePrefix: "as-needed",
});
