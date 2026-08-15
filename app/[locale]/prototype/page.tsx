import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { absoluteTitle, absoluteUrl } from "@/i18n/metadata";
import { asAppLocale } from "@/i18n/routing";

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
import { SectionHeading } from "@/components/sections/section-heading";
import { Hero } from "@/components/sections/hero";
import { MediaPlaceholder } from "@/components/sections/media-placeholder";
import { QuoteSection } from "@/components/sections/quote-section";
import { FadeIn } from "@/components/motion/fade-in";
import { Constellation } from "@/components/decor/constellation";
import { OrbitLine } from "@/components/decor/orbit-line";
import { SoftHalo } from "@/components/decor/soft-halo";
import { Star } from "@/components/decor/star";
import { Starfield } from "@/components/decor/starfield";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asAppLocale((await params).locale);
  return {
    title: absoluteTitle("Prototype — référence design"),
    description:
      "Maquette éditoriale interne — Contemplation ↔ Lumière. Non indexée.",
    robots: { index: false, follow: false },
    alternates: {
      canonical: absoluteUrl(locale, "/prototype"),
    },
  };
}

const accompaniments = [
  {
    variant: "soft" as const,
    title: "Premier accompagnement",
    body: "Courte description placeholder. Espace réservé au futur contenu.",
  },
  {
    variant: "elevated" as const,
    title: "Deuxième accompagnement",
    body: "Texte neutre pour juger densités, ombres et respirations.",
  },
  {
    variant: "interactive" as const,
    title: "Troisième accompagnement",
    body: "Carte interactive — hover discret, même langage visuel.",
  },
  {
    variant: "editorial" as const,
    title: "Quatrième accompagnement",
    body: "Traitement éditorial, padding plus généreux, ton plus calme.",
  },
];

const domains = [
  "Domaine A",
  "Domaine B",
  "Domaine C",
  "Domaine D",
  "Domaine E",
  "Domaine F",
];

const steps = [
  {
    n: "01",
    title: "Rencontre",
    body: "Première étape placeholder — écoute et cadrage.",
  },
  {
    n: "02",
    title: "Chemin",
    body: "Deuxième étape placeholder — exploration progressive.",
  },
  {
    n: "03",
    title: "Ancrage",
    body: "Troisième étape placeholder — consolidation douce.",
  },
];

/**
 * Maquette éditoriale complète de la future page d’accueil.
 * Contenu 100 % placeholder. Narration via phases / thème.
 */
