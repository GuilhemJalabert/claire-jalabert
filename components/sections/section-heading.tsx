import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const titleClass =
    Tag === "h1" ? "text-h1" : Tag === "h3" ? "text-h3" : "text-h2";

  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-caption text-primary/80">{eyebrow}</p>
      ) : null}
      <Tag className={cn(titleClass, "text-foreground text-balance")}>
        {title}
      </Tag>
      {description ? (
        <p className="text-body text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
