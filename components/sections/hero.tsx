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
  /** Label discret au-dessus du titre. */
  eyebrow?: string;
  description?: string;
  actions?: React.ReactNode;
  showVisual?: boolean;
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
  eyebrow,
  description,
  actions,
  showVisual = true,
  visualCaption = "Cabinet",
  visualTitle = "Écoute · présence · chemin",
  className,
}: HeroProps) {
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

      <Container className="relative grid min-h-[min(78vh,52rem)] items-center gap-12 py-[var(--section-space)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
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
          </div>
          {description ? (
            <p className="text-body text-muted-foreground max-w-lg text-pretty">
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="flex flex-wrap items-center gap-3 pt-2">{actions}</div>
          ) : null}
        </FadeIn>

        {showVisual ? (
          <FadeIn delay={120} className="relative hidden sm:block">
            <div className="hero-panel hero-panel-ring relative aspect-[4/5] max-h-[28rem] w-full overflow-hidden rounded-[1.75rem]">
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

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="gold-rule mb-4" />
                <p className="text-caption hero-visual-caption">{visualCaption}</p>
                <p className="font-display hero-visual-title mt-2 text-xl tracking-tight">
                  {visualTitle}
                </p>
              </div>
            </div>
          </FadeIn>
        ) : null}
      </Container>
    </div>
  );
}

export { Hero };
