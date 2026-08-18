"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { services } from "@/lib/services";
import { navLinks, siteConfig } from "@/lib/site-config";

const quickContacts = [
  { label: "Call us", href: siteConfig.phoneHref, icon: Phone, external: false },
  {
    label: "Email us",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Get directions",
    href: siteConfig.mapsUrl,
    icon: MapPin,
    external: true,
  },
] as const;

function getPageTitle(pathname: string): string {
  if (pathname.startsWith("/services/")) {
    const slug = pathname.split("/")[2];
    const service = services.find((entry) => entry.slug === slug);
    if (service) return service.title;
  }

  const navMatch = navLinks.find((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );

  return navMatch?.label ?? siteConfig.name;
}

export function AppHeader() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <h1 className="truncate text-base font-semibold text-foreground sm:text-lg">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-1">
          {quickContacts.map(({ label, href, icon: Icon, external }) => (
            <Tooltip key={label}>
              <TooltipTrigger
                render={
                  <Link
                    href={href}
                    aria-label={label}
                    className={buttonVariants({ variant: "ghost", size: "icon" })}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  />
                }
              >
                <Icon />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </Container>
    </header>
  );
}
