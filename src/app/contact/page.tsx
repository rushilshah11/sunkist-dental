import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="space-y-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Contact Us
      </h1>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-3 text-muted-foreground">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-foreground"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>
              {siteConfig.address.line1}, {siteConfig.address.city},{" "}
              {siteConfig.address.state} {siteConfig.address.zip}
            </span>
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Phone className="size-4 shrink-0" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="size-4 shrink-0" />
            {siteConfig.email}
          </a>
        </div>

        <div className="space-y-1 text-muted-foreground">
          <p className="flex items-center gap-2 font-medium text-foreground">
            <Clock className="size-4" />
            Hours
          </p>
          <ul className="space-y-1">
            {siteConfig.hours.map((entry) => (
              <li key={entry.day} className="flex justify-between gap-4">
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <iframe
          src={siteConfig.mapEmbedUrl}
          title={`Map to ${siteConfig.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-96 w-full"
        />
      </div>
    </Container>
  );
}
