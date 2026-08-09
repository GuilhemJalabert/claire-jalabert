"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
import { browseNav, contactNav, mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function Navbar() {
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
          className="font-display text-[1.35rem] font-medium tracking-[-0.02em] transition-opacity duration-[var(--duration-fast)] hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-0.5">
              {browseNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
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
                        {item.label}
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
            <Link href={contactNav.href}>{contactNav.label}</Link>
          </Button>

          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-inherit hover:bg-white/10 hover:text-inherit lg:hidden [[data-scrolled=true]_&]:hover:bg-muted [[data-scrolled=true]_&]:hover:text-foreground"
                aria-label="Ouvrir le menu"
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
                aria-label="Navigation mobile"
              >
                {mainNav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-[var(--duration-fast)]",
                        active
                          ? "bg-muted text-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6 px-1">
                <Button variant="warm" className="w-full" asChild>
                  <Link href="/#rdv" onClick={() => setOpen(false)}>
                    Prendre rendez-vous
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

export { Navbar };
