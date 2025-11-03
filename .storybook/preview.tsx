import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/hooks/useTheme";
import "../src/index.css";
import "../src/styles/theme.css";

const withTheme = (Story, context) => {
  const theme = context.globals.theme || "light";
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.setAttribute("data-theme", theme);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-6">
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  globals: { theme: "light" },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Tema claro/escuro",
      defaultValue: "light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", right: "☀️", title: "Light" },
          { value: "dark", right: "🌙", title: "Dark" },
        ],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: { disable: true },
  },
};

export default preview;
