import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-pressed={theme === "dark"}
      aria-label={`Mudar para tema ${next}`}
      onClick={toggleTheme}
      className="px-3 py-2 rounded border bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
