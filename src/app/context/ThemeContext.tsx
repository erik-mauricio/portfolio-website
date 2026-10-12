"use client";
import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "oxford" | "sand";
const THEME_KEY = "theme";

const isTheme = (value: string | null): value is Theme =>
  value === "oxford" || value === "sand";

const getThemeSnapshot = (): Theme => {
  if (typeof window === "undefined") return "oxford";
  const stored = window.localStorage.getItem(THEME_KEY);
  return isTheme(stored) ? stored : "oxford";
};

const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};

  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_KEY) callback();
  };
  const onThemeChange = () => callback();

  window.addEventListener("storage", onStorage);
  window.addEventListener("theme-change", onThemeChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("theme-change", onThemeChange);
  };
};

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "oxford",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribe, getThemeSnapshot, () => "oxford");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;

    const nextTheme: Theme = theme === "oxford" ? "sand" : "oxford";
    window.localStorage.setItem(THEME_KEY, nextTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
