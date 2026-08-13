import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button"
import { EducationalCallout } from "@/components/educational/callout"
import type { EducationalBlock } from "@/lib/educational/types"
import { cn } from "@/lib/utils"

type ArticleBlocksProps = {
  blocks: EducationalBlock[]
  className?: string
}

function ArticleBlocks({ blocks, className }: ArticleBlocksProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`

        switch (block.type) {
          case "p":
            return (
              <p
                key={key}
                className="text-body text-muted-foreground max-w-prose text-pretty"
              >
                {block.text}
              </p>
            )
          case "h3":
            return (
              <h3
                key={key}
                id={block.id}
                className="text-h3 text-foreground scroll-mt-28 pt-2"
              >
                {block.text}
              </h3>
            )
          case "ul":
            return (
              <ul
                key={key}
                className="text-body text-muted-foreground max-w-prose list-disc space-y-2 pl-5 marker:text-primary/70"
              >
                {block.items.map((item) => (
                  <li key={item} className="text-pretty pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol
                key={key}
                className="text-body text-muted-foreground max-w-prose list-decimal space-y-2 pl-5 marker:text-primary/70"
              >
                {block.items.map((item) => (
                  <li key={item} className="text-pretty pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            )
          case "callout":
            return (
              <EducationalCallout
                key={key}
                kind={block.kind}
                title={block.title}
                body={block.body}
                className="my-1 max-w-prose"
              />
            )
          case "cta":
            return (
              <div
                key={key}
                className="flex max-w-prose flex-col items-start gap-3 rounded-2xl ring-1 ring-border/40 bg-card/60 px-5 py-5 sm:px-6"
              >
                {block.description ? (
                  <p className="text-small text-muted-foreground text-pretty">
                    {block.description}
                  </p>
                ) : null}
                <Button variant="warm" asChild>
                  <Link href={block.href}>{block.label}</Link>
                </Button>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export { ArticleBlocks }
