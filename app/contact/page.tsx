import type { Metadata } from "next";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { contactInfo } from "@/lib/content";
import { accompanimentsContactMention } from "@/lib/accompagnements";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacter Claire Jalabert — ${contactInfo.address.full}. Téléphone et e-mail.`,
};

export default function ContactPage() {
  return (
    <Section atmosphere="phase-5" className="relative min-h-[60vh] overflow-hidden">
      <Container className="relative flex max-w-2xl flex-col gap-10 py-8">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Prendre rendez-vous"
          description="Les consultations se déroulent au cabinet de Gan, en présentiel ou par visioconférence."
        />

        <FadeIn className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <PhoneIcon className="text-primary mt-1 size-5 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-foreground font-medium">
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </p>
              <p className="text-small text-muted-foreground">
                {contactInfo.phoneNote}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MailIcon className="text-primary mt-1 size-5 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-foreground font-medium">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPinIcon className="text-primary mt-1 size-5 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-foreground font-medium">
                {contactInfo.address.full}
              </p>
              <p className="text-small text-muted-foreground">
                Consultations {contactInfo.modalities}
              </p>
            </div>
          </div>
        </FadeIn>

        <Separator className="bg-border/50" />

        <p className="text-small text-muted-foreground text-pretty">
          {accompanimentsContactMention.body}{" "}
          <Link
            href={accompanimentsContactMention.ctaHref}
            className="link-continue font-medium"
          >
            {accompanimentsContactMention.ctaLabel}
          </Link>
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" variant="warm" asChild>
            <a href={`tel:${contactInfo.phoneTel}`}>Appeler</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href={`mailto:${contactInfo.email}`}>Envoyer un e-mail</a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
