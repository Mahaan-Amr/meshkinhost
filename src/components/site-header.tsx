"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const { lang } = useLanguage();
  return (
    <header className="site-header glass-panel">
      <div className="container-page flex flex-wrap items-center justify-center gap-2 py-4 sm:gap-3 md:flex-nowrap md:justify-between md:gap-5 md:py-6">
        <Link href="/" className="brand-link order-2 shrink-0 text-lg font-semibold tracking-tight sm:text-xl md:order-none">
          MeshkinHost
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-semibold md:flex">
          <Link href="/pricing" className="nav-link">
            {lang === "fa" ? "قیمت‌ها" : "Pricing"}
          </Link>
          <Link href="/services" className="nav-link">
            {lang === "fa" ? "سرویس‌ها" : "Services"}
          </Link>
          <Link href="/about" className="nav-link">
            {lang === "fa" ? "درباره ما" : "About"}
          </Link>
          <Link href="/contact" className="nav-link">
            {lang === "fa" ? "تماس" : "Contact"}
          </Link>
          <Link href="/faq" className="nav-link">
            {lang === "fa" ? "سوالات" : "FAQ"}
          </Link>
        </nav>
        <div className="order-1 flex w-full min-w-0 flex-wrap items-center justify-center gap-2 sm:gap-3 md:order-none md:w-auto md:flex-nowrap md:justify-end">
          <Link
            href="/admin"
            className="btn-outline hidden text-xs md:inline-flex"
          >
            {lang === "fa" ? "پنل مدیریت" : "Admin"}
          </Link>
          <Link href="/pricing#lead" className="btn-primary compact-cta text-xs sm:text-sm">
            <span className="sm:hidden">{lang === "fa" ? "پلن‌ها" : "Plans"}</span>
            <span className="hidden sm:inline">
              {lang === "fa" ? "مشاهده پلن‌ها" : "View Plans"}
            </span>
          </Link>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
