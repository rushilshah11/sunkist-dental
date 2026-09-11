import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHeading, SectionHeading } from "@/components/site/heading";
import { LinkCard } from "@/components/site/link-card";
import { pageMetadata } from "@/lib/metadata";
import { serviceCategories, services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: `Restorative, preventive, and family dental services at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Container className="py-16">
      <PageHeading>Services</PageHeading>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        An overview of the procedures we offer. Select any service to see
        what to expect.
      </p>

      <div className="mt-12 space-y-12">
        {serviceCategories.map((category) => {
          const categoryServices = services.filter(
            (service) => service.category === category
          );
          if (categoryServices.length === 0) return null;

          return (
            <section key={category} aria-labelledby={`${category}-heading`}>
              <SectionHeading id={`${category}-heading`}>
                {category}
              </SectionHeading>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {categoryServices.map((service) => (
                  <li key={service.slug}>
                    <LinkCard
                      href={`/services/${service.slug}`}
                      title={service.title}
                      description={service.summary}
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
