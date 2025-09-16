"use client";

import { createContext, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void; // defining type as : setTheme is a function , that will recieve a 'theme' as an argument of type 'Theme' and setTheme is returning void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // at first the context is undefined i.e empty

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light"); // This state will always be of type Theme . The <Theme> is TypeScript syntax.
  const [mounted, setMounted] = useState(false);

  //update the theme based on the mounted state
  const setTheme = (newTheme: Theme) => {
    setMounted(true);
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Toggle between light and dark themes

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    //tells TypeScript: “savedTheme can be either Theme type ("light" or "dark") or null.”

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;
    setThemeState(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  // prevent flash of wrong theme on initial render
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// use custom hook to access theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}



