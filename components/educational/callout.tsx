import { InfoIcon, LightbulbIcon, CircleAlertIcon, HelpCircleIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import type { EducationalCalloutKind } from "@/lib/educational/types"

const kindConfig: Record<
  EducationalCalloutKind,
  { icon: typeof InfoIcon; className: string }
> = {
  takeaway: {
    icon: LightbulbIcon,
    className:
      "border-[color:var(--atm-panel-border,var(--border))] bg-[color:var(--atm-panel,var(--card))] text-[color:var(--atm-panel-fg,var(--card-foreground))]",
  },
  myth: {
    icon: CircleAlertIcon,
    className:
      "border-primary/25 bg-[color:var(--atm-panel,var(--card))] text-[color:var(--atm-panel-fg,var(--card-foreground))]",
  },
  consult: {
    icon: HelpCircleIcon,
    className:
      "border-[color:var(--atm-panel-border,var(--border))] bg-[color:var(--atm-panel-soft,var(--muted))] text-[color:var(--atm-panel-fg,var(--card-foreground))]",
  },
  disclaimer: {
    icon: InfoIcon,
    className:
      "border-[color:var(--atm-panel-border,var(--border))] bg-[color:var(--atm-panel,var(--card))] text-[color:var(--atm-panel-fg,var(--card-foreground))]",
  },
}

type EducationalCalloutProps = {
  kind: EducationalCalloutKind
  title: string
  body: string
  className?: string
}

function EducationalCallout({
  kind,
  title,
  body,
  className,
}: EducationalCalloutProps) {
  const config = kindConfig[kind]
  const Icon = config.icon

  return (
    <Alert
      className={cn("px-4 py-3.5 sm:px-5 sm:py-4", config.className, className)}
    >
      <Icon
        strokeWidth={1.5}
        className="text-[color:var(--atm-panel-fg,var(--card-foreground))]"
      />
      <AlertTitle className="font-display text-base tracking-tight text-[color:var(--atm-panel-fg,var(--card-foreground))] sm:text-lg">
        {title}
      </AlertTitle>
      <AlertDescription className="text-pretty leading-relaxed text-[color:var(--atm-panel-muted,var(--card-muted-foreground))]">
        {body}
      </AlertDescription>
    </Alert>
  )
}

export { EducationalCallout }
