"use client";

import { UploadField } from "@/components/admin/upload-field";
import { AdminField } from "@/lib/admin-config";

export function AdminForm({
  fields,
  action,
  submitLabel,
  initialData
}: {
  fields: AdminField[];
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  initialData?: Record<string, any> | null;
}) {
  return (
    <form action={action} className="admin-card space-y-6">
      {fields.map((field) => {
        const value = initialData?.[field.name];
        if (field.type === "textarea") {
          return (
            <label key={field.name} className="block">
              <span className="text-xs text-slate-400">{field.label}</span>
              <textarea
                name={field.name}
                defaultValue={value ?? ""}
                className="input mt-2"
                rows={4}
              />
            </label>
          );
        }
        if (field.type === "array") {
          const textValue = Array.isArray(value) ? value.join("\n") : value ?? "";
          return (
            <label key={field.name} className="block">
              <span className="text-xs text-slate-400">{field.label}</span>
              <textarea
                name={field.name}
                defaultValue={textValue}
                className="input mt-2"
                rows={4}
              />
            </label>
          );
        }
        if (field.type === "boolean") {
          const checked = typeof value === "boolean" ? value : field.name === "isActive";
          return (
            <label key={field.name} className="flex items-center gap-3">
              <input type="checkbox" name={field.name} defaultChecked={checked} className="h-4 w-4" />
              <span className="text-sm text-slate-300">{field.label}</span>
            </label>
          );
        }
        if (field.type === "image") {
          return (
            <div key={field.name}>
              <p className="text-xs text-slate-400">{field.label}</p>
              <UploadField name={field.name} defaultValue={value} />
            </div>
          );
        }

        const inputType =
          field.type === "number" ? "number" : field.type === "url" ? "url" : "text";
        return (
          <label key={field.name} className="block">
            <span className="text-xs text-slate-400">{field.label}</span>
            <input
              name={field.name}
              type={inputType}
              step={field.type === "number" ? "any" : undefined}
              defaultValue={value ?? ""}
              className="input mt-2"
              required={field.required}
            />
          </label>
        );
      })}
      <button className="button-primary" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
