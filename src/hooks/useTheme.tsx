import { useEffect, useState } from "react";

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
    localStorage.setItem("ui-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setThemeState((prev) => (prev === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
}