export default function PrototypePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <Hero
        eyebrow="Prototype visuel"
        title="Un espace pour se déposer"
        description="Paragraphe placeholder. Une phrase courte pour tester la lisibilité et le rythme du hero."
        actions={
          <>
            <Button size="lg" variant="warm">
              Prendre rendez-vous
            </Button>
            <Button size="lg" variant="outline" className="btn-hero-outline">
              Découvrir
            </Button>
          </>
        }
      />

      {/* ── 2. Introduction — phase 1, composition aérée ── */}
      <Section atmosphere="phase-1" className="relative overflow-hidden">
        <Starfield density="sparse" />
        <SoftHalo
          tone="gold"
          breathe
          className="top-1/4 -left-24 size-80 opacity-20"
        />
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col gap-8 py-4 text-center sm:py-8">
            <p className="text-caption text-primary/80">Introduction</p>
            <h2 className="text-h1 text-foreground text-balance">
              Une présence attentive, un rythme plus doux
            </h2>
            <p className="text-body text-muted-foreground text-pretty">
              Texte d’introduction placeholder. Quelques lignes seulement —
              l’essentiel est l’espace autour, la respiration, la clarté.
            </p>
            <div className="gold-rule mx-auto" />
          </FadeIn>
        </Container>
      </Section>

      {/* ── 3. Accompanyements — phase 2, grille irrégulière ── */}
      <Section atmosphere="phase-2" className="relative overflow-hidden">
        <SoftHalo
          tone="dusk"
          className="right-[-10%] bottom-0 size-96 opacity-25"
        />
        <Container className="relative flex flex-col gap-12">
          <SectionHeading
            eyebrow="Accompagnements"
            title="Des espaces distincts, une même attention"
            description="Cartes placeholder pour évaluer variantes, densités et asymétries."
          />

          <FadeIn className="grid gap-5 md:grid-cols-12">
            <Card
              variant={accompaniments[0].variant}
              className="md:col-span-5 md:row-span-1"
            >
              <CardHeader>
                <CardTitle className="text-xl">
                  {accompaniments[0].title}
                </CardTitle>
                <CardDescription>{accompaniments[0].body}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="-ml-2">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card
              variant={accompaniments[1].variant}
              className="md:col-span-7"
            >
              <CardHeader>
                <CardTitle className="text-xl">
                  {accompaniments[1].title}
                </CardTitle>
                <CardDescription className="max-w-md">
                  {accompaniments[1].body}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              variant={accompaniments[2].variant}
              className="md:col-span-4"
            >
              <CardHeader>
                <Badge variant="secondary" className="mb-2 w-fit">
                  Focus
                </Badge>
                <CardTitle>{accompaniments[2].title}</CardTitle>
                <CardDescription>{accompaniments[2].body}</CardDescription>
              </CardHeader>
            </Card>

            <Card
              variant={accompaniments[3].variant}
              className="md:col-span-8"
            >
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  {accompaniments[3].title}
                </CardTitle>
                <CardDescription className="max-w-lg text-base">
                  {accompaniments[3].body} Composition plus large pour casser
                  la régularité de la grille.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="gold-rule" />
              </CardContent>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* ── 4. Citation — respiration ── */}
      <Section atmosphere="phase-2" compact className="relative">
        <Constellation
          variant="quiet"
          className="breath-decor pointer-events-none absolute top-8 right-[8%] hidden w-36 opacity-50 lg:block"
        />
        <QuoteSection quote="Une phrase calme, posée au centre de la page — pour laisser le regard se reposer." />
      </Section>

      {/* ── 5. Expertise — phase 3 crépuscule ── */}
      <Section atmosphere="phase-3" className="relative overflow-hidden">
        <Starfield density="sparse" />
        <Container className="relative flex flex-col gap-12">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.1fr]">
            <SectionHeading
              eyebrow="Domaines"
              title="Une expertise dessinée en silhouettes"
              description="Badges et cartes placeholder — aucun contenu métier."
            />
            <p className="text-body text-muted-foreground max-w-md text-pretty lg:justify-self-end lg:text-right">
              Blocs courts pour tester la densité d’information sans surcharger
              la composition.
            </p>
          </div>

          <FadeIn className="flex flex-wrap gap-2.5">
            {domains.map((domain) => (
              <Badge
                key={domain}
                variant="outline"
                className="rounded-full px-4 py-1.5 text-sm font-normal"
              >
                {domain}
              </Badge>
            ))}
          </FadeIn>

          <FadeIn className="grid gap-4 sm:grid-cols-3">
            {["Axe un", "Axe deux", "Axe trois"].map((label, i) => (
              <div
                key={label}
                className="border-border/50 flex flex-col gap-3 border-t pt-5"
              >
                <p className="text-caption text-muted-foreground">
                  0{i + 1}
                </p>
                <h3 className="text-h3 text-foreground">{label}</h3>
                <p className="text-small text-muted-foreground">
                  Courte note placeholder pour la hiérarchie visuelle.
                </p>
              </div>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* ── 6. Présentation — asymétrie éditoriale ── */}
      <Section atmosphere="phase-4" className="relative overflow-hidden">
        <SoftHalo
          tone="terracotta"
          className="top-1/2 left-1/3 size-72 -translate-y-1/2 opacity-25"
        />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <FadeIn className="relative lg:col-span-5 lg:col-start-1">
              <MediaPlaceholder
                aspect="editorial"
                offset="up"
                label="Portrait placeholder"
                className="max-w-md lg:max-w-none"
              />
              <OrbitLine
                variant="arc"
                className="text-foreground/10 absolute -right-6 -bottom-4 hidden w-48 lg:block"
              />
            </FadeIn>

            <FadeIn
              delay={100}
              className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7"
            >
              <SectionHeading
                eyebrow="Présentation"
                title="Un cadre de confiance"
                description="Texte placeholder à côté d’une image décalée — composition volontairement asymétrique."
              />
              <p className="text-body text-muted-foreground max-w-md text-pretty">
                Deuxième paragraphe neutre. L’objectif est de sentir le poids du
                texte face à la zone visuelle, sans remplir artificiellement.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button variant="outline" size="default">
                  Lire la suite
                </Button>
                <Star shape="cross" size={7} tone="gold" opacity={0.35} />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── 7. Méthode — 3 étapes, trajectoire ── */}
      <Section atmosphere="phase-4" className="relative overflow-hidden">
        <Container className="relative flex flex-col gap-14">
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Méthode"
            title="Un déroulé simple"
            description="Trois étapes placeholder — ligne organique, pas de timeline technique."
          />

          <FadeIn className="relative">
            <OrbitLine
              variant="horizon"
              className="text-foreground/15 absolute top-8 left-0 hidden w-full lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
              {steps.map((step) => (
                <div key={step.n} className="relative flex flex-col gap-4">
                  <p className="font-display text-primary/70 text-3xl font-medium tracking-tight">
                    {step.n}
                  </p>
                  <h3 className="text-h3 text-foreground">{step.title}</h3>
                  <p className="text-small text-muted-foreground text-pretty">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ── 8. CTA final — phase 5, opposé au hero ── */}
      <Section atmosphere="phase-5" className="relative overflow-hidden">
        <Starfield density="night" />
        <SoftHalo
          tone="gold"
          breathe
          className="top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-30"
        />
        <Container className="relative">
          <FadeIn className="mx-auto flex max-w-xl flex-col items-center gap-8 py-6 text-center sm:py-10">
            <Star
              shape="four"
              size={9}
              tone="gold"
              opacity={0.45}
              twinkle
              delay="2s"
              duration="14s"
            />
            <h2 className="text-h1 text-foreground text-balance">
              Prêt à commencer ?
            </h2>
            <p className="text-body text-muted-foreground text-pretty">
              Phrase CTA placeholder. Très peu de texte — une invitation claire.
            </p>
            <Button size="lg" variant="warm" asChild>
              <Link href="/prototype">Action principale</Link>
            </Button>
            <div className="gold-rule" />
          </FadeIn>
        </Container>
      </Section>

      {/* ── Bandeau bas — photo paysage ── */}
      <Section atmosphere="phase-5" compact className="pb-[var(--section-space)]">
        <Container>
          <FadeIn>
            <MediaPlaceholder
              aspect="landscape"
              label="Visuel éditorial placeholder"
              className="shadow-soft"
            />
          </FadeIn>
          <Separator className="mt-10 bg-border/40" />
          <p className="text-caption text-muted-foreground mt-6 normal-case tracking-normal">
            Prototype éditorial — basculez Contemplation / Lumière dans la
            navigation pour inverser la narration.
          </p>
        </Container>
      </Section>
    </>
  );
}
