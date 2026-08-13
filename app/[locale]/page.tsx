import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Hero } from "@/components/sections/hero";
import { QuoteSection } from "@/components/sections/quote-section";
import { PhotoFrame } from "@/components/sections/photo-frame";
import { AudienceCard } from "@/components/sections/audience-card";
import { ExpertiseCard } from "@/components/sections/expertise-card";
import { AppointmentCTA } from "@/components/sections/appointment-cta";
import { FadeIn } from "@/components/motion/fade-in";
import { OrbitLine } from "@/components/decor/orbit-line";
import { SoftHalo } from "@/components/decor/soft-halo";
import { Starfield } from "@/components/decor/starfield";
import { cn } from "@/lib/utils";
import { languageAlternates } from "@/i18n/metadata";
import { asAppLocale } from "@/i18n/routing";
import { getContent } from "@/lib/content";
import { getAccompaniments } from "@/lib/accompagnements";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asAppLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "Home" });
  const { presentation, site } = getContent(locale);
  const title = t("metaTitle", {
    name: siteConfig.name,
    title: presentation.title,
  });

  return {
    title: {
      absolute: title,
    },
    description: site.description,
    alternates: languageAlternates(locale, "/"),
    openGraph: {
      title: `${siteConfig.name} · ${presentation.title}`,
      description: site.description,
    },
  };
}

