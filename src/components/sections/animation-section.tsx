"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function AnimationSection() {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <h2 className="section-heading">
            {lang === "fa" ? "زیرساخت هوشمند" : "Intelligent Infrastructure"}
          </h2>
          <p className="section-subtitle">
            {lang === "fa"
              ? "مسیر‌یابی تطبیقی و مقیاس‌پذیری لحظه‌ای."
              : "Adaptive routing and instant scaling for peak performance."}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>• {lang === "fa" ? "بالانس خودکار" : "Auto load balancing"}</li>
            <li>• {lang === "fa" ? "مانیتورینگ لحظه‌ای" : "Real-time monitoring"}</li>
            <li>• {lang === "fa" ? "بک‌آپ مداوم" : "Continuous backups"}</li>
          </ul>
        </div>
        <div className="relative h-64 glass-card">
          <motion.div
            className="absolute left-6 top-10 h-10 w-10 rounded-full bg-brand-500"
            animate={{ x: [0, 180, 80, 0], y: [0, 40, 120, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 top-6 h-16 w-16 rounded-full bg-accent-500/80"
            animate={{ y: [0, 130, 40, 0], x: [0, -60, -20, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <div className="absolute bottom-8 left-8 right-8 glass-panel p-4 text-sm text-slate-600">
            {lang === "fa" ? "مش در حال همگام‌سازی است." : "Your private mesh is synchronizing."}
          </div>
        </div>
      </div>
    </section>
  );
}
