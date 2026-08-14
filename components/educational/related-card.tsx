import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { EducationalRelated } from "@/lib/educational/types"

type RelatedArticleCardProps = EducationalRelated & {
  className?: string
  readLabel: string
}

function RelatedArticleCard({
  href,
  title,
  description,
  className,
  readLabel,
}: RelatedArticleCardProps) {
  return (
    <Card variant="glass" className={className}>
      <CardHeader className="gap-3">
        <CardTitle className="font-display text-xl tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-pretty">{description}</CardDescription>
        <Button variant="secondary" size="sm" asChild className="mt-1 w-fit">
          <Link href={href}>{readLabel}</Link>
        </Button>
      </CardHeader>
    </Card>
  )
}

export { RelatedArticleCard }
