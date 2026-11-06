"use client";

import { Mail, Menu, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SunkistLogo } from "@/components/icons/sunkist-logo";
import { Container } from "@/components/layout/container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
import { cn } from "@/lib/utils";
import { isNavGroup, navLinks, siteConfig, type NavLink } from "@/lib/site-config";

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

// Top-level nav items: plain text, no box/background/rounded corners.
// Resting text is slightly lighter; hover/active/open darkens it.
const navItemClass = [
  "rounded-none px-3.5 text-foreground/70 transition-colors",
  "hover:bg-transparent focus:bg-transparent hover:text-foreground focus:text-foreground",
  "data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent data-active:text-foreground",
  "data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-popup-open:text-foreground",
  "data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent data-open:text-foreground",
].join(" ");

function useIsActive(href: string) {
  const pathname = usePathname();
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function DesktopNavLink({ href, label }: NavLink) {
  const isActive = useIsActive(href);
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        render={<Link href={href} />}
        active={isActive}
        className={cn(navigationMenuTriggerStyle(), navItemClass)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function DesktopNavGroup({ label, items }: { label: string; items: NavLink[] }) {
  const pathname = usePathname();
  const isActive = items.some((item) => pathname.startsWith(item.href));

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(navigationMenuTriggerStyle(), navItemClass)}
        data-active={isActive || undefined}
      >
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-56 gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <NavigationMenuLink render={<Link href={item.href} />}>
                {item.label}
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={siteConfig.name}>
          <SunkistLogo />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-3">
            {navLinks.map((entry) =>
              isNavGroup(entry) ? (
                <DesktopNavGroup key={entry.label} label={entry.label} items={entry.items} />
              ) : (
                <DesktopNavLink key={entry.href} href={entry.href} label={entry.label} />
              )
            )}
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
              {navLinks.map((entry) =>
                isNavGroup(entry) ? (
                  <Accordion key={entry.label}>
                    <AccordionItem value={entry.label} className="border-none">
                      <AccordionTrigger className="p-0 text-sm font-medium text-muted-foreground hover:no-underline">
                        {entry.label}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-3 pt-3 pl-3">
                        {entry.items.map((item) => (
                          <SheetClose
                            key={item.href}
                            nativeButton={false}
                            render={
                              <Link
                                href={item.href}
                                className="text-sm text-muted-foreground"
                              />
                            }
                          >
                            {item.label}
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <SheetClose
                    key={entry.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={entry.href}
                        className="text-sm font-medium text-muted-foreground"
                      />
                    }
                  >
                    {entry.label}
                  </SheetClose>
                )
              )}
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
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
