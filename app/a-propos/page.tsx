import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
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
import { PhotoFrame } from "@/components/sections/photo-frame";
import { FadeIn } from "@/components/motion/fade-in";
import { SoftHalo } from "@/components/decor/soft-halo";
import { Star } from "@/components/decor/star";
import { about, presentation } from "@/lib/content";
import { accompanimentsAboutMention } from "@/lib/accompagnements";

export const metadata: Metadata = {
  title: "À propos",
  description: `${presentation.name}, ${presentation.title} ${presentation.locations}. Parcours, spécialisations HPIC et Syndrome d’Asperger.`,
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero éditorial */}
      <Hero
        title={presentation.name}
        subtitle={presentation.title}
        secondary={presentation.locationsShort}
        descriptionNode={
          <>
            {about.heroIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
        visual={
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <PhotoFrame
              aspect="editorial"
              offset="none"
              label="Portrait de Claire Jalabert — à venir"
              className="shadow-elevated"
            />
            <Star
              shape="four"
              size={8}
              tone="gold"
              opacity={0.45}
              twinkle
              delay="1.5s"
              duration="14s"
              className="absolute -top-2 -right-1 sm:top-4 sm:-right-3"
            />
          </div>
        }
      />

      {/* 2. Parcours — phase-2 (suite du hero, comme la présentation accueil) */}
      <Section atmosphere="phase-2" className="relative overflow-hidden">
        <SoftHalo
          tone="dusk"
          className="left-[-10%] top-1/3 size-80 opacity-20"
        />
        <Container className="relative flex flex-col gap-14 lg:gap-16">
          <SectionHeading
            eyebrow={about.journey.eyebrow}
            title={about.journey.title}
            description={about.journey.lead}
          />

          <FadeIn className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Card variant="editorial" className="h-full">
                <CardHeader>
                  <p className="text-caption text-[color:var(--card-muted-foreground)] mb-2">
                    Enseignement
                  </p>
                  <CardTitle className="text-2xl">
                    {about.journey.teaching.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {about.journey.teaching.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-7">
              <p className="text-body text-muted-foreground text-pretty">
                {about.journey.studiesIntro}
              </p>

              <ol className="relative flex flex-col gap-0">
                {about.journey.studies.map((step, index) => {
                  const isLast = index === about.journey.studies.length - 1;
                  return (
                    <li key={step.degree} className="relative flex gap-5 sm:gap-7">
                      <div className="flex w-6 shrink-0 flex-col items-center">
                        <Star
                          shape="four"
                          size={7}
                          tone="gold"
                          opacity={0.55}
                          className="relative z-10 mt-1.5"
                        />
                        {!isLast ? (
                          <span
                            aria-hidden
                            className="bg-border/70 mt-2 w-px flex-1 min-h-10"
                          />
                        ) : null}
                      </div>

                      <div className={isLast ? "pb-0" : "pb-10 sm:pb-12"}>
                        <h3 className="text-h3 text-foreground">
                          {step.degree}
                        </h3>
                        <p className="text-small text-muted-foreground mt-1">
                          {step.place}
                          {"lab" in step && step.lab ? (
                            <>
                              {" · "}
                              {step.lab}
                            </>
                          ) : null}
                        </p>
                        {"thesis" in step && step.thesis ? (
                          <div className="mt-4 max-w-xl space-y-2">
                            <p className="font-display text-foreground text-lg leading-snug tracking-tight text-pretty sm:text-xl">
                              {step.thesis}
                            </p>
                            {"direction" in step && step.direction ? (
                              <p className="text-small text-muted-foreground">
                                {step.direction}
                              </p>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 3. Spécialisations — phase-3 (crépuscule, comme l’accueil) */}
      <Section atmosphere="phase-3" className="relative overflow-hidden">
        <SoftHalo
          tone="dusk"
          className="top-0 right-[-5%] size-72 opacity-20"
        />
        <Container className="relative flex flex-col gap-12">
          <SectionHeading
            eyebrow={about.specializations.eyebrow}
            title={about.specializations.title}
            description={about.specializations.lead}
          />

          <FadeIn className="grid gap-5 md:grid-cols-2">
            {about.specializations.featured.map((item) => (
              <Card key={item.title} variant="elevated" className="h-full">
                <CardHeader>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {item.short}
                  </Badge>
                  <CardTitle className="text-2xl sm:text-[1.65rem]">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </FadeIn>

          <div className="flex flex-col gap-5">
            <Separator className="bg-border/50" />
            <p className="text-caption text-muted-foreground">
              Autres domaines
            </p>
            <FadeIn className="flex flex-wrap gap-2.5">
              {about.specializations.others.map((label) => (
                <Badge
                  key={label}
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm font-normal tracking-normal normal-case"
                >
                  {label}
                </Badge>
              ))}
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* 4. Formations complémentaires — phase-4 (aube) */}
      <Section atmosphere="phase-4" className="relative overflow-hidden">
        <Container className="relative flex flex-col gap-12">
          <SectionHeading
            eyebrow={about.complementary.eyebrow}
            title={about.complementary.title}
            description={about.complementary.lead}
          />

          <FadeIn className="grid gap-8 sm:grid-cols-3">
            {about.complementary.items.map((item) => (
              <article key={item.axis} className="flex flex-col gap-3">
                <p className="text-caption text-primary/80">{item.axis}</p>
                <h3 className="text-h3 text-foreground text-balance">
                  {item.title}
                </h3>
                {item.detail ? (
                  <p className="text-small text-muted-foreground">
                    {item.detail}
                  </p>
                ) : null}
                {item.place ? (
                  <p className="text-small text-muted-foreground">{item.place}</p>
                ) : null}
              </article>
            ))}
          </FadeIn>
        </Container>
      </Section>

      {/* 5. Transition — phase-5 (lumière / fin de narration) */}
      <Section atmosphere="phase-5" compact className="relative overflow-hidden">
        <Container>
          <FadeIn className="mx-auto flex max-w-xl flex-col items-center gap-6 py-4 text-center sm:py-6">
            <div className="gold-rule" />
            <p className="text-body text-muted-foreground text-pretty">
              {accompanimentsAboutMention.body}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button size="lg" variant="warm" asChild>
                <Link href={accompanimentsAboutMention.ctaHref}>
                  {accompanimentsAboutMention.ctaLabel}
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#rdv">Prendre rendez-vous</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