export default async function HomePage({ params }: Props) {
  const locale = asAppLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const tNav = await getTranslations("Nav");
  const { presentation, quotes, audiences, approach } = getContent(locale);
  const { homeSummary, page: accompanimentsPage } = getAccompaniments(locale);

  const understandCards = [
    {
      href: "/comprendre/tsa",
      title: t("tsaTitle"),
      description: t("tsaDescription"),
    },
    {
      href: "/comprendre/asperger",
      title: t("aspergerTitle"),
      description: t("aspergerDescription"),
    },
    {
      href: "/comprendre/hpi",
      title: t("hpiTitle"),
      description: t("hpiDescription"),
    },
    {
      href: "/comprendre/autres-reperes",
      title: t("otherTitle"),
      description: t("otherDescription"),
    },
  ] as const;

  return (
    <>
      {/* 1. Hero — une action principale claire */}
      <Hero
        title={presentation.name}
        subtitle={presentation.title}
        description={t("heroDescription", {
          locations: presentation.locations,
        })}
        visualCaption={t("visualCaption")}
        visualTitle={t("visualTitle")}
        visualImages={{
          contemplation: {
            src: "/images/hero-cabinet-contemplation.jpg",
            alt: t("heroAltContemplation"),
            objectPosition: "object-[50%_42%]",
          },
          lumiere: {
            src: "/images/hero-cabinet-lumiere.jpg",
            alt: t("heroAltLumiere"),
            objectPosition: "object-[48%_55%]",
          },
        }}
        actions={
          <>
            <Button size="lg" variant="warm" asChild>
              <Link href="#rdv">{tNav("bookAppointment")}</Link>
            </Button>
            <Button size="lg" variant="outline" className="btn-hero-outline" asChild>
              <Link href="/accompagnements">{t("discoverAccompaniments")}</Link>
            </Button>
          </>
        }
      />

      {/* 2. Citation Saint-Augustin */}
      <Section atmosphere="phase-1" compact>
        <QuoteSection
          quote={quotes.saintAugustin.text}
          attribution={quotes.saintAugustin.attribution}
        />
      </Section>

      {/* 3. Présentation */}
      <Section
        id="a-propos"
        atmosphere="phase-2"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <SoftHalo
          tone="dusk"
          className="right-[-8%] top-1/4 size-96 opacity-25"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <FadeIn className="relative lg:col-span-5">
              <PhotoFrame
                aspect="editorial"
                offset="up"
                label={t("photoCredit")}
                themeImages={{
                  contemplation: {
                    src: "/images/presentation-bateaux.jpg",
                    alt: t("boatsAlt"),
                    objectPosition: "object-[48%_55%]",
                  },
                  lumiere: {
                    src: "/images/presentation-desert.jpg",
                    alt: t("desertAlt"),
                    objectPosition: "object-[50%_45%]",
                  },
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 28rem"
                className="max-w-md shadow-soft lg:max-w-none"
              />
              <OrbitLine
                variant="arc"
                className="text-foreground/10 absolute -right-4 -bottom-6 hidden w-44 lg:block"
              />
            </FadeIn>

            <FadeIn
              delay={80}
              className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7"
            >
              <SectionHeading
                eyebrow={t("presentationEyebrow")}
                title={presentation.name}
                description={`${presentation.title} ${presentation.locations}.`}
              />
              <div className="flex flex-col gap-4">
                {presentation.homeSummary.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-small text-muted-foreground text-pretty sm:text-base sm:leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="pt-1">
                <Link
                  href="/a-propos"
                  className="link-continue text-small font-medium"
                >
                  {t("discoverPath")}
                </Link>
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* 4. Publics — grille lisible, cartes homogènes */}
      <Section atmosphere="phase-2" className="relative overflow-hidden">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={t("audiencesEyebrow")}
            title={t("audiencesTitle")}
            description={t("audiencesLead")}
          />
          <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <AudienceCard
                key={audience.title}
                title={audience.title}
                description={audience.description}
                variant="soft"
              />
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* 5. Accompagnements — aperçu uniquement */}
      <Section
        id="accompagnements"
        atmosphere="phase-3"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <Starfield density="sparse" />
        <Container className="relative flex flex-col gap-10">
          <SectionHeading
            eyebrow={t("accompanimentsEyebrow")}
            title={homeSummary.title}
            description={homeSummary.lead}
          />

          <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeSummary.items.map((item) => (
              <Card key={item.title} variant="soft" className="h-full" size="sm">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-pretty">
                    {item.description}
                  </CardDescription>
                  {"href" in item && item.href ? (
                    <Link
                      href={item.href}
                      className="link-continue text-small font-medium pt-1"
                    >
                      {homeSummary.assessmentsLinkLabel}
                    </Link>
                  ) : null}
                </CardHeader>
              </Card>
            ))}
          </FadeIn>

          <p>
            <Link
              href={homeSummary.ctaHref}
              className="link-continue text-small font-medium"
            >
              {homeSummary.ctaLabel}
            </Link>
          </p>
        </Container>
      </Section>

      {/* 5b. Visuels — entre accompagnements et domaines */}
      <Section atmosphere="phase-3" className="relative overflow-hidden" compact>
        <Container className="relative">
          <FadeIn className="mx-auto grid max-w-3xl gap-3 sm:gap-4 md:grid-cols-2">
            {[
              {
                src: "/images/accueil-ville.jpg",
                alt: t("cityAlt"),
                objectPosition: "object-[48%_40%]",
                credit: t("photoCredit"),
              },
              {
                src: "/images/accueil-colisee.jpg",
                alt: t("colosseumAlt"),
                objectPosition: "object-[55%_35%]",
                credit: null as string | null,
              },
            ].map((visual) => (
              <Card
                key={visual.src}
                variant="glass"
                className="card-premium overflow-hidden p-0 [--card-spacing:0]"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[5/4] w-full max-h-56 overflow-hidden sm:max-h-64 md:aspect-[4/5] md:max-h-72">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20rem"
                      className={cn("object-cover", visual.objectPosition)}
                    />
                    {visual.credit ? (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent p-3 sm:p-4">
                        <p className="text-caption text-ivory/90 normal-case tracking-wide">
                          {visual.credit}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* 6. Domaines — aperçu */}
      <Section
        id="domaines"
        atmosphere="phase-4"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <SoftHalo
          tone="terracotta"
          className="top-0 left-1/4 size-72 opacity-25"
        />
        <Container className="relative flex flex-col gap-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow={accompanimentsPage.domains.eyebrow}
              title={accompanimentsPage.domains.title}
              description={accompanimentsPage.domains.lead}
            />
            <p className="text-body text-muted-foreground max-w-md text-pretty lg:justify-self-end lg:text-right">
              {t("domainsAside")}
            </p>
          </div>
          <FadeIn className="flex flex-wrap gap-2.5">
            {accompanimentsPage.domains.items.map((label) => (
              <ExpertiseCard key={label} label={label} />
            ))}
          </FadeIn>
          <p>
            <Link
              href="/accompagnements#domaines"
              className="link-continue text-small font-medium"
            >
              {t("seeDomains")}
            </Link>
          </p>
        </Container>
      </Section>

      {/* 6b. Comprendre — dossiers pédagogiques */}
      <Section atmosphere="phase-3" className="relative overflow-hidden">
        <Starfield density="sparse" />
        <Container className="relative flex flex-col gap-10">
          <SectionHeading
            eyebrow={t("understandEyebrow")}
            title={t("understandTitle")}
            description={t("understandLead")}
          />
          <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {understandCards.map((item) => (
              <Card key={item.href} variant="soft" className="h-full" size="sm">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-pretty">
                    {item.description}
                  </CardDescription>
                  <Link
                    href={item.href}
                    className="link-continue text-small font-medium pt-1"
                  >
                    {t("readDossier")}
                  </Link>
                </CardHeader>
              </Card>
            ))}
          </FadeIn>
          <p>
            <Link
              href="/comprendre"
              className="link-continue text-small font-medium"
            >
              {t("seeUnderstand")}
            </Link>
          </p>
        </Container>
      </Section>

      {/* 7. Approche */}
      <Section atmosphere="phase-4" className="relative overflow-hidden">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow={t("approachEyebrow")}
            title={t("approachTitle")}
            description={approach.intro}
          />
          <FadeIn className="relative grid gap-10 sm:grid-cols-3 sm:gap-8">
            <OrbitLine
              variant="horizon"
              className="text-foreground/12 absolute top-6 left-0 hidden w-full lg:block"
            />
            {approach.pillars.map((pillar, i) => (
              <div key={pillar.title} className="relative flex flex-col gap-3">
                <p className="font-display text-primary/70 text-3xl font-medium tracking-tight">
                  0{i + 1}
                </p>
                <h3 className="text-h3 text-foreground">{pillar.title}</h3>
                <p className="text-small text-muted-foreground text-pretty">
                  {pillar.body}
                </p>
              </div>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* 8. Citation Confucius */}
      <Section atmosphere="phase-5" compact>
        <QuoteSection
          quote={quotes.confucius.text}
          attribution={quotes.confucius.attribution}
        />
      </Section>

      {/* 9. RDV — point d’arrivée unique */}
      <AppointmentCTA />
    </>
  );
}
