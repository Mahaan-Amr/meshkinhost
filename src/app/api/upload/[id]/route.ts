import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const upload = await prisma.upload.findUnique({ where: { id } });
  if (!upload) {
    return NextResponse.json({ ok: true });
  }
  const relative = upload.filePath.replace(/^\//, "");
  const absolutePath = path.join(process.cwd(), "public", relative);
  if (fs.existsSync(absolutePath)) {
    fs.unlinkSync(absolutePath);
  }
  await prisma.upload.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
