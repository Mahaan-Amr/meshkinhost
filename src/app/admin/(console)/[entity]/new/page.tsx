import { notFound } from "next/navigation";
import { getAdminEntity } from "@/lib/admin-config";
import { AdminForm } from "@/components/admin/admin-form";
import { createEntity } from "@/lib/admin-actions";

export default function AdminEntityNewPage({ params }: { params: { entity: string } }) {
  const config = getAdminEntity(params.entity);
  if (!config) return notFound();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">New {config.label}</h1>
        <p className="text-sm text-slate-400">Create a new entry.</p>
      </div>
      <AdminForm
        fields={config.fields}
        action={createEntity.bind(null, params.entity)}
        submitLabel="Create"
      />
    </div>
  );
}