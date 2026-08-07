import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  /** Largeur resserrée pour contenus éditoriaux. */
  narrow?: boolean;
};

function Container({
  className,
  narrow = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 md:px-8 lg:px-10",
        narrow ? "max-w-[var(--content-narrow)]" : "max-w-[var(--content-max)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
