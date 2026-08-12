export type NavItem = {
  href: string;
  label: string;
};

export type NavGroup = {
  label: string;
  href: string;
  children: NavItem[];
};

/**
 * Navigation principale du site.
 * Contact est exposé à part comme CTA (voir `contactNav`).
 */
export const browseNav: Array<NavItem | NavGroup> = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/accompagnements", label: "Accompagnements" },
  {
    label: "Comprendre",
    href: "/comprendre",
    children: [
      {
        href: "/comprendre/tsa",
        label: "Trouble du spectre de l’autisme",
      },
      {
        href: "/comprendre/asperger",
        label: "Syndrome d’Asperger",
      },
      {
        href: "/comprendre/hpi",
        label: "Haut Potentiel Intellectuel",
      },
      {
        href: "/comprendre/autres-reperes",
        label: "Autres repères & accompagnements",
      },
    ],
  },
  { href: "/tarifs", label: "Tarifs" },
];

export const contactNav: NavItem = {
  href: "/contact",
  label: "Contact",
};

function isNavGroup(item: NavItem | NavGroup): item is NavGroup {
  return "children" in item;
}

/** Liste plate pour footer / sheet mobile. */
export const mainNav: NavItem[] = [
  ...browseNav.flatMap((item) =>
    isNavGroup(item)
      ? [{ href: item.href, label: item.label }, ...item.children]
      : [item],
  ),
  contactNav,
];

export { isNavGroup };
