import React, { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ui-theme");
      return (saved as Theme) || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ui-theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
}

/**
 * ThemeProvider minimalista:
 * - inicializa o tema via useTheme()
 * - disponibiliza markup para envolver a app
 * (Se quiseres, depois evoluímos para Context.)
 */
export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  useTheme(); // apenas inicializa/efetua side-effects (localStorage + class html)
  return <>{children}</>;
};
