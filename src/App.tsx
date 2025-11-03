import { Button } from "./components/Button/Button";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen p-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">ui-patterns</h1>
        <ThemeToggle />
      </div>
      <div className="space-x-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}
