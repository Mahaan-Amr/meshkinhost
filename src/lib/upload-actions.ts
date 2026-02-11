"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";

export async function deleteUpload(id: string) {
  const upload = await prisma.upload.findUnique({ where: { id } });
  if (!upload) return;
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      await del(upload.filePath);
    } catch {
      // ignore blob deletion failures
    }
  }
  await prisma.upload.delete({ where: { id } });
  revalidatePath("/admin/uploads");
}
