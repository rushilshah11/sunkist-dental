import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delay={200}>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </TooltipProvider>
  );
}
