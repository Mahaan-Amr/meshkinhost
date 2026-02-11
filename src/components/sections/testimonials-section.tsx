"use client";
import { Testimonial } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  const { lang } = useLanguage();
  const [index, setIndex] = React.useState(0);
  const current = items[index];

  React.useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  if (!current) return null;

  return (
    <section className="section">
      <div className="container-page">
        <h2 className="section-heading">{lang === "fa" ? "نظرات مشتریان" : "Testimonials"}</h2>
        <p className="section-subtitle">
          {lang === "fa" ? "تجربه تیم‌های پرسرعت." : "Real stories from fast-moving teams."}
        </p>
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="card glow-soft"
            >
              <p className="text-lg text-slate-700">“{t(lang, current.quote_en, current.quote_fa)}”</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-100" />
                <div>
                  <p className="text-sm font-semibold text-ink">{current.personName}</p>
                  <p className="text-xs text-slate-500">
                    {t(lang, current.role_en, current.role_fa)} · {t(lang, current.company_en, current.company_fa)}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
