import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHeading } from "@/components/site/heading";
import { JsonLdScript } from "@/components/site/json-ld-script";
import { ServiceContent } from "@/components/site/service-content";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
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

  return pageMetadata({
    title: `${service.title} in Orange, CA`,
    description: `${service.summary} Provided by ${siteConfig.doctorName} at ${siteConfig.shortName} in Orange, CA.`,
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
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  return (
    <Container className="py-16">
      <JsonLdScript data={faqJsonLd} />
      <JsonLdScript data={breadcrumbJsonLd} />
      <PageHeading>{service.title}</PageHeading>
      <div className="mt-8">
        <ServiceContent service={service} />
      </div>
    </Container>
  );
}
