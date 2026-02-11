import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("admin1234", 10);

  await prisma.user.upsert({
    where: { email: "admin@meshkinhost.com" },
    update: {},
    create: { email: "admin@meshkinhost.com", passwordHash }
  });

  await prisma.siteSettings.create({
    data: {
      brandName: "MeshkinHost",
      logoUrl: "/file.svg",
      primaryColor: "#0f172a",
      secondaryColor: "#1d4ed8",
      accentColor: "#f97316",
      heroBackgroundUrl: "/globe.svg",
      contactEmail: "support@meshkinhost.com",
      supportPhone: "+1 (555) 201-9988"
    }
  });

  await prisma.hero.create({
    data: {
      title_en: "Enterprise hosting for teams that ship fast",
      title_fa: "هاست قدرتمند برای تیم‌هایی که سریع تحویل می‌دهند",
      subtitle_en:
        "Deploy websites, apps, and APIs with premium uptime, global coverage, and 24/7 expert support.",
      subtitle_fa:
        "وب‌سایت، اپ و API خود را با آپتایم بالا، پوشش جهانی و پشتیبانی ۲۴/۷ مستقر کنید.",
      ctaText_en: "Get Started",
      ctaText_fa: "شروع کنید",
      ctaUrl: "/pricing",
      backgroundUrl: "/globe.svg"
    }
  });

  await prisma.feature.createMany({
    data: [
      {
        title_en: "99.99% Uptime",
        title_fa: "آپتایم ۹۹.۹۹٪",
        body_en: "Redundant infrastructure with SLA-backed reliability.",
        body_fa: "زیرساخت افزونه با SLA تضمین‌شده.",
        iconName: "shield",
        sortOrder: 1
      },
      {
        title_en: "Global Edge",
        title_fa: "شبکه جهانی",
        body_en: "Serve content from 45+ locations worldwide.",
        body_fa: "محتوا را از بیش از ۴۵ موقعیت جهانی ارائه کنید.",
        iconName: "globe",
        sortOrder: 2
      },
      {
        title_en: "Instant Scale",
        title_fa: "مقیاس‌پذیری فوری",
        body_en: "Upgrade resources in seconds with zero downtime.",
        body_fa: "ارتقای منابع در چند ثانیه بدون قطعی.",
        iconName: "zap",
        sortOrder: 3
      }
    ]
  });

  await prisma.plan.createMany({
    data: [
      {
        name_en: "Starter",
        name_fa: "استارتر",
        priceMonthly: 12,
        priceYearly: 120,
        currency: "USD",
        tagline_en: "Perfect for new projects",
        tagline_fa: "مناسب برای شروع پروژه‌ها",
        features: ["1 website", "10 GB SSD", "Free SSL"],
        isPopular: false,
        ctaText_en: "Choose Starter",
        ctaText_fa: "انتخاب استارتر",
        ctaUrl: "/contact",
        sortOrder: 1
      },
      {
        name_en: "Growth",
        name_fa: "رشد",
        priceMonthly: 29,
        priceYearly: 290,
        currency: "USD",
        tagline_en: "For scaling teams",
        tagline_fa: "برای تیم‌های رو‌به‌رشد",
        features: ["5 websites", "50 GB NVMe", "Daily backup"],
        isPopular: true,
        ctaText_en: "Choose Growth",
        ctaText_fa: "انتخاب رشد",
        ctaUrl: "/contact",
        sortOrder: 2
      },
      {
        name_en: "Enterprise",
        name_fa: "سازمانی",
        priceMonthly: 79,
        priceYearly: 790,
        currency: "USD",
        tagline_en: "Mission-critical workloads",
        tagline_fa: "مناسب بارهای حیاتی",
        features: ["Unlimited sites", "200 GB NVMe", "Dedicated support"],
        isPopular: false,
        ctaText_en: "Contact Sales",
        ctaText_fa: "تماس با فروش",
        ctaUrl: "/contact",
        sortOrder: 3
      }
    ]
  });

  await prisma.serviceCategory.createMany({
    data: [
      {
        name_en: "Web Hosting",
        name_fa: "هاست وب",
        slug: "web-hosting",
        summary_en: "Fast, secure shared hosting for modern sites.",
        summary_fa: "هاست اشتراکی سریع و امن برای وب‌سایت‌های مدرن.",
        iconName: "globe",
        imageUrl: "/window.svg",
        sortOrder: 1
      },
      {
        name_en: "Server Hosting",
        name_fa: "هاست سرور",
        slug: "server-hosting",
        summary_en: "Dedicated and VPS solutions with full control.",
        summary_fa: "سرور اختصاصی و VPS با کنترل کامل.",
        iconName: "server",
        imageUrl: "/file.svg",
        sortOrder: 2
      },
      {
        name_en: "SSL Certificates",
        name_fa: "گواهی SSL",
        slug: "ssl",
        summary_en: "Trusted certificates to secure your brand.",
        summary_fa: "گواهی‌های معتبر برای امنیت برند شما.",
        iconName: "lock",
        imageUrl: "/globe.svg",
        sortOrder: 3
      }
    ]
  });

  await prisma.whyUsItem.createMany({
    data: [
      {
        title_en: "Security first",
        title_fa: "امنیت اولویت است",
        body_en: "WAF, DDoS protection, and managed patching.",
        body_fa: "محافظت DDoS، فایروال و وصله‌های مدیریتی.",
        imageUrl: "/globe.svg",
        sortOrder: 1
      },
      {
        title_en: "Expert support",
        title_fa: "پشتیبانی متخصص",
        body_en: "Talk to real engineers in minutes.",
        body_fa: "در چند دقیقه با مهندسان واقعی صحبت کنید.",
        imageUrl: "/window.svg",
        sortOrder: 2
      }
    ]
  });

  await prisma.videoSection.create({
    data: {
      title_en: "See MeshkinHost in action",
      title_fa: "MeshkinHost را در عمل ببینید",
      body_en: "A quick tour of how we keep your services online.",
      body_fa: "نگاهی سریع به نحوه حفظ پایداری سرویس‌ها.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      posterUrl: "/globe.svg"
    }
  });

  await prisma.practicalFeature.createMany({
    data: [
      {
        title_en: "One-click migrations",
        title_fa: "انتقال با یک کلیک",
        body_en: "Move from any provider without downtime.",
        body_fa: "انتقال بدون قطعی از هر ارائه‌دهنده‌ای.",
        iconName: "rocket",
        sortOrder: 1
      },
      {
        title_en: "Realtime monitoring",
        title_fa: "مانیتورینگ لحظه‌ای",
        body_en: "Instant alerts and health dashboards.",
        body_fa: "هشدارهای لحظه‌ای و داشبورد سلامت.",
        iconName: "activity",
        sortOrder: 2
      }
    ]
  });

  await prisma.brand.createMany({
    data: [
      {
        name: "NovaLabs",
        logoUrl: "/vercel.svg",
        websiteUrl: "https://example.com",
        sortOrder: 1
      },
      {
        name: "Helios",
        logoUrl: "/next.svg",
        websiteUrl: "https://example.com",
        sortOrder: 2
      }
    ]
  });

  await prisma.testimonial.createMany({
    data: [
      {
        personName: "Ava Rodriguez",
        role_en: "CTO",
        role_fa: "مدیر فنی",
        company_en: "Northwind",
        company_fa: "نورث‌ویند",
        quote_en: "We moved 40 services in a weekend with zero downtime.",
        quote_fa: "۴۰ سرویس را در یک آخر هفته بدون قطعی منتقل کردیم.",
        avatarUrl: "/file.svg",
        sortOrder: 1
      },
      {
        personName: "Mina K.",
        role_en: "Founder",
        role_fa: "بنیان‌گذار",
        company_en: "Sepehr",
        company_fa: "سپهر",
        quote_en: "Support is fast, technical, and proactive.",
        quote_fa: "پشتیبانی سریع، فنی و پیشگیرانه است.",
        avatarUrl: "/window.svg",
        sortOrder: 2
      }
    ]
  });

  await prisma.faq.createMany({
    data: [
      {
        question_en: "Do you offer free migrations?",
        question_fa: "آیا انتقال رایگان دارید؟",
        answer_en: "Yes, our team handles end-to-end migrations.",
        answer_fa: "بله، تیم ما انتقال کامل را انجام می‌دهد.",
        sortOrder: 1
      },
      {
        question_en: "Can I upgrade later?",
        question_fa: "آیا امکان ارتقا وجود دارد؟",
        answer_en: "You can upgrade or downgrade at any time.",
        answer_fa: "هر زمان می‌توانید ارتقا یا تنزل دهید.",
        sortOrder: 2
      }
    ]
  });

  await prisma.pageSectionOrder.createMany({
    data: [
      { pageSlug: "home", sectionKey: "hero", sortOrder: 1, isActive: true },
      { pageSlug: "home", sectionKey: "features", sortOrder: 2, isActive: true },
      { pageSlug: "home", sectionKey: "plans", sortOrder: 3, isActive: true },
      { pageSlug: "home", sectionKey: "services", sortOrder: 4, isActive: true },
      { pageSlug: "home", sectionKey: "why-us", sortOrder: 5, isActive: true },
      { pageSlug: "home", sectionKey: "video", sortOrder: 6, isActive: true },
      { pageSlug: "home", sectionKey: "animation", sortOrder: 7, isActive: true },
      { pageSlug: "home", sectionKey: "practical", sortOrder: 8, isActive: true },
      { pageSlug: "home", sectionKey: "brands", sortOrder: 9, isActive: true },
      { pageSlug: "home", sectionKey: "testimonials", sortOrder: 10, isActive: true },
      { pageSlug: "home", sectionKey: "faq", sortOrder: 11, isActive: true }
    ]
  });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
