import { prisma } from "@/lib/prisma";

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Leads</h1>
        <p className="text-sm text-muted">Captured from contact and pricing CTAs.</p>
      </div>
      <div className="glass-card space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="glass-panel p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-ink">{lead.name}</p>
                <p className="text-xs text-muted">{lead.email}</p>
              </div>
              <span className="text-xs text-muted">{lead.sourcePage}</span>
            </div>
            {lead.message && (
              <p className="mt-3 text-sm text-muted">{lead.message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
