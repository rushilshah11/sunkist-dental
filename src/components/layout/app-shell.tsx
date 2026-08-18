import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delay={200}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
