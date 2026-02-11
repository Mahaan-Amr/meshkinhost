import { PublicShell } from "@/components/public-shell";
import { getHomeContent } from "@/lib/content";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PlansSection } from "@/components/sections/plans-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { VideoSection } from "@/components/sections/video-section";
import { AnimationSection } from "@/components/sections/animation-section";
import { PracticalFeaturesSection } from "@/components/sections/practical-features-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import Script from "next/script";

export default async function HomePage() {
  const content = await getHomeContent();

  const sectionMap = {
    hero: <HeroSection hero={content.hero} />,
    features: <FeaturesSection features={content.features} />,
    plans: <PlansSection plans={content.plans} />,
    services: <ServicesSection services={content.services} />,
    "why-us": <WhyUsSection items={content.whyUs} />,
    video: <VideoSection videos={content.videos} />,
    animation: <AnimationSection />,
    practical: <PracticalFeaturesSection items={content.practical} />,
    brands: <BrandsSection brands={content.brands} />,
    testimonials: <TestimonialsSection items={content.testimonials} />,
    faq: <FaqSection items={content.faqs} />
  } as const;

  return (
    <PublicShell>
      <Script
        id="meshkinhost-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MeshkinHost",
            url: "https://meshkinhost.com",
            sameAs: ["https://x.com/meshkinhost"],
            contactPoint: {
              "@type": "ContactPoint",
              email: "support@meshkinhost.com",
              contactType: "customer support"
            }
          })
        }}
      />
      {content.sections.map((section) =>
        section.isActive ? (
          <div key={section.key}>{sectionMap[section.key]}</div>
        ) : null
      )}
    </PublicShell>
  );
}
