import { cn } from "@/lib/utils";

type SoftHaloProps = {
  className?: string;
  tone?: "gold" | "terracotta" | "ivory" | "night" | "dusk";
  breathe?: boolean;
};

const toneClass = {
  gold: "soft-halo-gold",
  terracotta: "soft-halo-terracotta",
  ivory: "soft-halo-ivory",
  night: "soft-halo-night",
  dusk: "soft-halo-dusk",
} as const;

/** Halo extrêmement diffus — lumière naturelle. */
function SoftHalo({
  className,
  tone = "gold",
  breathe = false,
}: SoftHaloProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute size-[min(32rem,85vw)] rounded-full blur-3xl",
        toneClass[tone],
        breathe && "animate-halo-breathe",
        className
      )}
    />
  );
}

export { SoftHalo };
