import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminEntity } from "@/lib/admin-config";
import { AdminForm } from "@/components/admin/admin-form";
import { updateEntity } from "@/lib/admin-actions";

export default async function AdminEntityEditPage({
  params
}: {
  params: { entity: string; id: string };
}) {
  const config = getAdminEntity(params.entity);
  if (!config) return notFound();
  const item = await (prisma as any)[config.model].findUnique({ where: { id: params.id } });
  if (!item) return notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Edit {config.label}</h1>
        <p className="text-sm text-slate-400">Update this entry.</p>
      </div>
      <AdminForm
        fields={config.fields}
        action={updateEntity.bind(null, params.entity, params.id)}
        submitLabel="Save changes"
        initialData={item}
      />
    </div>
  );
}