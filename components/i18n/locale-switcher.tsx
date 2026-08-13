"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LocaleFlag } from "@/components/i18n/locale-flag";
import { getPathname, usePathname } from "@/i18n/navigation";
import {
  localeNames,
  locales,
  type AppLocale,
} from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

function persistLocaleCookie(locale: AppLocale) {
  // Sans ça, le middleware garde NEXT_LOCALE=en et renvoie / → /en.
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const [desktopOpen, setDesktopOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!desktopOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setDesktopOpen(false);
      }
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [desktopOpen]);

  const switchLocale = (next: AppLocale) => {
    if (next === locale) {
      setOpen(false);
      setDesktopOpen(false);
      return;
    }

    persistLocaleCookie(next);
    const query = searchParams.toString();
    const path = getPathname({ locale: next, href: pathname });
    window.location.assign(query ? `${path}?${query}` : path);
  };

  return (
    <>
      <div ref={rootRef} className={cn("relative hidden sm:block", className)}>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-haspopup="listbox"
          aria-expanded={desktopOpen}
          aria-label={t("label")}
          onClick={() => setDesktopOpen((value) => !value)}
          className="gap-1.5 px-2.5 text-inherit hover:bg-white/10 hover:text-inherit [[data-scrolled=true]_&]:hover:bg-muted [[data-scrolled=true]_&]:hover:text-foreground"
        >
          <LocaleFlag locale={locale} />
          <span className="text-xs font-medium tracking-wide uppercase">
            {locale}
          </span>
          <ChevronDownIcon
            className={cn(
              "size-3.5 opacity-70 transition-transform",
              desktopOpen && "rotate-180"
            )}
          />
        </Button>

        {desktopOpen ? (
          <div
            role="listbox"
            aria-label={t("label")}
            className="absolute right-0 z-50 mt-2 min-w-[12.5rem] overflow-hidden rounded-xl bg-popover text-popover-foreground shadow-elevated ring-1 ring-border/50"
          >
            <p className="text-caption text-muted-foreground border-b border-border/40 px-3 py-2 normal-case tracking-normal">
              {t("label")}
            </p>
            <ul className="flex flex-col p-1">
              {locales.map((item) => {
                const active = item === locale;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => switchLocale(item)}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors",
                        active
                          ? "bg-muted text-foreground"
                          : "text-foreground hover:bg-muted/70"
                      )}
                    >
                      <LocaleFlag locale={item} />
                      <span className="flex-1">{localeNames[item]}</span>
                      {active ? (
                        <CheckIcon className="size-3.5 opacity-70" />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t("label")}
            className="text-inherit hover:bg-white/10 hover:text-inherit sm:hidden [[data-scrolled=true]_&]:hover:bg-muted [[data-scrolled=true]_&]:hover:text-foreground"
          >
            <LocaleFlag locale={locale} className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[min(100%,18rem)] bg-background">
          <SheetHeader>
            <SheetTitle className="font-display text-left text-xl tracking-tight">
              {t("label")}
            </SheetTitle>
          </SheetHeader>
          <ul className="mt-6 flex flex-col gap-1">
            {locales.map((item) => {
              const active = item === locale;
              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => switchLocale(item)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-base font-medium transition-colors",
                      active
                        ? "bg-muted text-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <LocaleFlag locale={item} className="size-5" />
                    <span className="flex-1">{localeNames[item]}</span>
                    {active ? <CheckIcon className="size-4 opacity-70" /> : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

export { LocaleSwitcher };
