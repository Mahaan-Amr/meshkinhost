"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <button
      type="button"
      className="btn-ghost glass-pill compact-toggle text-xs"
      onClick={() => setLang(lang === "en" ? "fa" : "en")}
    >
      {lang === "en" ? "FA" : "EN"}
    </button>
  );
}
