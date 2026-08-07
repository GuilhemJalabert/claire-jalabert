import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  /** Format de la zone photo. */
  aspect?: "portrait" | "landscape" | "editorial" | "square";
  /** Décalage léger pour composition asymétrique. */
  offset?: "none" | "up" | "down" | "start" | "end";
  label?: string;
  className?: string;
};

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  editorial: "aspect-[4/5] sm:aspect-[5/6]",
  square: "aspect-square",
} as const;

const offsetClass = {
  none: "",
  up: "-translate-y-2 sm:-translate-y-4",
  down: "translate-y-2 sm:translate-y-6",
  start: "-translate-x-1 sm:-translate-x-3",
  end: "translate-x-1 sm:translate-x-3",
} as const;

/**
 * Zone photo sobre — placeholder éditorial, sans image réelle.
 */
function MediaPlaceholder({
  aspect = "editorial",
  offset = "none",
  label = "Image",
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.5rem] ring-1 ring-border/40",
        "bg-[linear-gradient(155deg,color-mix(in_oklch,var(--secondary)_55%,var(--card)),color-mix(in_oklch,var(--muted)_70%,var(--secondary)))]",
        aspectClass[aspect],
        offsetClass[offset],
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_40%_30%,color-mix(in_oklch,var(--luminous)_14%,transparent),transparent_70%)] opacity-60"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <p className="text-caption text-muted-foreground/80 normal-case tracking-wide">
          {label}
        </p>
      </div>
    </div>
  );
}

export { MediaPlaceholder };
