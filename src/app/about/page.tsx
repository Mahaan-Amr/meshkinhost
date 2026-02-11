import { PublicShell } from "@/components/public-shell";
import { BilingualText } from "@/components/bilingual-text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MeshkinHost",
  description: "Learn about MeshkinHost, our mission, and our team."
};

export default function AboutPage() {
  return (
    <PublicShell>
      <div className="section">
        <div className="container-page">
          <h1 className="text-4xl font-semibold text-ink">
            <BilingualText en="About MeshkinHost" fa="درباره MeshkinHost" />
          </h1>
          <p className="mt-4 text-slate-600">
            <BilingualText
              en="We build high-performance hosting platforms for ambitious teams."
              fa="ما پلتفرم‌های هاستینگ پربازده برای تیم‌های جاه‌طلب می‌سازیم."
            />
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-lg font-semibold text-ink">Mission</h3>
              <p className="mt-2 text-sm text-slate-600">Cloud operations with human focus.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-ink">Team</h3>
              <p className="mt-2 text-sm text-slate-600">Experts in systems, security, and support.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-ink">Reach</h3>
              <p className="mt-2 text-sm text-slate-600">6 global regions with localized support.</p>
            </div>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}
