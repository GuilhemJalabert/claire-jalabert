import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { Star } from "@/components/decor/star";
import { Starfield } from "@/components/decor/starfield";
import { ExpertiseCard } from "@/components/sections/expertise-card";
import { languageAlternates } from "@/i18n/metadata";
import { asAppLocale } from "@/i18n/routing";
import { getAccompaniments } from "@/lib/accompagnements";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asAppLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "Accompaniments" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
    alternates: languageAlternates(locale, "/accompagnements"),
  };
}

export default async function AccompanimentsPage({ params }: Props) {
  const locale = asAppLocale((await params).locale);
  setRequestLocale(locale);

  const tNav = await getTranslations("Nav");
  const {
    page,
    services: accompanimentServices,
    mediationVisuals: accompanimentMediationVisuals,
    assessments: assessmentServices,
  } = getAccompaniments(locale);
  const { hero, domains, services, assessments, understandLinks, cabinetCta } =
    page;

  return (
    <>
      <Hero
        title={hero.title}
        description={hero.description}
        showVisual={false}
        compact
      />

      {/* Domaines d’accompagnement — vue d’ensemble */}
      <Section
        id={domains.id}
        atmosphere="phase-1"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <Starfield density="sparse" />
        <SoftHalo
          tone="night"
          className="right-[-10%] top-1/4 size-80 opacity-30"
        />
        <Container className="relative flex flex-col gap-8 sm:gap-10">
          <FadeIn>
            <SectionHeading
              eyebrow={domains.eyebrow}
              title={domains.title}
              description={domains.lead}
            />
          </FadeIn>

          <FadeIn delay={80} className="flex flex-wrap gap-2.5 sm:gap-3">
            {domains.items.map((label) => (
              <ExpertiseCard key={label} label={label} />
            ))}
          </FadeIn>

          <p className="text-small text-muted-foreground flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/comprendre/tsa" className="link-continue font-medium">
              {understandLinks.tsa}
            </Link>
            <Link
              href="/comprendre/asperger"
              className="link-continue font-medium"
            >
              {understandLinks.asperger}
            </Link>
            <Link href="/comprendre/hpi" className="link-continue font-medium">
              {understandLinks.hpi}
            </Link>
          </p>
        </Container>
      </Section>

      {/* Suivis */}
      <Section atmosphere="phase-2" className="relative overflow-hidden">
        <SoftHalo
          tone="dusk"
          className="left-[-10%] top-1/4 size-[28rem] opacity-25"
        />
        <SoftHalo
          tone="gold"
          className="right-[-8%] bottom-0 size-72 opacity-15"
        />
        <Container className="relative flex flex-col gap-12 lg:gap-14">
          <FadeIn>
            <SectionHeading
              eyebrow={services.eyebrow}
              title={services.title}
              description={services.lead}
            />
          </FadeIn>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-2">
            {accompanimentServices.map((item, index) => (
              <FadeIn key={item.id} delay={index * 55}>
                <Card
                  variant="glass"
                  className="card-premium h-full"
                >
                  <CardHeader className="gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className="bg-primary/80 size-1.5 rounded-full"
                      />
                      <CardTitle className="font-display text-xl tracking-tight sm:text-2xl">
                        {item.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-pretty text-[0.9375rem] leading-relaxed sm:text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {accompanimentMediationVisuals.map((visual, index) => (
              <FadeIn key={visual.id} delay={index * 70}>
                <Card
                  variant="glass"
                  className="card-premium overflow-hidden p-0 [--card-spacing:0]"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] md:aspect-[4/5]">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
                        className={cn("object-cover", visual.objectPosition)}
                      />
                      {visual.credit ? (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent p-4 sm:p-5">
                          <p className="text-caption text-ivory/90 normal-case tracking-wide">
                            {visual.credit}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bilans */}
      <Section
        id={assessments.id}
        atmosphere="phase-3"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <Starfield density="sparse" />
        <SoftHalo
          tone="terracotta"
          className="top-1/3 right-[-12%] size-96 opacity-20"
        />
        <Container className="relative flex flex-col gap-12 lg:gap-14">
          <FadeIn>
            <SectionHeading
              eyebrow={assessments.eyebrow}
              title={assessments.title}
              description={assessments.intro}
            />
          </FadeIn>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {assessmentServices.map((item, index) => {
              const isLast = index === assessmentServices.length - 1;
              return (
                <FadeIn
                  key={item.id}
                  delay={index * 50}
                  className={isLast ? "md:col-span-2" : undefined}
                >
                  <Card
                    variant="glass"
                    className={cn(
                      "card-premium h-full",
                      isLast && "md:mx-auto md:max-w-3xl"
                    )}
                  >
                    <CardHeader className="gap-3.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {item.note ? (
                          <Badge
                            variant="secondary"
                            className="rounded-full px-3 py-1 font-normal tracking-normal normal-case"
                          >
                            {item.note}
                          </Badge>
                        ) : (
                          <Star
                            shape="four"
                            size={6}
                            tone="gold"
                            opacity={0.4}
                          />
                        )}
                      </div>
                      <CardTitle className="font-display text-xl tracking-tight sm:text-2xl">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-pretty text-[0.9375rem] leading-relaxed sm:text-base">
                        {item.description}
                      </CardDescription>
                      {item.learnMore ? (
                        <Link
                          href={item.learnMore.href}
                          className="link-continue text-small font-medium pt-1"
                        >
                          {item.learnMore.label}
                        </Link>
                      ) : null}
                    </CardHeader>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA unique — bilans + rendez-vous */}
      <Section atmosphere="phase-4" className="relative overflow-hidden">
        <SoftHalo
          tone="gold"
          breathe
          className="top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-25"
        />
        <Container className="relative">
          <FadeIn>
            <div className="surface-glass-strong relative overflow-hidden rounded-[1.5rem] ring-1 ring-border/40 sm:rounded-[2rem]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,color-mix(in_oklch,var(--luminous)_12%,transparent),transparent_60%)]"
              />
              <div className="relative grid md:grid-cols-2">
                <div className="flex flex-col items-start gap-5 p-8 sm:p-10 lg:p-12">
                  <Star
                    shape="four"
                    size={8}
                    tone="gold"
                    opacity={0.45}
                    twinkle
                    delay="1s"
                    duration="12s"
                  />
                  <h2 className="text-h2 text-card-foreground text-balance">
                    {assessments.ctaTitle}
                  </h2>
                  <p className="text-body text-[color:var(--card-muted-foreground)] max-w-md text-pretty">
                    {assessments.ctaBody}
                  </p>
                  <Button size="lg" variant="warm" asChild className="w-full sm:w-auto">
                    <Link href={assessments.ctaHref}>
                      {assessments.ctaLabel}
                    </Link>
                  </Button>
                </div>

                <div className="relative flex flex-col items-start gap-5 border-t border-border/40 p-8 sm:p-10 md:border-t-0 md:border-l lg:p-12">
                  <p className="text-caption text-[color:var(--card-muted-foreground)]">
                    {cabinetCta.eyebrow}
                  </p>
                  <p className="font-display text-card-foreground text-2xl leading-snug tracking-tight text-balance sm:text-3xl">
                    {cabinetCta.body}
                  </p>
                  <Separator className="bg-border/40 max-w-[3rem]" />
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <Link href="/#rdv">{tNav("bookAppointment")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
