"use client";
import { useTheme } from "next-themes";
import { SunIcon } from "../icons/SunIcon"; // Ensure correct import
import { MoonIcon } from "../icons/MoonIcon";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!resolvedTheme) return null;
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
