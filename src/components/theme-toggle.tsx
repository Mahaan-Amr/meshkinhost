"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const next = stored === "light" || stored === "dark" ? stored : getSystemTheme();
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <button type="button" onClick={toggle} className="btn-ghost glass-pill compact-toggle text-xs">
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
