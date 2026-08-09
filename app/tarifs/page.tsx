import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClockIcon, CircleHelpIcon, WalletIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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

          <FadeIn className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.consultations.map((item) => (
              <Card
                key={item.id}
                variant="elevated"
                className="h-full transition-[transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-elevated"
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

      {/* 4–5. Modalités */}
      <Section atmosphere="phase-4" className="relative overflow-hidden">
        <SoftHalo
          tone="terracotta"
          className="top-0 left-1/4 size-64 opacity-20"
        />
        <Container className="relative flex flex-col gap-10">
          <SectionHeading
            eyebrow="Modalités"
            title="Informations importantes"
            description="Règles applicables à tous les rendez-vous."
          />

          <FadeIn className="grid gap-5 md:grid-cols-2">
            <Card variant="soft" className="h-full">
              <CardHeader className="gap-4">
                <div className="text-primary flex size-10 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--primary)_14%,transparent)]">
                  <CalendarClockIcon className="size-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle>{pricing.cancellation.title}</CardTitle>
                  <p className="font-display text-card-foreground text-2xl font-medium tracking-tight">
                    {pricing.cancellation.highlight}
                  </p>
                </div>
                <CardDescription className="text-pretty">
                  {pricing.cancellation.body}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="soft" className="h-full">
              <CardHeader className="gap-4">
                <div className="text-primary flex size-10 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--primary)_14%,transparent)]">
                  <WalletIcon className="size-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle>{pricing.payment.title}</CardTitle>
                  <p className="font-display text-card-foreground text-2xl font-medium tracking-tight">
                    {pricing.payment.highlight}
                  </p>
                </div>
                <CardDescription className="text-pretty">
                  {pricing.payment.body}
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>

          <Alert className="border-border/50 bg-card/80 rounded-2xl px-5 py-4">
            <CircleHelpIcon />
            <AlertTitle className="font-display text-base tracking-tight">
              En résumé
            </AlertTitle>
            <AlertDescription>
              Prévenir au moins 48 heures à l’avance en cas d’annulation.
              Régler chaque séance le jour du rendez-vous.
            </AlertDescription>
          </Alert>
        </Container>
      </Section>

      {/* 6. CTA */}
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
