import { PublicShell } from "@/components/public-shell";
import { prisma } from "@/lib/prisma";
import { ServiceDetailContent } from "@/components/service-detail";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await prisma.serviceCategory.findUnique({ where: { slug: params.slug } });
  if (!service) {
    return { title: "Service | MeshkinHost" };
  }
  return {
    title: `${service.name_en} | MeshkinHost`,
    description: service.summary_en
  };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await prisma.serviceCategory.findUnique({ where: { slug: params.slug } });
  const services = await prisma.serviceCategory.findMany({ where: { isActive: true } });

  if (!service) {
    return (
      <PublicShell>
        <div className="section">
          <div className="container-page">
            <h1 className="text-3xl font-semibold">Service not found</h1>
          </div>
        </div>
      </PublicShell>
    );
  }

  return (
    <PublicShell>
      <ServiceDetailContent service={service} services={services} />
    </PublicShell>
  );
}
