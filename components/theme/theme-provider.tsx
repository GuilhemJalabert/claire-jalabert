"use client";

import * as React from "react";

import {
  applyThemeToDocument,
  isTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const THEME_EVENT = "claire-theme";

function persistTheme(theme: Theme) {
  applyThemeToDocument(theme);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getThemeSnapshot(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  return isTheme(attr) ? attr : "contemplation";
}

function getServerSnapshot(): Theme {
  return "contemplation";
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = React.useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerSnapshot
  );

  const setTheme = React.useCallback((next: Theme) => {
    persistTheme(next);
  }, []);

  const toggleTheme = React.useCallback(() => {
    const current = getThemeSnapshot();
    persistTheme(current === "contemplation" ? "lumiere" : "contemplation");
  }, []);

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé dans un ThemeProvider.");
  }
  return context;
}

export { ThemeProvider, useTheme, ThemeContext };
