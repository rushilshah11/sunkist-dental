import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generalFaqs } from "@/lib/faqs";
import { getFaqJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

const description = `Answers to common questions about visiting ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.state}.`;

export const metadata: Metadata = {
  title: "FAQ",
  description,
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description,
    url: "/faq",
  },
};

export default function FaqPage() {
  const faqJsonLd = getFaqJsonLd(generalFaqs);

  return (
    <Container className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Frequently Asked Questions
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Answers to the questions we hear most from new and existing patients.
      </p>

      <Accordion className="mt-8 max-w-2xl">
        {generalFaqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-foreground">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
