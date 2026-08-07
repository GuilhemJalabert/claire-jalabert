import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AudienceCardProps = {
  title: string;
  description: string;
  className?: string;
  variant?: "soft" | "elevated" | "interactive" | "default";
};

/** Carte public accompagné — basée sur shadcn Card. */
function AudienceCard({
  title,
  description,
  className,
  variant = "soft",
}: AudienceCardProps) {
  return (
    <Card variant={variant} className={cn("h-full", className)}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-pretty">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export { AudienceCard };
