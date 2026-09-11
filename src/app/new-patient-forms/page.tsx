import type { Metadata } from "next";
import { ClipboardList, IdCard, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const description = `Complete your new patient paperwork online before your visit to ${siteConfig.name}.`;

export const metadata: Metadata = {
  title: "New Patient Forms",
  description,
  openGraph: {
    title: `New Patient Forms | ${siteConfig.name}`,
    description,
    url: "/new-patient-forms",
  },
};

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
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          New Patient Forms
        </h1>
        <p className="text-muted-foreground">
          Fill out your paperwork online before you arrive, so your first
          visit starts with a conversation instead of a clipboard.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {checklist.map(({ icon: Icon, title, description }) => (
          <li
            key={title}
            className="space-y-2 rounded-lg border border-border p-4"
          >
            <Icon className="size-5 text-primary" />
            <p className="font-medium text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </li>
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
