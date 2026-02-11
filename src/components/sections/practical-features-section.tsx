"use client";
import { PracticalFeature } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

export function PracticalFeaturesSection({ items }: { items: PracticalFeature[] }) {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="section-heading">
          {lang === "fa" ? "ویژگی‌های کاربردی" : "Most Practical Features"}
        </h2>
        <p className="section-subtitle">
          {lang === "fa"
            ? "ابزارهایی که هر روز از آن‌ها استفاده می‌کنید."
            : "Tools you will use every day to stay ahead."}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <SpotlightCard key={item.id} className="card">
              <h3 className="text-lg font-semibold text-ink">
                {t(lang, item.title_en, item.title_fa)}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t(lang, item.body_en, item.body_fa)}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
