import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { languageAlternates, openGraphLocale } from "@/i18n/metadata";
import { asAppLocale, routing } from "@/i18n/routing";
import { getContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const locale = asAppLocale((await params).locale);
  const { site } = getContent(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} · ${site.title}`,
      template: `%s · ${siteConfig.name}`,
    },
    description: site.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates: languageAlternates(locale, "/"),
    openGraph: {
      type: "website",
      locale: openGraphLocale(locale),
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: `${siteConfig.name} · ${site.title}`,
      description: site.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} · ${site.title}`,
      description: site.description,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = asAppLocale((await params).locale);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-theme="contemplation"
      className={cn("h-full", fontSans.variable, fontDisplay.variable, "scroll-smooth")}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
