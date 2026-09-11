"use client";

import { Mail, Menu, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { BookAppointmentButton } from "@/components/site/book-appointment-button";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
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

function useIsActive(href: string) {
  const pathname = usePathname();
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const isActive = useIsActive(href);
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        render={<Link href={href} />}
        active={isActive}
        className={navigationMenuTriggerStyle()}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold text-foreground">
          {siteConfig.name}
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <DesktopNavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-1 md:flex">
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
          <BookAppointmentButton className="ml-2" />
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4 border-t border-border p-4">
              {quickContacts.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
              <BookAppointmentButton className="w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
