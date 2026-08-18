import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Services
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        An overview of the procedures we offer. Full descriptions are on their
        way.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="block rounded-lg border border-border p-4 transition-colors hover:border-primary hover:bg-muted/40"
            >
              <p className="font-medium text-foreground">{service.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {service.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
