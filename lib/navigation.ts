export type NavItem = {
  href: string;
  label: string;
};

/**
 * Navigation principale du site.
 * Contact est exposé à part comme CTA (voir `contactNav`).
 */
export const browseNav: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/tarifs", label: "Tarifs" },
];

export const contactNav: NavItem = {
  href: "/contact",
  label: "Contact",
};

/** Liste complète (footer, sitemap mental). */
export const mainNav: NavItem[] = [...browseNav, contactNav];
