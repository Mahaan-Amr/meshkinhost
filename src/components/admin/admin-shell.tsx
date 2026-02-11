import Link from "next/link";
import { AdminTopBar } from "@/components/admin/admin-top-bar";

const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Site Settings", href: "/admin/settings" },
  { label: "Hero", href: "/admin/hero" },
  { label: "Features", href: "/admin/features" },
  { label: "Plans", href: "/admin/plans" },
  { label: "Services", href: "/admin/services" },
  { label: "Why Us", href: "/admin/why-us" },
  { label: "Video", href: "/admin/video" },
  { label: "Practical", href: "/admin/practical" },
  { label: "Brands", href: "/admin/brands" },
  { label: "Testimonials", href: "/admin/testimonials" },
  { label: "FAQ", href: "/admin/faqs" },
  { label: "Leads", href: "/admin/leads" },
  { label: "Section Order", href: "/admin/sections" },
  { label: "Uploads", href: "/admin/uploads" }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell">
      <div className="flex min-h-screen">
        <aside className="w-64 glass-panel px-5 py-8">
          <Link href="/" className="text-lg font-semibold text-white">
            MeshkinHost
          </Link>
          <nav className="mt-8 flex flex-col gap-3 text-sm text-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1">
          <AdminTopBar />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
