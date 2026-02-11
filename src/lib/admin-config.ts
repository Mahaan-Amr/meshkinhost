export type AdminField = {
  name: string;
  label: string;
  type: "text" | "textarea" | "number" | "boolean" | "url" | "image" | "array";
  required?: boolean;
};

export type AdminEntityConfig = {
  key: string;
  label: string;
  model: string;
  fields: AdminField[];
};

export const adminEntities: AdminEntityConfig[] = [
  {
    key: "hero",
    label: "Hero",
    model: "hero",
    fields: [
      { name: "title_en", label: "Title (EN)", type: "text", required: true },
      { name: "title_fa", label: "Title (FA)", type: "text", required: true },
      { name: "subtitle_en", label: "Subtitle (EN)", type: "textarea" },
      { name: "subtitle_fa", label: "Subtitle (FA)", type: "textarea" },
      { name: "ctaText_en", label: "CTA Text (EN)", type: "text" },
      { name: "ctaText_fa", label: "CTA Text (FA)", type: "text" },
      { name: "ctaUrl", label: "CTA URL", type: "url" },
      { name: "backgroundUrl", label: "Background Image", type: "image" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "features",
    label: "Features",
    model: "feature",
    fields: [
      { name: "title_en", label: "Title (EN)", type: "text" },
      { name: "title_fa", label: "Title (FA)", type: "text" },
      { name: "body_en", label: "Body (EN)", type: "textarea" },
      { name: "body_fa", label: "Body (FA)", type: "textarea" },
      { name: "iconName", label: "Icon name", type: "text" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "plans",
    label: "Plans",
    model: "plan",
    fields: [
      { name: "name_en", label: "Name (EN)", type: "text" },
      { name: "name_fa", label: "Name (FA)", type: "text" },
      { name: "priceMonthly", label: "Price Monthly", type: "number" },
      { name: "priceYearly", label: "Price Yearly", type: "number" },
      { name: "currency", label: "Currency", type: "text" },
      { name: "tagline_en", label: "Tagline (EN)", type: "textarea" },
      { name: "tagline_fa", label: "Tagline (FA)", type: "textarea" },
      { name: "features", label: "Features (one per line)", type: "array" },
      { name: "isPopular", label: "Popular", type: "boolean" },
      { name: "ctaText_en", label: "CTA Text (EN)", type: "text" },
      { name: "ctaText_fa", label: "CTA Text (FA)", type: "text" },
      { name: "ctaUrl", label: "CTA URL", type: "url" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "services",
    label: "Services",
    model: "serviceCategory",
    fields: [
      { name: "name_en", label: "Name (EN)", type: "text" },
      { name: "name_fa", label: "Name (FA)", type: "text" },
      { name: "slug", label: "Slug", type: "text" },
      { name: "summary_en", label: "Summary (EN)", type: "textarea" },
      { name: "summary_fa", label: "Summary (FA)", type: "textarea" },
      { name: "iconName", label: "Icon name", type: "text" },
      { name: "imageUrl", label: "Image", type: "image" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "why-us",
    label: "Why Us",
    model: "whyUsItem",
    fields: [
      { name: "title_en", label: "Title (EN)", type: "text" },
      { name: "title_fa", label: "Title (FA)", type: "text" },
      { name: "body_en", label: "Body (EN)", type: "textarea" },
      { name: "body_fa", label: "Body (FA)", type: "textarea" },
      { name: "imageUrl", label: "Image", type: "image" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "video",
    label: "Video",
    model: "videoSection",
    fields: [
      { name: "title_en", label: "Title (EN)", type: "text" },
      { name: "title_fa", label: "Title (FA)", type: "text" },
      { name: "body_en", label: "Body (EN)", type: "textarea" },
      { name: "body_fa", label: "Body (FA)", type: "textarea" },
      { name: "embedUrl", label: "Embed URL", type: "url" },
      { name: "posterUrl", label: "Poster", type: "image" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "practical",
    label: "Practical Features",
    model: "practicalFeature",
    fields: [
      { name: "title_en", label: "Title (EN)", type: "text" },
      { name: "title_fa", label: "Title (FA)", type: "text" },
      { name: "body_en", label: "Body (EN)", type: "textarea" },
      { name: "body_fa", label: "Body (FA)", type: "textarea" },
      { name: "iconName", label: "Icon name", type: "text" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "brands",
    label: "Brands",
    model: "brand",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "logoUrl", label: "Logo", type: "image" },
      { name: "websiteUrl", label: "Website URL", type: "url" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "testimonials",
    label: "Testimonials",
    model: "testimonial",
    fields: [
      { name: "personName", label: "Person", type: "text" },
      { name: "role_en", label: "Role (EN)", type: "text" },
      { name: "role_fa", label: "Role (FA)", type: "text" },
      { name: "company_en", label: "Company (EN)", type: "text" },
      { name: "company_fa", label: "Company (FA)", type: "text" },
      { name: "quote_en", label: "Quote (EN)", type: "textarea" },
      { name: "quote_fa", label: "Quote (FA)", type: "textarea" },
      { name: "avatarUrl", label: "Avatar", type: "image" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  },
  {
    key: "faqs",
    label: "FAQs",
    model: "faq",
    fields: [
      { name: "question_en", label: "Question (EN)", type: "text" },
      { name: "question_fa", label: "Question (FA)", type: "text" },
      { name: "answer_en", label: "Answer (EN)", type: "textarea" },
      { name: "answer_fa", label: "Answer (FA)", type: "textarea" },
      { name: "isActive", label: "Active", type: "boolean" },
      { name: "sortOrder", label: "Sort Order", type: "number" }
    ]
  }
];

export function getAdminEntity(key: string) {
  return adminEntities.find((entity) => entity.key === key);
}
