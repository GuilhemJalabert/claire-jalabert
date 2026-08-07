"use client";

import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { themeLabels } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

/**
 * Bascule Contemplation ↔ Lumière — shadcn Button, discret et premium.
 */
function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "contemplation" ? "lumiere" : "contemplation";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Passer en mode ${themeLabels[next]}`}
      title={themeLabels[next]}
      className={cn(
        "text-inherit hover:bg-white/10 hover:text-inherit",
        "[[data-scrolled=true]_&]:hover:bg-muted [[data-scrolled=true]_&]:hover:text-foreground",
        className
      )}
    >
      {theme === "contemplation" ? (
        <SunIcon className="size-[1.125rem] opacity-90" strokeWidth={1.5} />
      ) : (
        <MoonIcon className="size-[1.125rem] opacity-90" strokeWidth={1.5} />
      )}
    </Button>
  );
}

export { ThemeToggle };
