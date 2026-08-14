"use client"

import { ListIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { EducationalTocItem } from "@/lib/educational/types"
import { cn } from "@/lib/utils"

type ArticleTocProps = {
  items: EducationalTocItem[]
  className?: string
}

function TocLinks({
  items,
  onNavigate,
  variant = "list",
  ariaLabel,
}: {
  items: EducationalTocItem[]
  onNavigate?: () => void
  variant?: "list" | "chips"
  ariaLabel: string
}) {
  if (variant === "chips") {
    return (
      <nav aria-label={ariaLabel}>
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                className="text-small text-muted-foreground hover:text-foreground hover:bg-foreground/8 inline-flex rounded-full px-3 py-1.5 ring-1 ring-border/40 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label={ariaLabel}>
      <ol className="flex flex-col gap-1.5">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              className="text-small text-muted-foreground hover:text-foreground flex gap-2 rounded-md px-2 py-1.5 transition-colors"
            >
              <span className="text-caption text-primary/70 w-5 shrink-0 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-pretty leading-snug">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function ArticleToc({ items, className }: ArticleTocProps) {
  const t = useTranslations("Comprendre")

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <p className="text-caption text-muted-foreground">{t("toc")}</p>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <ListIcon data-icon="inline-start" />
              {t("sections")}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[min(100%,20rem)] bg-background">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-xl tracking-tight">
                {t("toc")}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <TocLinks items={items} ariaLabel={t("tocAria")} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block">
        <p className="text-caption text-muted-foreground mb-3">{t("toc")}</p>
        <TocLinks items={items} variant="chips" ariaLabel={t("tocAria")} />
      </div>
    </div>
  )
}

export { ArticleToc }
