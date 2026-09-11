import type { Metadata } from "next";
import { ClipboardList, IdCard, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FeatureCard } from "@/components/site/feature-card";
import { PageHeading } from "@/components/site/heading";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "New Patient Forms",
  description: `Complete your new patient paperwork online before your visit to ${siteConfig.name}.`,
  path: "/new-patient-forms",
});

const checklist = [
  {
    icon: IdCard,
    title: "A photo ID",
    description: "Driver's license, passport, or another government-issued ID.",
  },
  {
    icon: ShieldCheck,
    title: "Your insurance card",
    description: "If you have dental insurance, having your card handy speeds things up.",
  },
  {
    icon: ClipboardList,
    title: "A few minutes",
    description:
      "Most patients finish their paperwork online in under 10 minutes.",
  },
];

export default function NewPatientFormsPage() {
  return (
    <Container className="py-16">
      <div className="max-w-2xl space-y-4">
        <PageHeading>New Patient Forms</PageHeading>
        <p className="text-muted-foreground">
          Fill out your paperwork online before you arrive, so your first
          visit starts with a conversation instead of a clipboard.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {checklist.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </ul>

      <Button
        size="lg"
        className="mt-10"
        nativeButton={false}
        render={
          <a
            href={siteConfig.newPatientFormsUrl}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
      >
        Complete New Patient Forms
      </Button>
    </Container>
  );
}
