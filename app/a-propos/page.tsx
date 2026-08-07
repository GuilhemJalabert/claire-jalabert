import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { PhotoFrame } from "@/components/sections/photo-frame";
import { FadeIn } from "@/components/motion/fade-in";
import { presentation } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `${presentation.name}, ${presentation.title} ${presentation.locations}.`,
};

export default function AboutPage() {
  return (
    <Section atmosphere="phase-2" className="min-h-[60vh]">
      <Container className="grid gap-12 py-8 lg:grid-cols-12 lg:items-start">
        <FadeIn className="lg:col-span-5">
          <PhotoFrame label="Portrait — à venir" offset="up" />
        </FadeIn>
        <FadeIn delay={80} className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
          <SectionHeading
            eyebrow="À propos"
            title={presentation.name}
            description={`${presentation.title} ${presentation.locations}.`}
            as="h1"
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
          <p className="text-small text-muted-foreground">
            Page en cours d’enrichissement. Consultez aussi{" "}
            <Link href="/" className="text-foreground underline-offset-4 hover:underline">
              l’accueil
            </Link>{" "}
            ou{" "}
            <Link
              href="/contact"
              className="text-foreground underline-offset-4 hover:underline"
            >
              le contact
            </Link>
            .
          </p>
          <Button variant="warm" asChild className="w-fit">
            <Link href="/#rdv">Prendre rendez-vous</Link>
          </Button>
          <p className="text-caption text-muted-foreground normal-case tracking-normal">
            {siteConfig.name}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
