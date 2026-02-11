import { PublicShell } from "@/components/public-shell";
import { getPlans } from "@/lib/content";
import { PlansSection } from "@/components/sections/plans-section";
import { BilingualText } from "@/components/bilingual-text";
import { submitLead } from "@/lib/lead-actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | MeshkinHost",
  description: "Transparent plans for every scale."
};

export default async function PricingPage() {
  const plans = await getPlans();
  return (
    <PublicShell>
      <div className="section">
        <div className="container-page">
          <h1 className="text-4xl font-semibold text-ink">
            <BilingualText en="Pricing" fa="قیمت‌ها" />
          </h1>
          <p className="mt-4 text-slate-600">
            <BilingualText
              en="Transparent plans for every scale."
              fa="پلن‌های شفاف برای هر مقیاس."
            />
          </p>
          <form
            id="lead"
            className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr_auto]"
            action={submitLead}
          >
            <input name="name" className="input" placeholder="Name" required />
            <input name="email" className="input" placeholder="Email" required />
            <input type="hidden" name="message" value="Pricing CTA" />
            <input type="hidden" name="sourcePage" value="/pricing" />
            <button className="btn-primary" type="submit">
              Get a quote
            </button>
          </form>
        </div>
      </div>
      <PlansSection plans={plans} />
    </PublicShell>
  );
}
