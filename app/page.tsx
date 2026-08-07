import type { Metadata } from "next";
import Link from "next/link";

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
import {
  accompaniments,
  approach,
  audiences,
  expertises,
  presentation,
  quotes,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} · ${siteConfig.title} à Pau et Gan`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — une action principale claire */}
      <Hero
        title={presentation.name}
        subtitle={presentation.title}
        description={`Psychologue clinicienne ${presentation.locations}. Accompagnement des enfants, adolescents, adultes, couples et familles — notamment autour du Haut Potentiel Intellectuel et Créatif et du Syndrome d’Asperger.`}
        visualCaption="Pau · Gan"
        visualTitle="Cabinet de psychologie"
        actions={
          <>
            <Button size="lg" variant="warm" asChild>
              <Link href="#rdv">Prendre rendez-vous</Link>
            </Button>
            <Button size="lg" variant="outline" className="btn-hero-outline" asChild>
              <Link href="#accompagnements">Découvrir les accompagnements</Link>
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
                label="Portrait — à venir"
                className="max-w-md lg:max-w-none"
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
                eyebrow="Présentation"
                title={presentation.name}
                description={`${presentation.title} ${presentation.locations}.`}
              />
              <ul className="flex flex-col gap-3">
                {presentation.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-small text-muted-foreground border-border/40 border-l pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="pt-1">
                <Link href="/a-propos" className="link-continue text-small font-medium">
                  En savoir plus
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
            eyebrow="Publics"
            title="Qui est accompagné ?"
            description="Enfants, adolescents, adultes, couples et familles."
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

      {/* 5. Accompagnements */}
      <Section
        id="accompagnements"
        atmosphere="phase-3"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <Starfield density="sparse" />
        <Container className="relative flex flex-col gap-12">
          <SectionHeading
            eyebrow="Accompagnements"
            title="Les suivis proposés"
            description="Une sélection des accompagnements présentés sur le site — composition volontairement asymétrique."
          />

          <FadeIn className="grid gap-5 md:grid-cols-12">
            <Card variant="editorial" className="md:col-span-7">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">
                  {accompaniments.featured.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {accompaniments.featured.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/accompagnements"
                  className="link-continue text-small font-medium"
                >
                  Voir tous les accompagnements
                </Link>
              </CardContent>
            </Card>

            <Card variant="elevated" className="md:col-span-5">
              <CardHeader>
                <CardTitle>{accompaniments.items[0].title}</CardTitle>
                <CardDescription>
                  {accompaniments.items[0].description}
                </CardDescription>
              </CardHeader>
            </Card>

            {accompaniments.items.slice(1, 5).map((item) => (
              <Card
                key={item.title}
                variant="soft"
                className="md:col-span-6"
                size="sm"
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </FadeIn>

          <FadeIn className="border-border/40 flex flex-col gap-4 border-t pt-8">
            <p className="text-caption text-muted-foreground">Également proposés</p>
            <ul className="text-small text-muted-foreground grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {accompaniments.items.slice(5).map((item) => (
                <li key={item.title} className="flex flex-col gap-0.5">
                  <span className="text-foreground font-medium">{item.title}</span>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>

      {/* 6. Expertises */}
      <Section
        id="expertises"
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
              eyebrow="Expertises"
              title="Domaines d’accompagnement"
              description="Thématiques mises en avant sur le site actuel."
            />
            <p className="text-body text-muted-foreground max-w-md text-pretty lg:justify-self-end lg:text-right">
              Chaque parcours est singulier. Ces domaines indiquent les
              orientations du cabinet, sans préjuger de la demande.
            </p>
          </div>
          <FadeIn className="flex flex-wrap gap-2.5">
            {expertises.map((label) => (
              <ExpertiseCard key={label} label={label} />
            ))}
          </FadeIn>
          <p>
            <Link href="/expertises" className="link-continue text-small font-medium">
              Explorer les expertises
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
            eyebrow="Approche"
            title="L’esprit des entretiens"
            description={approach.intro}
          />
          <FadeIn className="relative grid gap-10 sm:grid-cols-3">
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
