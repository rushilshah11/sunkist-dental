import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookAppointmentButton } from "@/components/site/book-appointment-button";
import type { Service } from "@/lib/services";

export function ServiceContent({ service }: { service: Service }) {
  return (
    <div className="space-y-16">
      <p className="max-w-2xl text-lg text-muted-foreground">
        {service.overview}
      </p>

      <section aria-labelledby="when-needed-heading" className="space-y-4">
        <h2
          id="when-needed-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Signs you may need this
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {service.whenNeeded.map((sign) => (
            <li
              key={sign}
              className="rounded-lg border border-border p-4 text-sm text-muted-foreground"
            >
              {sign}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="what-to-expect-heading" className="space-y-4">
        <h2
          id="what-to-expect-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          What to expect
        </h2>
        <ol className="grid gap-4 sm:grid-cols-2">
          {service.whatToExpect.map((step, index) => (
            <li key={step.title} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                {index + 1}
              </span>
              <div>
                <p className="font-medium text-foreground">{step.title}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="faq-heading" className="space-y-4">
        <h2
          id="faq-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Frequently asked questions
        </h2>
        <Accordion className="max-w-2xl">
          {service.faqs.map((faq) => (
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
      </section>

      <BookAppointmentButton size="lg" />
    </div>
  );
}
