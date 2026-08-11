import Image from "next/image";

import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "@/components/sections/media-placeholder";

type PhotoFrameProps = {
  aspect?: "portrait" | "landscape" | "editorial" | "square";
  offset?: "none" | "up" | "down" | "start" | "end";
  label?: string;
  /** Image réelle — remplace le placeholder. */
  src?: string;
  alt?: string;
  sizes?: string;
  /** Position object-cover (ex. object-center). */
  objectPosition?: string;
  priority?: boolean;
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

/** Cadre photo éditorial — image réelle ou placeholder. */
function PhotoFrame({
  aspect = "editorial",
  offset = "none",
  label = "Photo à venir",
  src,
  alt = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28rem",
  objectPosition = "object-center",
  priority = false,
  className,
}: PhotoFrameProps) {
  if (!src) {
    return (
      <MediaPlaceholder
        aspect={aspect}
        offset={offset}
        label={label}
        className={cn("shadow-soft", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] ring-1 ring-border/40 sm:rounded-[1.5rem]",
        aspectClass[aspect],
        offsetClass[offset],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", objectPosition)}
      />
    </div>
  );
}

export { PhotoFrame };
