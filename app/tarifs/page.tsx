import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { contactInfo, tariffs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs des entretiens et bilans — cabinet de psychologie à Gan.",
};

export default function TariffsPage() {
  return (
    <Section atmosphere="phase-4" className="min-h-[60vh]">
      <Container className="flex max-w-3xl flex-col gap-10 py-8">
        <SectionHeading
          as="h1"
          eyebrow="Tarifs"
          title="Tarifs et renseignements"
          description="Informations issues de la page Contact / Tarifs du site actuel. Les consultations et bilans se déroulent au cabinet de Gan."
        />

        <FadeIn className="flex flex-col gap-0">
          {tariffs.map((row, index) => (
            <div key={row.label}>
              {index > 0 ? <Separator className="bg-border/50" /> : null}
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p className="text-body text-foreground text-pretty">
                  {row.label}
                </p>
                <p className="font-display text-foreground shrink-0 text-xl font-medium tracking-tight">
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>

        <p className="text-small text-muted-foreground">
          Adresse : {contactInfo.address.full}
        </p>

        <Button variant="warm" asChild className="w-fit">
          <Link href="/#rdv">Prendre rendez-vous</Link>
        </Button>
      </Container>
    </Section>
  );
}
