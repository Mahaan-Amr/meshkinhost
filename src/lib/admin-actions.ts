"use server";

import { prisma } from "@/lib/prisma";
import { getAdminEntity } from "@/lib/admin-config";
import { revalidatePath } from "next/cache";

function parseValue(type: string, value: FormDataEntryValue | null) {
  if (type === "boolean") {
    return value === "on" || value === "true";
  }
  if (type === "number") {
    if (typeof value !== "string") return 0;
    const parsed = Number.parseFloat(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  if (type === "array") {
    if (typeof value !== "string") return [];
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  if (typeof value === "string") {
    return value.trim();
  }
  return value ?? "";
}

export async function createEntity(entityKey: string, formData: FormData) {
  const config = getAdminEntity(entityKey);
  if (!config) throw new Error("Unknown entity");
  const data: Record<string, unknown> = {};
  for (const field of config.fields) {
    const value = formData.get(field.name);
    if (value === null && field.type !== "boolean") continue;
    data[field.name] = parseValue(field.type, value);
  }
  const model = (prisma as any)[config.model];
  await model.create({ data });
  revalidatePath("/");
  revalidatePath(`/admin/${entityKey}`);
}

export async function updateEntity(entityKey: string, id: string, formData: FormData) {
  const config = getAdminEntity(entityKey);
  if (!config) throw new Error("Unknown entity");
  const data: Record<string, unknown> = {};
  for (const field of config.fields) {
    const value = formData.get(field.name);
    if (value === null && field.type !== "boolean") continue;
    data[field.name] = parseValue(field.type, value);
  }
  const model = (prisma as any)[config.model];
  await model.update({ where: { id }, data });
  revalidatePath("/");
  revalidatePath(`/admin/${entityKey}`);
  revalidatePath(`/admin/${entityKey}/${id}`);
}

export async function deleteEntity(entityKey: string, id: string) {
  const config = getAdminEntity(entityKey);
  if (!config) throw new Error("Unknown entity");
  const model = (prisma as any)[config.model];
  await model.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath(`/admin/${entityKey}`);
}

export async function deleteEntityFromForm(entityKey: string, formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string") return;
  await deleteEntity(entityKey, id);
}