import { cn } from "@/lib/utils";

type OrbitLineProps = {
  className?: string;
  variant?: "arc" | "path" | "horizon";
};

const paths = {
  arc: "M20 150 C 70 80, 140 40, 210 55 C 270 68, 320 120, 380 100",
  path: "M24 155 C 90 135, 120 65, 190 72 C 260 80, 300 145, 376 115",
  horizon: "M12 118 C 90 102, 170 128, 250 98 C 310 76, 350 88, 388 82",
} as const;

/** Trajectoire organique — trait fin, micro-étoile dorée (pas de gros points). */
function OrbitLine({ className, variant = "arc" }: OrbitLineProps) {
  const starX = variant === "horizon" ? 250 : variant === "path" ? 190 : 210;
  const starY = variant === "horizon" ? 98 : variant === "path" ? 72 : 55;

  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      fill="none"
      className={cn("pointer-events-none text-current", className)}
    >
      <path
        d={paths[variant]}
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d={`M${starX} ${starY - 4} L${starX + 0.9} ${starY - 0.9} L${starX + 4} ${starY} L${starX + 0.9} ${starY + 0.9} L${starX} ${starY + 4} L${starX - 0.9} ${starY + 0.9} L${starX - 4} ${starY} L${starX - 0.9} ${starY - 0.9} Z`}
        fill="var(--star-gold)"
        opacity="0.55"
      />
    </svg>
  );
}

export { OrbitLine };
