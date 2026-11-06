import { Phone } from "lucide-react";

import { BookAppointmentButton } from "@/components/site/book-appointment-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

// The one call-to-action card used across the site (home, about, services).
export function VisitCard({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-wrap items-center gap-3 rounded-lg border border-border p-6 ${className ?? ""}`}
    >
      <p className="mr-auto font-medium text-foreground">
        New to {siteConfig.shortName}? We&apos;d love to meet you.
      </p>
      <Button
        variant="outline"
        size="lg"
        nativeButton={false}
        render={<a href={siteConfig.phoneHref} />}
      >
        <Phone />
        Call {siteConfig.phone}
      </Button>
      <BookAppointmentButton size="lg" />
    </section>
  );
}
