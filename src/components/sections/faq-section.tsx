"use client";
import { Faq } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

export function FaqSection({ items }: { items: Faq[] }) {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="section-heading">{lang === "fa" ? "سوالات متداول" : "FAQ"}</h2>
        <p className="section-subtitle">
          {lang === "fa" ? "پاسخ به سوالات رایج." : "Answers to the most common questions."}
        </p>
        <div className="mt-10 grid gap-4">
          {items.map((faq) => (
            <details key={faq.id} className="card">
              <summary className="cursor-pointer text-base font-semibold text-ink">
                {t(lang, faq.question_en, faq.question_fa)}
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                {t(lang, faq.answer_en, faq.answer_fa)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
