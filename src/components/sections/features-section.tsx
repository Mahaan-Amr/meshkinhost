"use client";
import { Feature } from "@/types/models";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import { Shield, Zap, Globe2, Cloud } from "lucide-react";
import BlurText from "@/components/reactbits/BlurText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const iconMap = {
  shield: Shield,
  zap: Zap,
  globe: Globe2,
  cloud: Cloud
};

export function FeaturesSection({ features }: { features: Feature[] }) {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="section-heading">
          <BlurText text={lang === "fa" ? "ویژگی‌های کلیدی" : "Core Features"} />
        </h2>
        <p className="section-subtitle">
          {lang === "fa"
            ? "زیرساخت امن و سریع برای تیم‌های مدرن."
            : "Secure, fast infrastructure designed for modern brands."}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const key = feature.iconName.toLowerCase() as keyof typeof iconMap;
            const Icon = iconMap[key] ?? Cloud;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <SpotlightCard className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {t(lang, feature.title_en, feature.title_fa)}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {t(lang, feature.body_en, feature.body_fa)}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
