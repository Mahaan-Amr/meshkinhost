import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Blob token missing" }, { status: 500 });
  }

  const safeName = `${Date.now()}-${file.name}`.replace(/\s+/g, "-");
  const uploaded = await put(safeName, file, {
    access: "public",
    contentType: file.type
  });

  const upload = await prisma.upload.create({
    data: {
      filePath: uploaded.url,
      fileName: file.name,
      mimeType: file.type,
      size: file.size
    }
  });

  return NextResponse.json({ id: upload.id, filePath: upload.filePath });
}
