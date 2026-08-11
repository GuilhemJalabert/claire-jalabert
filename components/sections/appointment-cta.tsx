import { MailIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SoftHalo } from "@/components/decor/soft-halo";
import { Star } from "@/components/decor/star";
import { Starfield } from "@/components/decor/starfield";
import { contactInfo } from "@/lib/content";
import { cn } from "@/lib/utils";

type AppointmentCTAProps = {
  className?: string;
  title?: string;
  description?: string;
};

/**
 * Section finale de prise de rendez-vous — téléphone et email confirmés.
 */
function AppointmentCTA({
  className,
  title = "Prendre rendez-vous",
  description = "Contactez le cabinet par téléphone (SMS de préférence) ou par e-mail.",
}: AppointmentCTAProps) {
  return (
    <Section
      id="rdv"
      atmosphere="phase-5"
      className={cn("relative scroll-mt-24 overflow-hidden", className)}
    >
      <Starfield density="sparse" />
      <SoftHalo
        tone="gold"
        breathe
        className="top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-30"
      />
      <Container className="relative">
        <FadeIn className="mx-auto flex max-w-xl flex-col items-center gap-7 py-4 text-center sm:py-8">
          <Star
            shape="four"
            size={9}
            tone="gold"
            opacity={0.45}
            twinkle
            delay="2s"
            duration="14s"
          />
          <h2 className="text-h1 text-foreground text-balance">{title}</h2>
          <p className="text-body text-muted-foreground text-pretty">
            {description}
          </p>
          <div className="flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <Button size="lg" variant="warm" asChild className="w-full sm:w-auto">
              <a href={`tel:${contactInfo.phoneTel}`}>
                <PhoneIcon data-icon="inline-start" />
                {contactInfo.phoneDisplay}
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="w-full sm:w-auto"
            >
              <a href={`mailto:${contactInfo.email}`}>
                <MailIcon data-icon="inline-start" />
                Envoyer un e-mail
              </a>
            </Button>
          </div>
          <div className="text-small text-muted-foreground flex flex-col gap-1.5">
            <p>{contactInfo.phoneNote}</p>
            <p>
              Consultations :
              <br />
              {contactInfo.address.street}
              <br />
              {contactInfo.address.postalCode} {contactInfo.address.city}
            </p>
            <p>{contactInfo.modalitiesLabel}</p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

export { AppointmentCTA };
