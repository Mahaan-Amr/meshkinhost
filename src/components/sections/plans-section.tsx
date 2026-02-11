"use client";
import { Plan } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import { formatPrice, t } from "@/lib/i18n";
import PixelCard from "@/components/reactbits/PixelCard";

export function PlansSection({ plans }: { plans: Plan[] }) {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="section-heading">
              {lang === "fa" ? "محبوب‌ترین پلن‌های هاست" : "Most Popular Hosting Plans"}
            </h2>
            <p className="section-subtitle">
              {lang === "fa"
                ? "پلن‌های مناسب برای هر مرحله رشد."
                : "Plans tailored for every stage of growth."}
            </p>
          </div>
          <span className="badge">
            {lang === "fa" ? "قیمت‌گذاری شفاف" : "Transparent pricing"}
          </span>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PixelCard
              key={plan.id}
              className={`${plan.isPopular ? "glow-soft" : ""}`}
              variant={plan.isPopular ? "pink" : "default"}
            >
              {plan.isPopular && (
                <span className="badge bg-brand-600 text-white">
                  {lang === "fa" ? "محبوب‌ترین" : "Most popular"}
                </span>
              )}
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {t(lang, plan.name_en, plan.name_fa)}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t(lang, plan.tagline_en, plan.tagline_fa)}
              </p>
              <div className="mt-6">
                <p className="text-3xl font-semibold text-ink">
                  {formatPrice(plan.priceMonthly, plan.currency, lang)}
                </p>
                <p className="text-xs text-slate-500">
                  {lang === "fa" ? "ماهانه" : "per month"}
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {(plan.features as string[]).map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <a href={plan.ctaUrl} className="button-primary mt-6 w-full">
                {t(lang, plan.ctaText_en, plan.ctaText_fa)}
              </a>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
