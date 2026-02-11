import { prisma } from "@/lib/prisma";
import { updateSettings } from "@/lib/settings-actions";
import { UploadField } from "@/components/admin/upload-field";

export default async function AdminSettingsPage() {
  const settings = await prisma.siteSettings.findFirst();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Site Settings</h1>
        <p className="text-sm text-slate-400">Brand identity and contact info.</p>
      </div>
      <form action={updateSettings} className="admin-card space-y-6">
        <label className="block">
          <span className="text-xs text-slate-400">Brand name</span>
          <input name="brandName" defaultValue={settings?.brandName ?? "MeshkinHost"} className="input mt-2" />
        </label>
        <div>
          <p className="text-xs text-slate-400">Logo</p>
          <UploadField name="logoUrl" defaultValue={settings?.logoUrl ?? ""} />
        </div>
        <label className="block">
          <span className="text-xs text-slate-400">Primary color</span>
          <input name="primaryColor" defaultValue={settings?.primaryColor ?? "#3b82f6"} className="input mt-2" />
        </label>
        <label className="block">
          <span className="text-xs text-slate-400">Secondary color</span>
          <input name="secondaryColor" defaultValue={settings?.secondaryColor ?? "#0f172a"} className="input mt-2" />
        </label>
        <label className="block">
          <span className="text-xs text-slate-400">Accent color</span>
          <input name="accentColor" defaultValue={settings?.accentColor ?? "#f59e0b"} className="input mt-2" />
        </label>
        <div>
          <p className="text-xs text-slate-400">Hero background</p>
          <UploadField name="heroBackgroundUrl" defaultValue={settings?.heroBackgroundUrl ?? ""} />
        </div>
        <label className="block">
          <span className="text-xs text-slate-400">Contact email</span>
          <input name="contactEmail" defaultValue={settings?.contactEmail ?? ""} className="input mt-2" />
        </label>
        <label className="block">
          <span className="text-xs text-slate-400">Support phone</span>
          <input name="supportPhone" defaultValue={settings?.supportPhone ?? ""} className="input mt-2" />
        </label>
        <button className="button-primary" type="submit">
          Save settings
        </button>
      </form>
    </div>
  );
}