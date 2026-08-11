import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ExpertiseCardProps = {
  label: string;
  className?: string;
};

/** Badge d’expertise — shadcn Badge, style éditorial. */
function ExpertiseCard({ label, className }: ExpertiseCardProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto min-h-10 rounded-full px-3.5 py-2.5 text-left text-sm leading-snug font-normal tracking-normal normal-case whitespace-normal sm:min-h-0 sm:px-4 sm:py-2 sm:whitespace-nowrap",
        className
      )}
    >
      {label}
    </Badge>
  );
}

export { ExpertiseCard };
