import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const upload = await prisma.upload.findUnique({ where: { id: params.id } });
  if (!upload) {
    return NextResponse.json({ ok: true });
  }
  const relative = upload.filePath.replace(/^\//, "");
  const absolutePath = path.join(process.cwd(), "public", relative);
  if (fs.existsSync(absolutePath)) {
    fs.unlinkSync(absolutePath);
  }
  await prisma.upload.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}