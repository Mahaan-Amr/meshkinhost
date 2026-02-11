import type { Language } from "@/components/language-provider";

export function t(lang: Language, en: string, fa: string) {
  return lang === "fa" ? fa : en;
}

export function formatPrice(value: number, currency: string, lang: Language) {
  const formatter = new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US", {
    style: "currency",
    currency
  });
  return formatter.format(value);
}