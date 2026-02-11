import { PublicShell } from "@/components/public-shell";
import { ServicesSection } from "@/components/sections/services-section";
import { getServices } from "@/lib/content";
import { BilingualText } from "@/components/bilingual-text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MeshkinHost",
  description: "Explore everything we host for you."
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <PublicShell>
      <div className="section">
        <div className="container-page">
          <h1 className="text-4xl font-semibold text-ink">
            <BilingualText en="Services" fa="سرویس‌ها" />
          </h1>
          <p className="mt-4 text-slate-600">
            <BilingualText
              en="Explore everything we host for you."
              fa="همه سرویس‌هایی که برای شما میزبانی می‌کنیم."
            />
          </p>
        </div>
      </div>
      <ServicesSection services={services} />
    </PublicShell>
  );
}
