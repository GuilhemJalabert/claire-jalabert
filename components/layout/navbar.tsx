"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
import { Link, usePathname } from "@/i18n/navigation";
import {
  browseNav,
  contactNav,
  isNavGroup,
  type NavGroup,
  type NavItem,
} from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Navbar() {
  const t = useTranslations("Nav");
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const headerRef = React.useRef<HTMLElement>(null);
  const isHome = pathname === "/";

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      const scrolled = !isHome || window.scrollY > 24;
      header.dataset.scrolled = scrolled ? "true" : "false";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      ref={headerRef}
      data-scrolled={isHome ? "false" : "true"}
      className={cn(
        "site-nav sticky top-0 z-40 border-b py-5",
        "data-[scrolled=true]:py-3"
      )}
    >
      <Container className="flex items-center justify-between gap-4 lg:gap-6">
        <Link
          href="/"
          className="font-display max-w-[11.5rem] truncate text-[1.2rem] font-medium tracking-[-0.02em] transition-opacity duration-[var(--duration-fast)] hover:opacity-80 sm:max-w-none sm:text-[1.35rem]"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-0.5">
              {browseNav.map((item) => {
                if (isNavGroup(item)) {
                  return (
                    <ComprendreDesktopItem
                      key={item.href}
                      item={item}
                      pathname={pathname}
                      t={t}
                    />
                  );
                }

                const active = isActivePath(pathname, item.href);
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "rounded-full px-3.5 py-2 text-sm font-medium transition-opacity duration-[var(--duration-fast)]",
                          active ? "opacity-100" : "opacity-70 hover:opacity-100"
                        )}
                      >
                        {t(item.labelKey)}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            size="sm"
            variant="warm"
            asChild
            className="hidden sm:inline-flex"
          >
            <Link href={contactNav.href}>{t(contactNav.labelKey)}</Link>
          </Button>

          <React.Suspense fallback={null}>
            <LocaleSwitcher />
          </React.Suspense>
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-inherit hover:bg-white/10 hover:text-inherit lg:hidden [[data-scrolled=true]_&]:hover:bg-muted [[data-scrolled=true]_&]:hover:text-foreground"
                aria-label={t("openMenu")}
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] bg-background"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-foreground text-left text-xl tracking-tight">
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-8 flex flex-col gap-1"
                aria-label={t("mobileNav")}
              >
                {browseNav.map((item) => {
                  if (isNavGroup(item)) {
                    return (
                      <MobileNavGroup
                        key={item.href}
                        item={item}
                        pathname={pathname}
                        onNavigate={() => setOpen(false)}
                        t={t}
                      />
                    );
                  }
                  return (
                    <MobileNavLink
                      key={item.href}
                      item={item}
                      pathname={pathname}
                      onNavigate={() => setOpen(false)}
                      t={t}
                    />
                  );
                })}
                <MobileNavLink
                  item={contactNav}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                  t={t}
                />
              </nav>
              <div className="mt-6 px-1">
                <Button variant="warm" className="w-full" asChild>
                  <Link href="/#rdv" onClick={() => setOpen(false)}>
                    {t("bookAppointment")}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

function ComprendreDesktopItem({
  item,
  pathname,
  t,
}: {
  item: NavGroup;
  pathname: string;
  t: ReturnType<typeof useTranslations<"Nav">>;
}) {
  const active = isActivePath(pathname, item.href);

  return (
    <NavigationMenuItem>
      <div className="flex items-center">
        <NavigationMenuLink asChild>
          <Link
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={cn(
              "rounded-full px-3.5 py-2 text-sm font-medium transition-opacity duration-[var(--duration-fast)]",
              active ? "opacity-100" : "opacity-70 hover:opacity-100"
            )}
          >
            {t(item.labelKey)}
          </Link>
        </NavigationMenuLink>
        <NavigationMenuTrigger
          aria-label={t("subpagesUnderstand")}
          className={cn(
            "size-8 rounded-full bg-transparent px-0 hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent",
            active ? "opacity-100" : "opacity-70 hover:opacity-100"
          )}
        />
      </div>
      <NavigationMenuContent className="min-w-[18rem] p-2">
        <ul className="flex flex-col gap-0.5">
          <li>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium"
              >
                {t("understandOverview")}
              </Link>
            </NavigationMenuLink>
          </li>
          {item.children.map((child) => (
            <li key={child.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={child.href}
                  aria-current={
                    isActivePath(pathname, child.href) ? "page" : undefined
                  }
                  className="rounded-lg px-3 py-2.5 text-sm"
                >
                  {t(child.labelKey)}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function MobileNavLink({
  item,
  pathname,
  onNavigate,
  t,
  indent = false,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
  t: ReturnType<typeof useTranslations<"Nav">>;
  indent?: boolean;
}) {
  const active = isActivePath(pathname, item.href);
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-[var(--duration-fast)]",
        indent && "py-2.5 pl-7 text-sm",
        active ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
      )}
    >
      {t(item.labelKey)}
    </Link>
  );
}

function MobileNavGroup({
  item,
  pathname,
  onNavigate,
  t,
}: {
  item: NavGroup;
  pathname: string;
  onNavigate: () => void;
  t: ReturnType<typeof useTranslations<"Nav">>;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <MobileNavLink
        item={item}
        pathname={pathname}
        onNavigate={onNavigate}
        t={t}
      />
      {item.children.map((child) => (
        <MobileNavLink
          key={child.href}
          item={child}
          pathname={pathname}
          onNavigate={onNavigate}
          t={t}
          indent
        />
      ))}
    </div>
  );
}

export { Navbar };
