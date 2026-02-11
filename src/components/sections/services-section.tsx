"use client";
import { ServiceCategory } from "@/types/models";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import { Server, Globe2, ShieldCheck, HardDrive } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const iconMap = {
  server: Server,
  globe: Globe2,
  ssl: ShieldCheck,
  lock: ShieldCheck,
  storage: HardDrive
};

export function ServicesSection({ services }: { services: ServiceCategory[] }) {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="section-heading">{lang === "fa" ? "سرویس‌ها" : "Services"}</h2>
        <p className="section-subtitle">
          {lang === "fa"
            ? "از هاست وب تا سرور اختصاصی و امنیت پیشرفته."
            : "From web hosting to dedicated servers and advanced security."}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const key = service.iconName.toLowerCase() as keyof typeof iconMap;
            const Icon = iconMap[key] ?? Server;
            return (
              <Link key={service.id} href={`/services/${service.slug}`} className="transition hover:-translate-y-1">
                <SpotlightCard className="card flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {t(lang, service.name_en, service.name_fa)}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {t(lang, service.summary_en, service.summary_fa)}
                    </p>
                  </div>
                </SpotlightCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
