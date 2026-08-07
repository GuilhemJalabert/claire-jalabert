import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Star } from "@/components/decor/star";

type QuoteSectionProps = {
  quote: string;
  attribution?: string;
  className?: string;
};

/**
 * Citation éditoriale premium — Cormorant, respiration, or discret.
 */
function QuoteSection({
  quote,
  attribution = "— Signature placeholder",
  className,
}: QuoteSectionProps) {
  return (
    <div className={cn("relative", className)}>
      <Container className="relative flex flex-col items-center py-[var(--section-space)] text-center">
        <FadeIn className="flex max-w-3xl flex-col items-center gap-8">
          <Star
            shape="four"
            size={8}
            tone="gold"
            opacity={0.4}
            twinkle
            delay="4s"
            duration="16s"
          />
          <blockquote className="font-display text-foreground text-[1.65rem] leading-[1.35] font-medium tracking-[-0.02em] text-balance sm:text-3xl md:text-4xl md:leading-[1.3]">
            {quote}
          </blockquote>
          <div className="gold-rule" />
          <p className="text-small text-muted-foreground">{attribution}</p>
        </FadeIn>
      </Container>
    </div>
  );
}

export { QuoteSection };
