"use client";
import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const THEME_KEY = "theme";

const isTheme = (value: string | null): value is Theme =>
  value === "dark" || value === "light";

const getThemeSnapshot = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_KEY);
  return isTheme(stored) ? stored : "dark";
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
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribe, getThemeSnapshot, () => "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;

    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
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
