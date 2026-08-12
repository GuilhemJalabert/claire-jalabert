import Image from "next/image";

import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "@/components/sections/media-placeholder";

type ThemePhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type PhotoFrameProps = {
  aspect?: "portrait" | "landscape" | "editorial" | "square";
  offset?: "none" | "up" | "down" | "start" | "end";
  label?: string;
  /** Image réelle — remplace le placeholder. */
  src?: string;
  alt?: string;
  /** Images selon Contemplation (nuit) / Lumière (jour). */
  themeImages?: {
    contemplation: ThemePhoto;
    lumiere: ThemePhoto;
  };
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

/** Cadre photo éditorial — image réelle, duo thématique, ou placeholder. */
function PhotoFrame({
  aspect = "editorial",
  offset = "none",
  label,
  src,
  alt = "",
  themeImages,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28rem",
  objectPosition = "object-center",
  priority = false,
  className,
}: PhotoFrameProps) {
  if (!src && !themeImages) {
    return (
      <MediaPlaceholder
        aspect={aspect}
        offset={offset}
        label={label ?? "Photo à venir"}
        className={cn("shadow-soft", className)}
      />
    );
  }

  const images = themeImages
    ? [
        { theme: "contemplation" as const, ...themeImages.contemplation },
        { theme: "lumiere" as const, ...themeImages.lumiere },
      ]
    : src
      ? [{ theme: null, src, alt, objectPosition }]
      : [];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] ring-1 ring-border/40 sm:rounded-[1.5rem]",
        aspectClass[aspect],
        offsetClass[offset],
        className
      )}
    >
      {images.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          data-theme-for={image.theme ?? undefined}
          className={cn(
            "object-cover",
            image.theme ? "theme-image" : undefined,
            image.objectPosition ?? "object-center"
          )}
        />
      ))}
      {label ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent p-4 sm:p-5">
          <p className="text-caption text-ivory/90 normal-case tracking-wide">
            {label}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export { PhotoFrame };
