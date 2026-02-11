import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminEntity } from "@/lib/admin-config";
import { AdminList } from "@/components/admin/admin-list";
import { deleteEntityFromForm } from "@/lib/admin-actions";

export default async function AdminEntityListPage({
  params
}: {
  params: { entity: string };
}) {
  const config = getAdminEntity(params.entity);
  if (!config) return notFound();
  const items = await (prisma as any)[config.model].findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">{config.label}</h1>
        <p className="text-sm text-slate-400">Manage all {config.label.toLowerCase()}.</p>
      </div>
      <AdminList
        entityKey={params.entity}
        items={items}
        deleteAction={deleteEntityFromForm.bind(null, params.entity)}
      />
    </div>
  );
}