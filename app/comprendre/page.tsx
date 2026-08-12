import type { Metadata } from "next"
import Link from "next/link";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Hero } from "@/components/sections/hero"
import { SoftHalo } from "@/components/decor/soft-halo"
import { Starfield } from "@/components/decor/starfield"
import { FadeIn } from "@/components/motion/fade-in"
import { EducationalCallout } from "@/components/educational/callout"
import { educationalHub } from "@/lib/educational"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: educationalHub.metaTitle,
  description: educationalHub.metaDescription,
  openGraph: {
    title: educationalHub.metaTitle,
    description: educationalHub.metaDescription,
    url: `${siteConfig.url}/comprendre`,
  },
}

/** Hub Comprendre — même narration visuelle que les dossiers. */
export default function ComprendreHubPage() {
  return (
    <>
      <Hero
        title={educationalHub.title}
        eyebrow={educationalHub.eyebrow}
        description={educationalHub.description}
        showVisual={false}
        compact
      />

      <Section atmosphere="phase-2" className="relative overflow-hidden">
        <Starfield density="sparse" />
        <SoftHalo
          tone="dusk"
          className="left-[-10%] top-1/3 size-80 opacity-20"
        />
        <Container className="relative flex flex-col gap-10 lg:gap-12">
          <EducationalCallout
            kind="disclaimer"
            title="Information pédagogique"
            body={educationalHub.lead}
            className="max-w-3xl"
          />
        </Container>
      </Section>

      <Section atmosphere="phase-3" className="relative overflow-hidden">
        <SoftHalo
          tone="gold"
          className="right-[-8%] top-1/4 size-72 opacity-20"
        />
        <Container className="relative">
          <FadeIn className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {educationalHub.cards.map((card) => (
              <Card key={card.slug} variant="glass" className="card-premium h-full">
                <CardHeader className="gap-3">
                  <Badge
                    variant="secondary"
                    className="w-fit rounded-full font-normal tracking-normal normal-case"
                  >
                    {card.eyebrow}
                  </Badge>
                  <CardTitle className="font-display text-xl tracking-tight sm:text-2xl">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-pretty text-base">
                    {card.description}
                  </CardDescription>
                  <Button
                    variant="secondary"
                    size="sm"
                    asChild
                    className="mt-2 w-fit"
                  >
                    <Link href={card.href}>Lire le dossier</Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </FadeIn>
        </Container>
      </Section>

      <Section atmosphere="phase-5" compact className="relative overflow-hidden">
        <Container>
          <p className="text-small text-muted-foreground mx-auto max-w-prose text-pretty">
            Ces dossiers éclairent des notions souvent recherchées avant une
            consultation. Pour les propositions concrètes du cabinet, voir{" "}
            <Link href="/accompagnements" className="link-continue font-medium">
              Accompagnements
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  )
}
