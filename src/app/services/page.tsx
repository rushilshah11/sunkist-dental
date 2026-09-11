import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { serviceCategories, services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const description = `Restorative, preventive, and family dental services at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.state}.`;

export const metadata: Metadata = {
  title: "Services",
  description,
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Services
      </h1>
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
              <h2
                id={`${category}-heading`}
                className="text-xl font-semibold tracking-tight text-foreground"
              >
                {category}
              </h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {categoryServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block rounded-lg border border-border p-4 transition-colors hover:border-primary hover:bg-muted/40"
                    >
                      <p className="font-medium text-foreground">
                        {service.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {service.summary}
                      </p>
                    </Link>
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
