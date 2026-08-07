export const THEME_STORAGE_KEY = "claire-theme";

export const themes = ["contemplation", "lumiere"] as const;

export type Theme = (typeof themes)[number];

export function isTheme(value: unknown): value is Theme {
  return value === "contemplation" || value === "lumiere";
}

/** Préférence système : sombre → Contemplation, clair → Lumière. */
export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "contemplation";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "contemplation"
    : "lumiere";
}

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyThemeToDocument(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export const themeLabels: Record<Theme, string> = {
  contemplation: "Contemplation",
  lumiere: "Lumière",
};
