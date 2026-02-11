"use server";

import { prisma } from "@/lib/prisma";
import { homeSectionKeys } from "@/lib/content";
import { revalidatePath } from "next/cache";

export async function updateSectionOrder(formData: FormData) {
  const updates = homeSectionKeys.map((key) => {
    const sortOrder = Number(formData.get(`${key}_sort`) ?? 0);
    const isActive = formData.get(`${key}_active`) === "on";
    return { sectionKey: key, sortOrder, isActive };
  });

  for (const update of updates) {
    await prisma.pageSectionOrder.upsert({
      where: { pageSlug_sectionKey: { pageSlug: "home", sectionKey: update.sectionKey } },
      update: { sortOrder: update.sortOrder, isActive: update.isActive },
      create: { pageSlug: "home", sectionKey: update.sectionKey, sortOrder: update.sortOrder, isActive: update.isActive }
    });
  }

  revalidatePath("/");
  revalidatePath("/admin/sections");
}