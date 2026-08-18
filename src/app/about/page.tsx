import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Meet {siteConfig.doctorName}
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Full bio, team, and patient testimonials are coming in the next phase.
      </p>
    </Container>
  );
}
