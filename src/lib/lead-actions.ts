"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function submitLead(formData: FormData) {
  const name = getValue(formData, "name");
  const email = getValue(formData, "email");
  const message = getValue(formData, "message");
  const sourcePage = getValue(formData, "sourcePage") || "/";

  if (!name || !email) return;

  await prisma.lead.create({
    data: {
      name,
      email,
      message,
      sourcePage
    }
  });

  revalidatePath("/admin/leads");
}
