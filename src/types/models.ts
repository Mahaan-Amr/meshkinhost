export type Hero = {
  id: string;
  title_en: string;
  title_fa: string;
  subtitle_en: string;
  subtitle_fa: string;
  ctaText_en: string;
  ctaText_fa: string;
  ctaUrl: string;
  backgroundUrl: string;
};

export type Feature = {
  id: string;
  title_en: string;
  title_fa: string;
  body_en: string;
  body_fa: string;
  iconName: string;
};

export type Plan = {
  id: string;
  name_en: string;
  name_fa: string;
  priceMonthly: number;
  currency: string;
  tagline_en: string;
  tagline_fa: string;
  features: unknown;
  isPopular: boolean;
  ctaText_en: string;
  ctaText_fa: string;
  ctaUrl: string;
};

export type ServiceCategory = {
  id: string;
  name_en: string;
  name_fa: string;
  summary_en: string;
  summary_fa: string;
  iconName: string;
  slug: string;
};

export type WhyUsItem = {
  id: string;
  title_en: string;
  title_fa: string;
  body_en: string;
  body_fa: string;
  imageUrl: string;
};

export type VideoSection = {
  id: string;
  title_en: string;
  title_fa: string;
  body_en: string;
  body_fa: string;
  embedUrl: string;
};

export type PracticalFeature = {
  id: string;
  title_en: string;
  title_fa: string;
  body_en: string;
  body_fa: string;
};

export type Brand = {
  id: string;
  name: string;
  logoUrl: string;
};

export type Testimonial = {
  id: string;
  personName: string;
  role_en: string;
  role_fa: string;
  company_en: string;
  company_fa: string;
  quote_en: string;
  quote_fa: string;
};

export type Faq = {
  id: string;
  question_en: string;
  question_fa: string;
  answer_en: string;
  answer_fa: string;
};
