"use client";
import { Hero } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import { motion } from "framer-motion";
import SplitText from "@/components/reactbits/SplitText";
import BlurText from "@/components/reactbits/BlurText";
import Squares from "@/components/reactbits/Squares";
import Magnet from "@/components/reactbits/Magnet";
import MagnetLines from "@/components/reactbits/MagnetLines";
import CountUp from "@/components/reactbits/CountUp";
import { useState } from "react";

export function HeroSection({ hero }: { hero: Hero[] }) {
  const { lang } = useLanguage();
  const item = hero[0];
  if (!item) return null;
  return (
    <section className="relative overflow-hidden hero-surface text-app">
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <Squares direction="diagonal" speed={0.4} />
      </div>
      <div className="absolute -right-24 top-10 hidden opacity-25 md:block pointer-events-none">
        <MagnetLines
          rows={10}
          columns={12}
          containerSize="420px"
          lineColor="rgba(94, 231, 255, 0.35)"
          lineWidth="4px"
          lineHeight="28px"
          baseAngle={-16}
        />
      </div>
      <div className="container-page relative z-10 grid gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge glass-pill">
            {lang === "fa" ? "ارائه‌دهنده هاست ابری" : "Cloud Hosting Provider"}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            {lang === "fa" ? (
              <span className="text-app">{t(lang, item.title_en, item.title_fa)}</span>
            ) : (
              <SplitText text={t(lang, item.title_en, item.title_fa)} className="text-app" />
            )}
          </h1>
          <div className="mt-4 max-w-xl text-base text-muted">
            <BlurText text={t(lang, item.subtitle_en, item.subtitle_fa)} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnet hoverDelay={160}>
              <a href={item.ctaUrl} className="btn-primary glow glass-float">
                {t(lang, item.ctaText_en, item.ctaText_fa)}
              </a>
            </Magnet>
            <Magnet hoverDelay={160}>
              <button className="btn-ghost">
                {lang === "fa" ? "گفتگو با ما" : "Talk to us"}
              </button>
            </Magnet>
          </div>
          <div className="mt-10 glass-panel p-4">
            <DomainSearch />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card glow-soft glass-float"
        >
          <div className="grid gap-4">
            <div className="glass-panel p-4 hero-stat">
              <p className="stat-label text-xs uppercase tracking-[0.2em]">
                {lang === "fa" ? "زمان پاسخ" : "Response time"}
              </p>
              <p className="mt-3 text-3xl font-semibold">
                <CountUp to={12} duration={1.8} />
                <span className="text-base font-medium">ms</span>
              </p>
            </div>
            <div className="glass-panel p-4 hero-stat">
              <p className="stat-label text-xs uppercase tracking-[0.2em]">
                {lang === "fa" ? "آپتایم" : "Uptime"}
              </p>
              <p className="mt-3 text-3xl font-semibold">
                <CountUp to={99} duration={2} />
                <span className="text-base font-medium">.99%</span>
              </p>
            </div>
            <div className="glass-panel p-4 hero-stat">
              <p className="stat-label text-xs uppercase tracking-[0.2em]">
                {lang === "fa" ? "دیتاسنترها" : "Data centers"}
              </p>
              <p className="mt-3 text-3xl font-semibold">
                <CountUp to={6} duration={1.6} />
                <span className="text-base font-medium">
                  {lang === "fa" ? " منطقه" : " Regions"}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DomainSearch() {
  const { lang } = useLanguage();
  const [mode, setMode] = useState<"register" | "transfer">("register");
  return (
    <form className="domain-shell grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="domain-toggle">
          <label className={`domain-pill ${mode === "register" ? "active" : ""}`}>
            <input
              type="radio"
              name="domain"
              checked={mode === "register"}
              onChange={() => setMode("register")}
              className="sr-only"
            />
            {lang === "fa" ? "ثبت دامنه" : "Register"}
          </label>
          <label className={`domain-pill ${mode === "transfer" ? "active" : ""}`}>
            <input
              type="radio"
              name="domain"
              checked={mode === "transfer"}
              onChange={() => setMode("transfer")}
              className="sr-only"
            />
            {lang === "fa" ? "انتقال دامنه" : "Transfer"}
          </label>
        </div>
        <span className="text-xs text-muted">
          {lang === "fa" ? "پیشنهاد فوری دامنه" : "Instant domain suggestion"}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <input
          className="domain-input"
          placeholder={
            lang === "fa"
              ? "دامنه مناسب خود را جستجو کنید"
              : "Search your perfect domain"
          }
        />
        <Magnet>
          <button className="domain-cta" type="button">
            {lang === "fa" ? "جستجو" : "Search"}
          </button>
        </Magnet>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
        <span className="glass-pill px-3 py-1">.com</span>
        <span className="glass-pill px-3 py-1">.host</span>
        <span className="glass-pill px-3 py-1">.cloud</span>
        <span className="glass-pill px-3 py-1">.io</span>
        <span>{lang === "fa" ? "این بخش فقط نمایشی است." : "This is a UI-only demo search."}</span>
      </div>
    </form>
  );
}
