import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { SoftHalo } from "@/components/decor/soft-halo";
import { Starfield } from "@/components/decor/starfield";
import { OrbitLine } from "@/components/decor/orbit-line";
import { Constellation } from "@/components/decor/constellation";
import { Star } from "@/components/decor/star";

type HeroProps = {
  title: string;
  /** Sous-titre sous le titre (ex. profession). */
  subtitle?: string;
  /** Mention secondaire sous le sous-titre (ex. lieux). */
  secondary?: string;
  /** Label discret au-dessus du titre. */
  eyebrow?: string;
  description?: string;
  /** Description longue (plusieurs paragraphes). */
  descriptionNode?: React.ReactNode;
  actions?: React.ReactNode;
  showVisual?: boolean;
  /** Hero plus court (pages secondaires). */
  compact?: boolean;
  /** Remplace le panneau décoratif (ex. portrait). */
  visual?: React.ReactNode;
  /** Image dans le panneau décoratif par défaut. */
  visualImage?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  /** Images selon le thème Contemplation / Lumière. */
  visualImages?: {
    contemplation: {
      src: string;
      alt: string;
      objectPosition?: string;
    };
    lumiere: {
      src: string;
      alt: string;
      objectPosition?: string;
    };
  };
  visualCaption?: string;
  visualTitle?: string;
  className?: string;
};

/**
 * Hero thématique — proportions fixes.
 * Ambiance pilotée par tokens (Contemplation / Lumière).
 */
function Hero({
  title,
  subtitle,
  secondary,
  eyebrow,
  description,
  descriptionNode,
  actions,
  showVisual = true,
  compact = false,
  visual,
  visualImage,
  visualImages,
  visualCaption = "Cabinet",
  visualTitle = "Écoute · présence · chemin",
  className,
}: HeroProps) {
  const themeImages = visualImages
    ? [
        {
          theme: "contemplation" as const,
          ...visualImages.contemplation,
        },
        {
          theme: "lumiere" as const,
          ...visualImages.lumiere,
        },
      ]
    : visualImage
      ? [{ theme: null, ...visualImage }]
      : [];
  return (
    <div className={cn("hero-atmosphere relative overflow-hidden", className)}>
      <div className="hero-starfield absolute inset-0">
        <Starfield density="night" />
      </div>
      <SoftHalo tone="gold" breathe className="-top-32 -left-24 opacity-40" />
      <SoftHalo
        tone="night"
        className="right-[-14%] bottom-[-28%] size-[36rem] opacity-50"
      />

      <Container
        className={cn(
          "relative grid items-center gap-10 py-[var(--section-space)] sm:gap-12 lg:gap-16",
          compact
            ? "min-h-0 max-w-3xl"
            : "min-h-[min(88svh,52rem)] sm:min-h-[min(78vh,52rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
          !showVisual && !visual && "max-w-3xl"
        )}
      >
        <FadeIn className="relative flex max-w-xl flex-col gap-5 lg:max-w-none">
          {eyebrow ? <p className="text-caption">{eyebrow}</p> : null}
          <div className="flex flex-col gap-2">
            <h1 className="text-display hero-title relative text-balance">
              {title}
            </h1>
            {subtitle ? (
              <p className="font-display text-xl tracking-tight text-[color-mix(in_oklch,var(--hero-fg)_80%,transparent)] sm:text-2xl">
                {subtitle}
              </p>
            ) : null}
            {secondary ? (
              <p className="text-caption text-[color:var(--hero-caption)] normal-case tracking-[0.08em]">
                {secondary}
              </p>
            ) : null}
          </div>
          {descriptionNode ? (
            <div className="text-body text-muted-foreground max-w-lg space-y-4 text-pretty">
              {descriptionNode}
            </div>
          ) : description ? (
            <p className="text-body text-muted-foreground max-w-lg text-pretty">
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="flex w-full max-w-md flex-col gap-3 pt-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center [&_a]:w-full sm:[&_a]:w-auto">
              {actions}
            </div>
          ) : null}
        </FadeIn>

        {showVisual ? (
          <FadeIn delay={120} className="relative">
            {visual ? (
              visual
            ) : (
              <div className="hero-panel hero-panel-ring relative mx-auto aspect-[5/4] max-h-[18rem] w-full overflow-hidden rounded-[1.5rem] sm:aspect-[4/5] sm:max-h-[28rem] sm:rounded-[1.75rem]">
                {themeImages.length > 0 ? (
                  <>
                    {themeImages.map((image) => (
                      <Image
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 28rem"
                        data-theme-for={image.theme ?? undefined}
                        className={cn(
                          "object-cover",
                          image.theme
                            ? "theme-image"
                            : undefined,
                          image.objectPosition ?? "object-center"
                        )}
                      />
                    ))}
                    <div
                      aria-hidden
                      className="hero-visual-scrim absolute inset-x-0 bottom-0 h-2/5"
                    />
                  </>
                ) : (
                  <>
                    <div aria-hidden className="hero-panel-fill absolute inset-0" />

                    <div className="hero-starfield absolute inset-0">
                      <Starfield density="night" />
                    </div>

                    <SoftHalo
                      tone="gold"
                      breathe
                      className="top-[20%] left-1/2 size-64 -translate-x-1/2 opacity-45"
                    />
                    <SoftHalo
                      tone="night"
                      className="right-[5%] bottom-[12%] size-48 opacity-40"
                    />

                    <OrbitLine
                      variant="arc"
                      className="animate-soft-drift hero-decor absolute inset-x-[6%] top-[26%] w-[88%]"
                    />
                    <Constellation
                      variant="quiet"
                      className="hero-decor absolute top-[50%] right-[8%] w-[44%] opacity-80"
                    />

                    <Star
                      shape="four"
                      size={9}
                      tone="gold"
                      opacity={0.5}
                      twinkle
                      delay="2s"
                      duration="12s"
                      className="absolute top-[29%] left-[51%] -translate-x-1/2 -translate-y-1/2"
                    />
                  </>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="gold-rule mb-4" />
                  <p className="text-caption hero-visual-caption">{visualCaption}</p>
                  <p className="font-display hero-visual-title mt-2 text-xl tracking-tight">
                    {visualTitle}
                  </p>
                </div>
              </div>
            )}
          </FadeIn>
        ) : null}
      </Container>
    </div>
  );
}

export { Hero };
