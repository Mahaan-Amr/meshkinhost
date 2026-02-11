"use client";
import { Brand } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import RollingGallery from "@/components/reactbits/RollingGallery";

export function BrandsSection({ brands }: { brands: Brand[] }) {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="section-heading">
          {lang === "fa" ? "برندهای همراه ما" : "Brands Working With Us"}
        </h2>
        <p className="section-subtitle">
          {lang === "fa" ? "مورد اعتماد تیم‌های پیشرو." : "Trusted by top-performing teams."}
        </p>
        <div className="mt-10">
          {brands.filter((brand) => brand.logoUrl).length >= 4 ? (
            <RollingGallery
              items={brands
                .filter((brand) => brand.logoUrl)
                .map((brand) => ({
                  src: brand.logoUrl ?? "",
                  alt: brand.name,
                }))}
              autoplay
              pauseOnHover
            />
          ) : (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {brands.map((brand) => (
                <div key={brand.id} className="card flex items-center justify-center">
                  {brand.logoUrl ? (
                    <img src={brand.logoUrl} alt={brand.name} className="h-10 object-contain" />
                  ) : (
                    <span className="text-sm font-semibold text-slate-500">{brand.name}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
