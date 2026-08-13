import { MailIcon, PhoneIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SoftHalo } from "@/components/decor/soft-halo";
import { Star } from "@/components/decor/star";
import { Starfield } from "@/components/decor/starfield";
import { contactFacts, getContent } from "@/lib/content";
import { cn } from "@/lib/utils";

type AppointmentCTAProps = {
  className?: string;
  title?: string;
  description?: string;
};

/**
 * Section finale de prise de rendez-vous — téléphone et email confirmés.
 */
async function AppointmentCTA({
  className,
  title,
  description,
}: AppointmentCTAProps) {
  const locale = await getLocale();
  const t = await getTranslations("Common");
  const { contact } = getContent(locale);

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
          <h2 className="text-h1 text-foreground text-balance">
            {title ?? t("appointmentTitle")}
          </h2>
          <p className="text-body text-muted-foreground text-pretty">
            {description ?? t("appointmentDescription")}
          </p>
          <div className="flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <Button size="lg" variant="warm" asChild className="w-full sm:w-auto">
              <a href={`tel:${contactFacts.phoneTel}`}>
                <PhoneIcon data-icon="inline-start" />
                {contactFacts.phoneDisplay}
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="w-full sm:w-auto"
            >
              <a href={`mailto:${contactFacts.email}`}>
                <MailIcon data-icon="inline-start" />
                {t("sendEmail")}
              </a>
            </Button>
          </div>
          <div className="text-small text-muted-foreground flex flex-col gap-1.5">
            <p>{contact.phoneNote}</p>
            <p>
              {t("consultationsLabel")}
              <br />
              {contactFacts.address.street}
              <br />
              {contactFacts.address.postalCode} {contactFacts.address.city}
            </p>
            <p>{contact.modalitiesLabel}</p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

export { AppointmentCTA };
