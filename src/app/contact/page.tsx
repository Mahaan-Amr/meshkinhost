import { PublicShell } from "@/components/public-shell";
import { BilingualText } from "@/components/bilingual-text";
import { submitLead } from "@/lib/lead-actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MeshkinHost",
  description: "Tell us about your workload and we will design the right hosting stack."
};

export default function ContactPage() {
  return (
    <PublicShell>
      <div className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-semibold text-ink">
              <BilingualText en="Contact" fa="تماس با ما" />
            </h1>
            <p className="mt-4 text-slate-600">
              <BilingualText
                en="Tell us about your workload and we will design the right hosting stack."
                fa="نیازهای کاری خود را بگویید تا بهترین هاست را طراحی کنیم."
              />
            </p>
            <form className="mt-8 grid gap-4" action={submitLead}>
              <input name="name" className="input" placeholder="Name" required />
              <input name="email" className="input" placeholder="Email" required />
              <textarea name="message" className="input" rows={4} placeholder="Project details" />
              <input type="hidden" name="sourcePage" value="/contact" />
              <button className="btn-primary" type="submit">
                Send message
              </button>
            </form>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-ink">MeshkinHost HQ</h3>
            <p className="mt-2 text-sm text-slate-600">Tehran · Dubai · Frankfurt</p>
            <div className="mt-6 text-sm text-slate-600">
              <p>Email: hello@meshkinhost.com</p>
              <p>Support: +98 21 0000 0000</p>
            </div>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}
