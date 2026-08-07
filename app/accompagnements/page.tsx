import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { accompaniments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accompagnements",
  description:
    "Bilans psychologiques, entretiens cliniques et thérapeutiques, thérapie de couple, médiations et thérapie de groupe.",
};

export default function AccompanimentsPage() {
  return (
    <Section atmosphere="phase-3" className="min-h-[60vh]">
      <Container className="flex flex-col gap-12 py-8">
        <SectionHeading
          as="h1"
          eyebrow="Accompagnements"
          title="Les suivis proposés"
          description="Liste issue du site actuel — contenus détaillés à enrichir progressivement."
        />

        <FadeIn>
          <Card variant="editorial" className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl">
                {accompaniments.featured.title}
              </CardTitle>
              <CardDescription className="text-base">
                {accompaniments.featured.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </FadeIn>

        <FadeIn className="grid gap-4 sm:grid-cols-2">
          {accompaniments.items.map((item) => (
            <Card key={item.title} variant="soft">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </FadeIn>

        <Button variant="warm" asChild className="w-fit">
          <Link href="/#rdv">Prendre rendez-vous</Link>
        </Button>
      </Container>
    </Section>
  );
}
