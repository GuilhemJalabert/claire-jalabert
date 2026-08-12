import type { EducationalSource } from "@/lib/educational/types"

type SourceListProps = {
  sources: EducationalSource[]
  className?: string
}

function SourceList({ sources, className }: SourceListProps) {
  if (sources.length === 0) return null

  return (
    <ul className={className}>
      {sources.map((source) => (
        <li key={source.label} className="text-small text-muted-foreground">
          {source.href ? (
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-continue font-medium"
            >
              {source.label}
            </a>
          ) : (
            <span className="font-medium text-foreground/85">{source.label}</span>
          )}
          {source.detail ? (
            <span className="text-muted-foreground"> — {source.detail}</span>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export { SourceList }
