import { prisma } from "@/lib/prisma";

export const homeSectionKeys = [
  "hero",
  "features",
  "plans",
  "services",
  "why-us",
  "video",
  "animation",
  "practical",
  "brands",
  "testimonials",
  "faq"
] as const;

export async function getHomeContent() {
  const [
    siteSettings,
    hero,
    features,
    plans,
    services,
    whyUs,
    videos,
    practical,
    brands,
    testimonials,
    faqs,
    sectionOrder
  ] = await Promise.all([
    prisma.siteSettings.findFirst(),
    prisma.hero.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.feature.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.plan.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.serviceCategory.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.whyUsItem.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.videoSection.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.practicalFeature.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.brand.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.testimonial.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.faq.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    prisma.pageSectionOrder.findMany({ where: { pageSlug: "home" } })
  ]);

  const orderMap = new Map(sectionOrder.map((section) => [section.sectionKey, section]));
  const sections = homeSectionKeys.map((key, index) => {
    const stored = orderMap.get(key);
    return {
      key,
      sortOrder: stored?.sortOrder ?? index,
      isActive: stored?.isActive ?? true
    };
  });

  return {
    siteSettings,
    hero,
    features,
    plans,
    services,
    whyUs,
    videos,
    practical,
    brands,
    testimonials,
    faqs,
    sections: sections.sort((a, b) => a.sortOrder - b.sortOrder)
  };
}

export async function getServices() {
  return prisma.serviceCategory.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } });
}

export async function getPlans() {
  return prisma.plan.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } });
}

export async function getFaqs() {
  return prisma.faq.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } });
}