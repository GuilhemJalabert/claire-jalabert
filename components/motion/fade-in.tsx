"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type FadeInProps = React.ComponentProps<"div"> & {
  /** Délai avant l’apparition (ms). */
  delay?: number;
  /** Direction du léger déplacement. */
  direction?: "none" | "up";
};

function FadeIn({
  className,
  delay = 0,
  direction = "up",
  children,
  style,
  ...props
}: FadeInProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-fade={direction}
      className={cn("fade-in-target", className)}
      style={
        {
          ...style,
          "--fade-delay": `${delay}ms`,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}

export { FadeIn };
