import Link from "next/link";

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
}

function RelatedArticleCard({
  href,
  title,
  description,
  className,
}: RelatedArticleCardProps) {
  return (
    <Card variant="glass" className={className}>
      <CardHeader className="gap-3">
        <CardTitle className="font-display text-xl tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-pretty">{description}</CardDescription>
        <Button variant="secondary" size="sm" asChild className="mt-1 w-fit">
          <Link href={href}>Lire le dossier</Link>
        </Button>
      </CardHeader>
    </Card>
  )
}

export { RelatedArticleCard }
