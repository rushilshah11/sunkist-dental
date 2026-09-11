import { Mail, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";

import { FacebookIcon, LinkedinIcon } from "@/components/icons/social-icons";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { googleReviews } from "@/lib/reviews";
import { navLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
            {siteConfig.name}
          </p>
          <p className="text-sm text-muted-foreground">{siteConfig.doctorName}</p>
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
            Contact
          </p>
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

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
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
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href={googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <Badge variant="secondary" className="gap-1">
                <Star className="size-3 fill-current" />
                {googleReviews.rating}
              </Badge>
              {googleReviews.count} Google reviews
            </Link>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                nativeButton={false}
                render={
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  />
                }
              >
                <FacebookIcon className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                nativeButton={false}
                render={
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  />
                }
              >
                <LinkedinIcon className="size-4" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
