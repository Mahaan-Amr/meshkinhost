"use client";

import { useLanguage } from "@/components/language-provider";

export function BilingualText({
  en,
  fa,
  className
}: {
  en: string;
  fa: string;
  className?: string;
}) {
  const { lang } = useLanguage();
  return <span className={className}>{lang === "fa" ? fa : en}</span>;
}