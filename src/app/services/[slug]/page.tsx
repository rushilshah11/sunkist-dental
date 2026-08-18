import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
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
  return { title: service?.title ?? "Service" };
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
      <p className="mt-4 max-w-2xl text-muted-foreground">{service.summary}</p>
      <p className="mt-4 text-sm text-muted-foreground">
        Full page content is coming in the next phase.
      </p>
    </Container>
  );
}
