import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { ServiceContent } from "@/components/site/service-content";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  return {
    title: service?.title ?? "Service",
    description: service?.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        {service.title}
      </h1>
      <div className="mt-8">
        <ServiceContent service={service} />
      </div>
    </Container>
  );
}
