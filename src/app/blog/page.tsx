import { PublicShell } from "@/components/public-shell";
import { BilingualText } from "@/components/bilingual-text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MeshkinHost",
  description: "News and updates from MeshkinHost."
};

export default function BlogPage() {
  return (
    <PublicShell>
      <div className="section">
        <div className="container-page">
          <h1 className="text-4xl font-semibold text-ink">
            <BilingualText en="Blog" fa="بلاگ" />
          </h1>
          <p className="mt-4 text-slate-600">
            <BilingualText en="Coming soon." fa="به‌زودی." />
          </p>
        </div>
      </div>
    </PublicShell>
  );
}
