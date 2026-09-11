import type { Metadata } from "next";
import { CreditCard, HandCoins, Wallet } from "lucide-react";

import { Container } from "@/components/layout/container";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { insuranceProviders } from "@/lib/insurance";
import { siteConfig } from "@/lib/site-config";

const description = `Insurance and payment options at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.state}.`;

export const metadata: Metadata = {
  title: "Insurance & Payment",
  description,
  openGraph: {
    title: `Insurance & Payment | ${siteConfig.name}`,
    description,
    url: "/insurance",
  },
};

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
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Insurance & Payment
        </h1>
        <p className="text-muted-foreground">
          Getting the care you need shouldn&apos;t be complicated. Here&apos;s
          how insurance and payment work at {siteConfig.name}, whether
          you&apos;re covered or paying out of pocket.
        </p>
      </div>

      <section aria-labelledby="insurance-heading" className="mt-16 space-y-6">
        <div>
          <h2
            id="insurance-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Insurance we accept
          </h2>
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
        <h2
          id="payment-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Paying without insurance
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {paymentOptions.map(({ icon: Icon, title, description }) => (
            <li key={title} className="space-y-2 rounded-lg border border-border p-4">
              <Icon className="size-5 text-primary" />
              <p className="font-medium text-foreground">{title}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="contact-heading" className="mt-16 max-w-xl space-y-6">
        <h2
          id="contact-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Still have questions?
        </h2>
        <p className="text-sm text-muted-foreground">
          Send us a message and we&apos;ll help you figure out your options
          before you come in.
        </p>

        <form
          name="insurance-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="insurance-contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
            </label>
          </p>

          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" required />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="patientType">Patient type</Label>
            <NativeSelect id="patientType" name="patientType" defaultValue="New Patient" className="w-full">
              <NativeSelectOption value="New Patient">New Patient</NativeSelectOption>
              <NativeSelectOption value="Existing Patient">Existing Patient</NativeSelectOption>
              <NativeSelectOption value="Other">Other</NativeSelectOption>
            </NativeSelect>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" name="message" rows={4} required />
          </div>

          <Button type="submit" size="lg">
            Send Message
          </Button>
        </form>
      </section>
    </Container>
  );
}
