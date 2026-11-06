import { MapPin } from "lucide-react";

import { SectionHeading } from "@/components/site/heading";
import { siteConfig } from "@/lib/site-config";

export function ServiceArea({ id = "service-area-heading" }: { id?: string }) {
  const cities = siteConfig.serviceAreas;
  const list = `${cities.slice(0, -1).join(", ")}, and ${cities[cities.length - 1]}`;

  return (
    <section aria-labelledby={id} className="space-y-3">
      <SectionHeading id={id}>Areas we serve</SectionHeading>
      <p className="flex max-w-2xl items-start gap-2 text-muted-foreground">
        <MapPin className="mt-1 size-4 shrink-0" />
        <span>
          {siteConfig.shortName} is based on W Chapman Ave in{" "}
          {siteConfig.address.city} and welcomes patients from {list}, as well
          as the surrounding Orange County communities.
        </span>
      </p>
    </section>
  );
}
