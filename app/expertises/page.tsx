import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { ExpertiseCard } from "@/components/sections/expertise-card";
import { FadeIn } from "@/components/motion/fade-in";
import { expertises, groupsOfSpeech } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertises",
  description:
    "Haut Potentiel Intellectuel et Créatif, Syndrome d’Asperger, relations familiales, bilans, groupes de parole…",
};

export default function ExpertisesPage() {
  return (
    <Section atmosphere="phase-4" className="min-h-[60vh]">
      <Container className="flex flex-col gap-12 py-8">
        <SectionHeading
          as="h1"
          eyebrow="Expertises"
          title="Domaines d’accompagnement"
          description="Thématiques mises en avant sur le site actuel."
        />

        <FadeIn className="flex flex-wrap gap-2.5">
          {expertises.map((label) => (
            <ExpertiseCard key={label} label={label} />
          ))}
        </FadeIn>

        <div className="border-border/40 flex max-w-2xl flex-col gap-4 border-t pt-8">
          <h2 className="text-h3 text-foreground">{groupsOfSpeech.title}</h2>
          <ul className="text-small text-muted-foreground flex flex-col gap-2">
            {groupsOfSpeech.objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <Button variant="warm" asChild className="w-fit">
          <Link href="/#rdv">Prendre rendez-vous</Link>
        </Button>
      </Container>
    </Section>
  );
}
