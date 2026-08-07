import { cn } from "@/lib/utils";

type ConstellationProps = {
  className?: string;
  variant?: "sparse" | "trail" | "quiet";
};

/**
 * Constellation raffinée — traits fins + micro-étoiles (pas de gros points).
 */
function Constellation({
  className,
  variant = "sparse",
}: ConstellationProps) {
  if (variant === "trail") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 280 120"
        fill="none"
        className={cn("pointer-events-none text-current", className)}
      >
        <path
          d="M28 86 C 58 58, 72 48, 98 44 C 128 39, 152 52, 178 36 C 198 24, 228 42, 252 58"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.35"
        />
        {/* Micro 4-branches */}
        <path
          d="M98 44 L98.55 41.8 L100.75 41.25 L98.55 40.7 L98 38.5 L97.45 40.7 L95.25 41.25 L97.45 41.8 Z"
          fill="var(--star-gold)"
          opacity="0.55"
        />
        <path
          d="M178 36 L178.4 34.4 L180 34 L178.4 33.6 L178 32 L177.6 33.6 L176 34 L177.6 34.4 Z"
          fill="currentColor"
          opacity="0.4"
        />
        <circle cx="28" cy="86" r="0.7" fill="currentColor" opacity="0.35" />
        <circle cx="252" cy="58" r="0.65" fill="currentColor" opacity="0.3" />
        <circle cx="140" cy="48" r="0.5" fill="currentColor" opacity="0.22" />
      </svg>
    );
  }

  if (variant === "quiet") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 200 80"
        fill="none"
        className={cn("pointer-events-none text-current", className)}
      >
        <path
          d="M32 52 C 52 36, 68 30, 88 34 C 108 38, 122 28, 148 36"
          stroke="currentColor"
          strokeWidth="0.55"
          strokeLinecap="round"
          opacity="0.32"
        />
        <path
          d="M88 34 L88.5 31.9 L90.6 31.4 L88.5 30.9 L88 28.8 L87.5 30.9 L85.4 31.4 L87.5 31.9 Z"
          fill="var(--star-gold)"
          opacity="0.5"
        />
        <circle cx="32" cy="52" r="0.65" fill="currentColor" opacity="0.3" />
        <circle cx="148" cy="36" r="0.6" fill="currentColor" opacity="0.28" />
        <circle cx="170" cy="54" r="0.45" fill="currentColor" opacity="0.18" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 240 160"
      fill="none"
      className={cn("pointer-events-none text-current", className)}
    >
      <path
        d="M52 112 C 72 78, 88 52, 108 48 C 132 43, 152 62, 172 72 C 186 79, 198 98, 208 108"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M108 48 L108.7 45.2 L111.5 44.5 L108.7 43.8 L108 41 L107.3 43.8 L104.5 44.5 L107.3 45.2 Z"
        fill="var(--star-gold)"
        opacity="0.55"
      />
      <path
        d="M172 72 L172.45 70.3 L174.15 69.85 L172.45 69.4 L172 67.7 L171.55 69.4 L169.85 69.85 L171.55 70.3 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <circle cx="52" cy="112" r="0.65" fill="currentColor" opacity="0.28" />
      <circle cx="208" cy="108" r="0.55" fill="currentColor" opacity="0.25" />
      <circle cx="140" cy="58" r="0.45" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

export { Constellation };
