import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation";
import { languageAlternates } from "@/i18n/metadata"
import { asAppLocale } from "@/i18n/routing"

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
import { getEducationalHub } from "@/lib/educational"
import { siteConfig } from "@/lib/site"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asAppLocale((await params).locale)
  const hub = getEducationalHub(locale)

  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: languageAlternates(locale, "/comprendre"),
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: `${siteConfig.url}/comprendre`,
    },
  }
}

export default async function ComprendreHubPage({ params }: Props) {
  const locale = asAppLocale((await params).locale)
  setRequestLocale(locale)
  const t = await getTranslations("Comprendre")
  const hub = getEducationalHub(locale)

  return (
    <>
      <Hero
        title={hub.title}
        eyebrow={hub.eyebrow}
        description={hub.description}
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
            title={t("infoTitle")}
            body={hub.lead}
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
            {hub.cards.map((card) => (
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
                    <Link href={card.href}>{t("readDossier")}</Link>
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
            {t("hubFooterBefore")}{" "}
            <Link href="/accompagnements" className="link-continue font-medium">
              {t("hubFooterLink")}
            </Link>
            {t("hubFooterAfter")}
          </p>
        </Container>
      </Section>
    </>
  )
}
