export type NavItem = {
  href: string;
  /** Clé de traduction dans le namespace Nav */
  labelKey:
    | "home"
    | "about"
    | "accompaniments"
    | "understand"
    | "tsa"
    | "asperger"
    | "hpi"
    | "otherMarkers"
    | "pricing"
    | "contact";
};

export type NavGroup = {
  labelKey: NavItem["labelKey"];
  href: string;
  children: NavItem[];
};

/**
 * Navigation principale du site.
 * Contact est exposé à part comme CTA (voir `contactNav`).
 */
export const browseNav: Array<NavItem | NavGroup> = [
  { href: "/", labelKey: "home" },
  { href: "/a-propos", labelKey: "about" },
  { href: "/accompagnements", labelKey: "accompaniments" },
  {
    labelKey: "understand",
    href: "/comprendre",
    children: [
      { href: "/comprendre/tsa", labelKey: "tsa" },
      { href: "/comprendre/asperger", labelKey: "asperger" },
      { href: "/comprendre/hpi", labelKey: "hpi" },
      { href: "/comprendre/autres-reperes", labelKey: "otherMarkers" },
    ],
  },
  { href: "/tarifs", labelKey: "pricing" },
];

export const contactNav: NavItem = {
  href: "/contact",
  labelKey: "contact",
};

function isNavGroup(item: NavItem | NavGroup): item is NavGroup {
  return "children" in item;
}

/** Liste plate pour footer / sheet mobile. */
export const mainNav: NavItem[] = [
  ...browseNav.flatMap((item) =>
    isNavGroup(item)
      ? [{ href: item.href, labelKey: item.labelKey }, ...item.children]
      : [item],
  ),
  contactNav,
];

export { isNavGroup };
