"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { themeLabels } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

function ThemeToggle({ className }: ThemeToggleProps) {
  const t = useTranslations("Common");
  const { theme, toggleTheme } = useTheme();
  const next = theme === "contemplation" ? "lumiere" : "contemplation";
  const label = t("switchTheme", { theme: themeLabels[next] });

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
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
