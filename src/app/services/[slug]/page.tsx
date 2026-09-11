import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHeading } from "@/components/site/heading";
import { JsonLdScript } from "@/components/site/json-ld-script";
import { ServiceContent } from "@/components/site/service-content";
import { getFaqJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
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
  if (!service) {
    return { title: "Service" };
  }

  return pageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const faqJsonLd = getFaqJsonLd(service.faqs);

  return (
    <Container className="py-16">
      <JsonLdScript data={faqJsonLd} />
      <PageHeading>{service.title}</PageHeading>
      <div className="mt-8">
        <ServiceContent service={service} />
      </div>
    </Container>
  );
}
