"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function normalize(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed.length === 0 ? "" : trimmed;
}

export async function updateSettings(formData: FormData) {
  const data = {
    brandName: (formData.get("brandName") as string) ?? "MeshkinHost",
    logoUrl: normalize(formData.get("logoUrl")),
    primaryColor: (formData.get("primaryColor") as string) ?? "#3b82f6",
    secondaryColor: (formData.get("secondaryColor") as string) ?? "#0f172a",
    accentColor: (formData.get("accentColor") as string) ?? "#f59e0b",
    heroBackgroundUrl: normalize(formData.get("heroBackgroundUrl")),
    contactEmail: normalize(formData.get("contactEmail")),
    supportPhone: normalize(formData.get("supportPhone"))
  };

  const existing = await prisma.siteSettings.findFirst();
  if (existing) {
    await prisma.siteSettings.update({ where: { id: existing.id }, data });
  } else {
    await prisma.siteSettings.create({ data });
  }
  revalidatePath("/");
  revalidatePath("/admin/settings");
}
