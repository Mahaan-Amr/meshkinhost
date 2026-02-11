"use client";
import { WhyUsItem } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Stack from "@/components/reactbits/Stack";

export function WhyUsSection({ items }: { items: WhyUsItem[] }) {
  const { lang } = useLanguage();
  const stackCards = items
    .filter((item) => Boolean(item.imageUrl))
    .slice(0, 4)
    .map((item, index) => ({
      id: item.id ?? `why-${index}`,
      img: item.imageUrl ?? "/globe.svg",
    }));
  const stackData =
    stackCards.length > 0
      ? stackCards
      : [
          {
            id: "why-fallback",
            img: "/globe.svg",
          },
        ];
  return (
    <section className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="section-heading">
            {lang === "fa" ? "چرا MeshkinHost" : "Why MeshkinHost"}
          </h2>
          <p className="section-subtitle">
            {lang === "fa"
              ? "تیم متخصص، زیرساخت پایدار و پشتیبانی ۲۴/۷."
              : "Expert team, resilient infrastructure, 24/7 support."}
          </p>
          <div className="mt-8 space-y-6">
            {items.map((item) => (
              <SpotlightCard key={item.id} className="glass-card">
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
        <div className="relative">
          <div className="absolute -left-10 top-10 hidden h-24 w-24 rounded-full bg-brand-100 blur-3xl lg:block" />
          <Stack
            randomRotation
            cardsData={stackData}
          />
        </div>
      </div>
    </section>
  );
}
