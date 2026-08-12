import type { Metadata } from "next";
import Script from "next/script";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { cn } from "@/lib/utils";

import "./globals.css";

const themeBootScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=(s==="contemplation"||s==="lumiere")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"contemplation":"lumiere");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","contemplation");}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={cn("h-full", fontSans.variable, fontDisplay.variable, "scroll-smooth")}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <Script
          id="claire-theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeBootScript }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
