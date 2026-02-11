import { PublicShell } from "@/components/public-shell";
import { getFaqs } from "@/lib/content";
import { FaqSection } from "@/components/sections/faq-section";
import { BilingualText } from "@/components/bilingual-text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | MeshkinHost",
  description: "All the answers in one place."
};

export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <PublicShell>
      <div className="section">
        <div className="container-page">
          <h1 className="text-4xl font-semibold text-ink">
            <BilingualText en="FAQ" fa="سوالات متداول" />
          </h1>
          <p className="mt-4 text-slate-600">
            <BilingualText en="All the answers in one place." fa="همه پاسخ‌ها در یکجا." />
          </p>
        </div>
      </div>
      <FaqSection items={faqs} />
    </PublicShell>
  );
}
