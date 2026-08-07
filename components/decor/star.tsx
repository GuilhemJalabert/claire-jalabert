import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export type StarTone = "gold" | "ivory" | "blue";
export type StarShape = "four" | "cross" | "point";

type StarProps = {
  className?: string;
  /** Forme : étoile 4 branches, croix fine, ou point minuscule. */
  shape?: StarShape;
  /** Taille en pixels (environ 4–10). */
  size?: number;
  tone?: StarTone;
  /** Opacité de base (0.15–0.6). */
  opacity?: number;
  twinkle?: boolean;
  delay?: string;
  duration?: string;
  style?: CSSProperties;
};

const toneFill: Record<StarTone, string> = {
  gold: "var(--star-gold)",
  ivory: "var(--star-ivory)",
  blue: "var(--star-blue)",
};

/** Étoile SVG fine — scintillement d’intensité uniquement. */
function Star({
  className,
  shape = "four",
  size = 7,
  tone = "ivory",
  opacity = 0.35,
  twinkle = false,
  delay = "0s",
  duration = "14s",
  style,
}: StarProps) {
  const fill = toneFill[tone];
  const animStyle = {
    opacity,
    "--star-opacity": String(opacity),
    width: size,
    height: size,
    ...(twinkle
      ? {
          animation: `star-twinkle ${duration} ease-in-out infinite`,
          animationDelay: delay,
        }
      : undefined),
    ...style,
  } as CSSProperties;

  if (shape === "point") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 8 8"
        className={cn("pointer-events-none overflow-visible", className)}
        style={animStyle}
      >
        <circle cx="4" cy="4" r="1.1" fill={fill} />
      </svg>
    );
  }

  if (shape === "cross") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className={cn("pointer-events-none overflow-visible", className)}
        style={animStyle}
      >
        <path
          d="M8 1.5 V14.5 M1.5 8 H14.5"
          stroke={fill}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* four — losange à 4 branches ultra fines */
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("pointer-events-none overflow-visible", className)}
      style={animStyle}
    >
      <path
        d="M12 1.5 L13.15 10.85 L22.5 12 L13.15 13.15 L12 22.5 L10.85 13.15 L1.5 12 L10.85 10.85 Z"
        fill={fill}
      />
    </svg>
  );
}

export { Star };
