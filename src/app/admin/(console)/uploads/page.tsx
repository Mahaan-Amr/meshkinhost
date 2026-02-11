import { prisma } from "@/lib/prisma";
import { deleteUpload } from "@/lib/upload-actions";

export default async function AdminUploadsPage() {
  const uploads = await prisma.upload.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Uploads</h1>
        <p className="text-sm text-slate-400">Manage uploaded assets.</p>
      </div>
      <div className="admin-card space-y-4">
        {uploads.map((upload) => (
          <div key={upload.id} className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
            <div>
              <p className="text-sm text-white">{upload.fileName}</p>
              <p className="text-xs text-slate-400">{upload.filePath}</p>
            </div>
            <form action={deleteUpload.bind(null, upload.id)}>
              <button type="submit" className="button-ghost text-red-300">
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}