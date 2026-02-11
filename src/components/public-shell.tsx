import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Dock from "@/components/reactbits/Dock";
import ClickSpark from "@/components/reactbits/ClickSpark";
import Noise from "@/components/reactbits/Noise";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-app text-app">
      <ClickSpark />
      <Noise />
      <SiteHeader />
      {children}
      <SiteFooter />
      <Dock
        items={[
          { label: "Pricing", href: "/pricing", icon: "PR" },
          { label: "Services", href: "/services", icon: "SV" },
          { label: "Contact", href: "/contact", icon: "CT" },
          { label: "Admin", href: "/admin", icon: "AD" },
          { label: "FAQ", href: "/faq", icon: "FQ" },
        ]}
        position="bottom"
        responsive="bottom"
      />
    </div>
  );
}
