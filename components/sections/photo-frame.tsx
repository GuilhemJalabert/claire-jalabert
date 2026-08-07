import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "@/components/sections/media-placeholder";

type PhotoFrameProps = {
  aspect?: "portrait" | "landscape" | "editorial" | "square";
  offset?: "none" | "up" | "down" | "start" | "end";
  label?: string;
  className?: string;
};

/** Cadre photo éditorial — placeholder jusqu’à intégration des images. */
function PhotoFrame({
  aspect = "editorial",
  offset = "none",
  label = "Photo à venir",
  className,
}: PhotoFrameProps) {
  return (
    <MediaPlaceholder
      aspect={aspect}
      offset={offset}
      label={label}
      className={cn("shadow-soft", className)}
    />
  );
}

export { PhotoFrame };
