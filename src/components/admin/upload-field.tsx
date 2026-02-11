"use client";

import React from "react";

export function UploadField({
  name,
  defaultValue
}: {
  name: string;
  defaultValue?: string | null;
}) {
  const [value, setValue] = React.useState(defaultValue ?? "");
  const [loading, setLoading] = React.useState(false);

  async function onUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body });
    const data = await res.json();
    if (res.ok) {
      setValue(data.filePath);
    }
    setLoading(false);
  }

  return (
    <div className="space-y-2">
      <input type="hidden" name={name} value={value} readOnly />
      <input type="file" onChange={onUpload} className="text-xs text-slate-300" />
      {loading && <p className="text-xs text-slate-400">Uploading...</p>}
      {value && (
        <div className="glass-panel p-2">
          <img src={value} alt="Upload" className="h-20 w-auto rounded-lg object-contain" />
          <p className="mt-2 text-xs text-slate-400">{value}</p>
        </div>
      )}
    </div>
  );
}
