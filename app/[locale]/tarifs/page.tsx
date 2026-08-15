import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { SoftHalo } from "@/components/decor/soft-halo";
import { Starfield } from "@/components/decor/starfield";
import { absoluteTitle, absoluteUrl, languageAlternates } from "@/i18n/metadata";
import { asAppLocale } from "@/i18n/routing";
import { contactFacts, getContent } from "@/lib/content";
import { getAccompaniments } from "@/lib/accompagnements";
import { getPricing } from "@/lib/pricing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asAppLocale((await params).locale);
  const pricing = getPricing(locale);
  const title = pricing.page.metaTitle;
  const description = pricing.page.metaDescription;
  const url = absoluteUrl(locale, "/tarifs");

  return {
    title: absoluteTitle(title),
    description,
    alternates: languageAlternates(locale, "/tarifs"),
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

export default async function TariffsPage({ params }: Props) {
  const locale = asAppLocale((await params).locale);
  setRequestLocale(locale);

  const tNav = await getTranslations("Nav");
  const pricing = getPricing(locale);
  const { tariffsLink } = getAccompaniments(locale);
  const { contact } = getContent(locale);
  const ctaBody = pricing.page.ctaBody
    .replace("{city}", contactFacts.address.city)
    .replace("{modalities}", contact.modalities);

  return (
    <>
      {/* 1. Hero */}
      <Hero
        title={pricing.page.heroTitle}
        description={pricing.page.heroDescription}
        showVisual={false}
        compact
      />

      {/* 2. Consultations */}
      <Section atmosphere="phase-2" className="relative overflow-hidden">
        <SoftHalo
          tone="dusk"
          className="right-[-8%] top-1/4 size-80 opacity-20"
        />
        <Container className="relative flex flex-col gap-10">
          <SectionHeading
            eyebrow={pricing.page.consultationsEyebrow}
            title={pricing.page.consultationsTitle}
            description={pricing.page.consultationsLead}
          />

          <FadeIn className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {pricing.consultations.map((item) => (
              <Card
                key={item.id}
                variant="glass"
                className="card-premium h-full"
              >
                <CardHeader className="gap-5">
                  <CardTitle className="text-base font-medium tracking-normal sm:text-lg">
                    {item.title}
                  </CardTitle>
                  <p className="font-display text-card-foreground text-4xl font-medium tracking-tight sm:text-5xl">
                    {item.priceLabel}
                  </p>
                  <CardDescription className="text-pretty">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* 3. Bilans */}
      <Section atmosphere="phase-3" className="relative overflow-hidden">
        <Starfield density="sparse" />
        <Container className="relative">
          <FadeIn>
            <Card variant="editorial" className="mx-auto max-w-3xl">
              <CardHeader className="gap-5">
                <p className="text-caption text-[color:var(--card-muted-foreground)]">
                  {pricing.page.assessmentsEyebrow}
                </p>
                <CardTitle className="text-2xl sm:text-3xl">
                  {pricing.assessments.title}
                </CardTitle>
                <CardDescription className="text-base text-pretty">
                  {pricing.assessments.body}
                </CardDescription>
                <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
                  <Button variant="warm" asChild>
                    <Link href={pricing.assessments.ctaHref}>
                      {pricing.assessments.ctaLabel}
                    </Link>
                  </Button>
                  <Link
                    href={tariffsLink.href}
                    className="link-continue text-small font-medium"
                  >
                    {tariffsLink.label}
                  </Link>
                </div>
              </CardHeader>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* 4. CTA */}
      <Section atmosphere="phase-5" className="relative overflow-hidden">
        <Container>
          <FadeIn className="mx-auto flex max-w-xl flex-col items-center gap-6 py-4 text-center sm:py-8">
            <div className="gold-rule" />
            <h2 className="text-h2 text-foreground text-balance">
              {pricing.page.ctaTitle}
            </h2>
            <p className="text-small text-muted-foreground text-pretty">
              {ctaBody}
            </p>
            <Separator className="bg-border/40 max-w-xs" />
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button size="lg" variant="warm" asChild>
                <Link href={pricing.assessments.ctaHref}>
                  {pricing.assessments.ctaLabel}
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#rdv">{tNav("bookAppointment")}</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
