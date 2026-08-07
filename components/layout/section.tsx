import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  tone?: "default" | "secondary" | "muted";
  /**
   * Phase narrative (1→5).
   * Contemplation : nuit → lumière.
   * Lumière : lumière → nuit.
   * Piloté uniquement par les tokens CSS.
   */
  atmosphere?: "phase-1" | "phase-2" | "phase-3" | "phase-4" | "phase-5";
  compact?: boolean;
};

const toneClasses = {
  default: "bg-background",
  secondary: "bg-secondary/55",
  muted: "bg-muted/80",
} as const;

const atmosphereClasses = {
  "phase-1": "atmosphere-phase-1",
  "phase-2": "atmosphere-phase-2",
  "phase-3": "atmosphere-phase-3",
  "phase-4": "atmosphere-phase-4",
  "phase-5": "atmosphere-phase-5",
} as const;

function Section({
  className,
  tone = "default",
  atmosphere,
  compact = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        atmosphere ? atmosphereClasses[atmosphere] : toneClasses[tone],
        compact
          ? "py-[var(--section-space-sm)]"
          : "py-[var(--section-space)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export { Section };
