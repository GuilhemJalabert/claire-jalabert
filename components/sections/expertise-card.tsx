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
        "rounded-full px-4 py-2 text-sm font-normal tracking-normal normal-case",
        className
      )}
    >
      {label}
    </Badge>
  );
}

export { ExpertiseCard };
