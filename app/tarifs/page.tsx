import type { Metadata } from "next";
import Link from "next/link";

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
import { contactInfo } from "@/lib/content";
import { accompanimentsTariffsLink } from "@/lib/accompagnements";
import { pricing } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tarifs et modalités",
  description: `Tarifs des consultations (${pricing.consultations.map((c) => c.priceLabel).join(", ")}) et modalités de rendez-vous — ${siteConfig.name}, psychologue clinicienne à Gan.`,
};

export default function TariffsPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        title="Tarifs & modalités"
        description="Une présentation claire des tarifs des consultations et des modalités de rendez-vous."
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
            eyebrow="Consultations"
            title="Honoraires"
            description="Trois tarifs pour les rendez-vous au cabinet."
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
                  Bilans & évaluations
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
                    href={accompanimentsTariffsLink.href}
                    className="link-continue text-small font-medium"
                  >
                    {accompanimentsTariffsLink.label}
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
              Une question sur les tarifs ou les modalités ?
            </h2>
            <p className="text-small text-muted-foreground text-pretty">
              Le secrétariat peut vous renseigner et vous accompagner dans la
              prise de rendez-vous. Consultations à {contactInfo.address.city},{" "}
              {contactInfo.modalities}.
            </p>
            <Separator className="bg-border/40 max-w-xs" />
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button size="lg" variant="warm" asChild>
                <Link href={pricing.assessments.ctaHref}>
                  {pricing.assessments.ctaLabel}
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
