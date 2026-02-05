"use client";

import React from "react";

export type Language = "en" | "fa";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLang,
  children
}: {
  initialLang: string;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = React.useState<Language>(
    initialLang === "fa" ? "fa" : "en"
  );

  const setLang = React.useCallback((next: Language) => {
    setLangState(next);
    if (typeof document !== "undefined") {
      document.cookie = `meshkin_lang=${next}; path=/; max-age=31536000`;
      document.documentElement.lang = next;
      document.documentElement.setAttribute("data-dir", next === "fa" ? "rtl" : "ltr");
      if (next === "fa") {
        document.documentElement.classList.add("font-farsi");
      } else {
        document.documentElement.classList.remove("font-farsi");
      }
      try {
        window.localStorage.setItem("meshkin_lang", next);
      } catch {
        // ignore
      }
    }
  }, []);

  React.useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("meshkin_lang") : null;
    if (stored === "fa" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-dir", lang === "fa" ? "rtl" : "ltr");
      if (lang === "fa") {
        document.documentElement.classList.add("font-farsi");
      } else {
        document.documentElement.classList.remove("font-farsi");
      }
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}