import type { Metadata } from "next";
import { CreditCard, HandCoins, Wallet } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/site/contact-form";
import { FeatureCard } from "@/components/site/feature-card";
import { PageHeading, SectionHeading } from "@/components/site/heading";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { insuranceProviders } from "@/lib/insurance";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Insurance & Payment",
  description: `Insurance and payment options at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  path: "/insurance",
});

const paymentOptions = [
  {
    icon: Wallet,
    title: "Cash & major credit cards",
    description: "We accept cash, Visa, Mastercard, American Express, and Discover.",
  },
  {
    icon: HandCoins,
    title: "Flexible payment plans",
    description:
      "If your treatment isn't fully covered, ask us about spreading the cost over time.",
  },
  {
    icon: CreditCard,
    title: "No insurance? No problem",
    description:
      "We want every patient to get the care they need — call us to talk through what works for your budget.",
  },
];

export default function InsurancePage() {
  return (
    <Container className="py-16">
      <div className="max-w-2xl space-y-4">
        <PageHeading>Insurance & Payment</PageHeading>
        <p className="text-muted-foreground">
          Getting the care you need shouldn&apos;t be complicated. Here&apos;s
          how insurance and payment work at {siteConfig.name}, whether
          you&apos;re covered or paying out of pocket.
        </p>
      </div>

      <section aria-labelledby="insurance-heading" className="mt-16 space-y-6">
        <div>
          <SectionHeading id="insurance-heading">
            Insurance we accept
          </SectionHeading>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            We&apos;re in-network with many major dental PPO plans, including:
          </p>
        </div>

        <LogoMarquee providers={insuranceProviders} />

        <p className="text-sm text-muted-foreground">
          Don&apos;t see your plan listed? Coverage varies, so give us a call
          and we&apos;ll confirm your specific benefits before your visit.
        </p>
      </section>

      <section aria-labelledby="payment-heading" className="mt-16 space-y-6">
        <SectionHeading id="payment-heading">
          Paying without insurance
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-3">
          {paymentOptions.map((option) => (
            <FeatureCard key={option.title} {...option} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="contact-heading" className="mt-16 max-w-xl space-y-6">
        <SectionHeading id="contact-heading">
          Still have questions?
        </SectionHeading>
        <p className="text-sm text-muted-foreground">
          Send us a message and we&apos;ll help you figure out your options
          before you come in.
        </p>

        <ContactForm />
      </section>
    </Container>
  );
}
