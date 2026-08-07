import { cn } from "@/lib/utils";
import { Star, type StarShape, type StarTone } from "@/components/decor/star";

type StarDef = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  shape: StarShape;
  tone: StarTone;
  twinkle?: boolean;
  delay?: string;
  duration?: string;
};

/** Peu d’étoiles, positions irrégulières — nuit profonde. */
const NIGHT_STARS: StarDef[] = [
  { x: 8, y: 12, size: 8, opacity: 0.42, shape: "four", tone: "gold", twinkle: true, delay: "1.5s", duration: "13s" },
  { x: 18, y: 28, size: 4, opacity: 0.22, shape: "point", tone: "blue" },
  { x: 29, y: 8, size: 6, opacity: 0.32, shape: "cross", tone: "ivory", twinkle: true, delay: "6s", duration: "16s" },
  { x: 41, y: 42, size: 5, opacity: 0.2, shape: "point", tone: "ivory" },
  { x: 55, y: 16, size: 9, opacity: 0.38, shape: "four", tone: "ivory", twinkle: true, delay: "3s", duration: "11s" },
  { x: 67, y: 55, size: 5, opacity: 0.18, shape: "cross", tone: "blue" },
  { x: 78, y: 22, size: 7, opacity: 0.35, shape: "four", tone: "gold", twinkle: true, delay: "9s", duration: "18s" },
  { x: 88, y: 48, size: 4, opacity: 0.2, shape: "point", tone: "ivory" },
  { x: 12, y: 68, size: 6, opacity: 0.25, shape: "cross", tone: "ivory" },
  { x: 36, y: 78, size: 8, opacity: 0.3, shape: "four", tone: "blue", twinkle: true, delay: "12s", duration: "15s" },
  { x: 72, y: 82, size: 5, opacity: 0.18, shape: "point", tone: "gold" },
  { x: 92, y: 72, size: 6, opacity: 0.28, shape: "four", tone: "ivory" },
];

const DUSK_STARS: StarDef[] = [
  { x: 14, y: 18, size: 7, opacity: 0.28, shape: "four", tone: "gold", twinkle: true, delay: "2s", duration: "14s" },
  { x: 38, y: 12, size: 4, opacity: 0.16, shape: "point", tone: "ivory" },
  { x: 62, y: 32, size: 6, opacity: 0.22, shape: "cross", tone: "blue" },
  { x: 82, y: 20, size: 5, opacity: 0.2, shape: "four", tone: "ivory", twinkle: true, delay: "8s", duration: "17s" },
  { x: 24, y: 58, size: 5, opacity: 0.15, shape: "point", tone: "gold" },
  { x: 70, y: 70, size: 7, opacity: 0.24, shape: "four", tone: "ivory" },
];

const SPARSE_STARS: StarDef[] = [
  { x: 20, y: 25, size: 6, opacity: 0.2, shape: "four", tone: "gold", twinkle: true, delay: "4s", duration: "15s" },
  { x: 68, y: 18, size: 4, opacity: 0.14, shape: "point", tone: "ivory" },
  { x: 48, y: 62, size: 5, opacity: 0.16, shape: "cross", tone: "blue" },
  { x: 85, y: 55, size: 6, opacity: 0.18, shape: "four", tone: "ivory" },
];

type StarfieldProps = {
  className?: string;
  /** night = densité contemplative, dusk = transition, sparse = presque absent. */
  density?: "night" | "dusk" | "sparse";
};

function Starfield({ className, density = "night" }: StarfieldProps) {
  const stars =
    density === "dusk"
      ? DUSK_STARS
      : density === "sparse"
        ? SPARSE_STARS
        : NIGHT_STARS;

  return (
    <div
      aria-hidden
      className={cn(
        "starfield-layer pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {stars.map((star, i) => (
        <Star
          key={`${star.x}-${star.y}-${i}`}
          shape={star.shape}
          size={star.size}
          tone={star.tone}
          opacity={star.opacity}
          twinkle={star.twinkle}
          delay={star.delay}
          duration={star.duration}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

export { Starfield };
