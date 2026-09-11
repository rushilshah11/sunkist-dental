import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { ServiceContent } from "@/components/site/service-content";
import { getFaqJsonLd } from "@/lib/json-ld";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

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
  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const faqJsonLd = getFaqJsonLd(service);

  return (
    <Container className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        {service.title}
      </h1>
      <div className="mt-8">
        <ServiceContent service={service} />
      </div>
    </Container>
  );
}
