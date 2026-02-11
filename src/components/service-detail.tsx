"use client";
import { ServiceCategory } from "@/types/models";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

export function ServiceDetailContent({
  service,
  services
}: {
  service: ServiceCategory;
  services: ServiceCategory[];
}) {
  const { lang } = useLanguage();
  return (
    <>
      <div className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-semibold text-ink">
              {t(lang, service.name_en, service.name_fa)}
            </h1>
            <p className="mt-4 text-slate-600">
              {t(lang, service.summary_en, service.summary_fa)}
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="button-primary">
                {lang === "fa" ? "تماس با فروش" : "Contact Sales"}
              </Link>
              <Link href="/pricing" className="button-ghost">
                {lang === "fa" ? "مشاهده قیمت" : "View Pricing"}
              </Link>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-ink">
              {lang === "fa" ? "نکات سرویس" : "Service highlights"}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• {lang === "fa" ? "SLA تضمین‌شده" : "Uptime backed SLA"}</li>
              <li>• {lang === "fa" ? "پایش ۲۴/۷" : "24/7 monitoring"}</li>
              <li>• {lang === "fa" ? "راه‌اندازی اختصاصی" : "Dedicated onboarding"}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container-page">
          <h2 className="text-2xl font-semibold text-ink">
            {lang === "fa" ? "سایر سرویس‌ها" : "Other services"}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {services.map((item) => (
              <Link key={item.id} href={`/services/${item.slug}`} className="card">
                <p className="text-sm font-semibold text-ink">
                  {t(lang, item.name_en, item.name_fa)}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {t(lang, item.summary_en, item.summary_fa)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
