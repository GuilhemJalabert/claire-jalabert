import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CabinetMap } from "@/components/sections/cabinet-map";
import { DirectionsButton } from "@/components/sections/directions-button";
import { FadeIn } from "@/components/motion/fade-in";
import { absoluteTitle, absoluteUrl, languageAlternates } from "@/i18n/metadata";
import { asAppLocale } from "@/i18n/routing";
import { contactFacts, getContent } from "@/lib/content";
import { getAccompaniments } from "@/lib/accompagnements";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asAppLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  const title = t("metaTitle");
  const description = t("metaDescription", {
    address: contactFacts.address.full,
  });
  const url = absoluteUrl(locale, "/contact");

  return {
    title: absoluteTitle(title),
    description,
    alternates: languageAlternates(locale, "/contact"),
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const locale = asAppLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations("ContactPage");
  const tCommon = await getTranslations("Common");
  const { contact } = getContent(locale);
  const { contactMention } = getAccompaniments(locale);

  return (
    <Section atmosphere="phase-5" className="relative min-h-[60vh] overflow-hidden">
      <Container className="relative flex max-w-2xl flex-col gap-10 py-8">
        <SectionHeading
          as="h1"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <FadeIn className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <PhoneIcon className="text-primary mt-1 size-5 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-foreground font-medium">
                <a
                  href={`tel:${contactFacts.phoneTel}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactFacts.phoneDisplay}
                </a>
              </p>
              <p className="text-small text-muted-foreground">
                {contact.phoneNote}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MailIcon className="text-primary mt-1 size-5 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-foreground font-medium">
                <a
                  href={`mailto:${contactFacts.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactFacts.email}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPinIcon className="text-primary mt-1 size-5 shrink-0" strokeWidth={1.5} />
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <div>
                <p className="text-foreground font-medium">
                  {contactFacts.address.full}
                </p>
                <p className="text-small text-muted-foreground">
                  {tCommon("consultationsLabel").replace(":", "").trim()}{" "}
                  {contact.modalities}
                </p>
              </div>

              <CabinetMap />

              <DirectionsButton />
            </div>
          </div>
        </FadeIn>

        <Separator className="bg-border/50" />

        <p className="text-small text-muted-foreground text-pretty">
          {contactMention.body}{" "}
          <Link
            href={contactMention.ctaHref}
            className="link-continue font-medium"
          >
            {contactMention.ctaLabel}
          </Link>
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" variant="warm" asChild className="w-full sm:w-auto">
            <a href={`tel:${contactFacts.phoneTel}`}>{tCommon("call")}</a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="w-full sm:w-auto"
          >
            <a href={`mailto:${contactFacts.email}`}>{tCommon("sendEmail")}</a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
