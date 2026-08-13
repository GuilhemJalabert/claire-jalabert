import { getLocale, getTranslations } from "next-intl/server";

import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Star } from "@/components/decor/star";
import { Link } from "@/i18n/navigation";
import { contactFacts, getContent } from "@/lib/content";
import { browseNav, contactNav, isNavGroup } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

const footerNav = [
  ...browseNav.map((item) =>
    isNavGroup(item)
      ? { href: item.href, labelKey: item.labelKey }
      : item
  ),
  contactNav,
];

async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("Nav");
  const tFooter = await getTranslations("Footer");
  const { site, contact } = getContent(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/40 mt-auto border-t bg-background/80">
      <Container className="flex flex-col gap-7 py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <Link
                href="/"
                className="font-display text-foreground hover:text-primary text-xl font-medium tracking-[-0.02em] transition-colors duration-[var(--duration-fast)]"
              >
                {siteConfig.name}
              </Link>
              <Star shape="four" size={6} tone="gold" opacity={0.35} />
            </div>
            <p className="text-small text-muted-foreground max-w-xs">
              {tFooter("consultationsAt", {
                title: site.title,
                locations: contact.locationsLabel,
                modalities: contact.modalities,
              })}
            </p>
            <p className="text-small text-muted-foreground">
              {contactFacts.address.full}
            </p>
          </div>

          <nav aria-label={tFooter("navLabel")}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:max-w-md sm:justify-end">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-muted-foreground hover:text-foreground transition-colors duration-[var(--duration-fast)]"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="gold-rule" />
        <Separator className="bg-border/50" />

        <div className="text-caption text-muted-foreground flex flex-col gap-1 normal-case tracking-normal sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>
            <a
              href={`tel:${contactFacts.phoneTel}`}
              className="hover:text-foreground transition-colors"
            >
              {contactFacts.phoneDisplay}
            </a>
            {" · "}
            <a
              href={`mailto:${contactFacts.email}`}
              className="hover:text-foreground transition-colors"
            >
              {contactFacts.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
