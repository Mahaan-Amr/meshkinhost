"use client";

import { useEffect } from "react";

type ThemeMode = "light" | "dark";

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const theme = stored === "light" || stored === "dark" ? stored : getSystemTheme();
    document.documentElement.dataset.theme = theme;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const saved = window.localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return;
      document.documentElement.dataset.theme = media.matches ? "dark" : "light";
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return <>{children}</>;
}
