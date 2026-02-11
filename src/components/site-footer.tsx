"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { lang } = useLanguage();
  return (
    <footer className="site-footer glass-panel">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className="text-lg font-semibold text-ink">MeshkinHost</h3>
          <p className="mt-3 text-sm text-slate-600">
            {lang === "fa"
              ? "هاستینگ امن و مقیاس‌پذیر برای تیم‌های مدرن."
              : "Cloud hosting built for momentum. Launch faster, scale smarter, and stay secured."}
          </p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-ink">{lang === "fa" ? "شرکت" : "Company"}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/about">{lang === "fa" ? "درباره ما" : "About"}</Link>
            <Link href="/contact">{lang === "fa" ? "تماس" : "Contact"}</Link>
            <Link href="/faq">{lang === "fa" ? "سوالات" : "FAQ"}</Link>
          </div>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-ink">{lang === "fa" ? "سرویس‌ها" : "Services"}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/services/web-hosting">Web Hosting</Link>
            <Link href="/services/server-hosting">Server Hosting</Link>
            <Link href="/services/ssl">SSL</Link>
          </div>
        </div>
      </div>
      <div className="glass-divider py-6 text-center text-xs text-slate-500">
        © 2026 MeshkinHost. All rights reserved.
      </div>
    </footer>
  );
}
