import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const [features, plans, services, testimonials, faqs] = await Promise.all([
    prisma.feature.count(),
    prisma.plan.count(),
    prisma.serviceCategory.count(),
    prisma.testimonial.count(),
    prisma.faq.count()
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-sm text-slate-400">Overview of your content.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="admin-card">
          <p className="text-sm text-slate-400">Features</p>
          <p className="mt-2 text-2xl font-semibold">{features}</p>
        </div>
        <div className="admin-card">
          <p className="text-sm text-slate-400">Plans</p>
          <p className="mt-2 text-2xl font-semibold">{plans}</p>
        </div>
        <div className="admin-card">
          <p className="text-sm text-slate-400">Services</p>
          <p className="mt-2 text-2xl font-semibold">{services}</p>
        </div>
        <div className="admin-card">
          <p className="text-sm text-slate-400">Testimonials</p>
          <p className="mt-2 text-2xl font-semibold">{testimonials}</p>
        </div>
        <div className="admin-card">
          <p className="text-sm text-slate-400">FAQs</p>
          <p className="mt-2 text-2xl font-semibold">{faqs}</p>
        </div>
      </div>
    </div>
  );
}