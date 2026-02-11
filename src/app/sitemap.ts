import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://meshkinhost.com", priority: 1 },
    { url: "https://meshkinhost.com/pricing", priority: 0.8 },
    { url: "https://meshkinhost.com/services", priority: 0.8 },
    { url: "https://meshkinhost.com/about", priority: 0.6 },
    { url: "https://meshkinhost.com/contact", priority: 0.7 },
    { url: "https://meshkinhost.com/faq", priority: 0.6 }
  ];
}
