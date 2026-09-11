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
import { Container } from "@/components/layout/container";
import { BookAppointmentButton } from "@/components/site/book-appointment-button";
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
        className={navigationMenuTriggerStyle()}
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
        className={navigationMenuTriggerStyle()}
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
        <Link href="/" className="text-lg font-semibold text-foreground">
          {siteConfig.name}
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
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
              <BookAppointmentButton className="w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
