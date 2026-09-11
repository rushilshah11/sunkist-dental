import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHeading } from "@/components/site/heading";
import { JsonLdScript } from "@/components/site/json-ld-script";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generalFaqs } from "@/lib/faqs";
import { getFaqJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: `Answers to common questions about visiting ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = getFaqJsonLd(generalFaqs);

  return (
    <Container className="py-16">
      <JsonLdScript data={faqJsonLd} />
      <PageHeading>Frequently Asked Questions</PageHeading>
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
