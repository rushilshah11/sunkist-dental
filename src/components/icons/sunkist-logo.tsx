import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

export function SunkistIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Sunkist Dental"
      className={cn("size-8", className)}
      {...props}
    >
      <path
        d="M12 24 A 12 12 0 0 1 36 24"
        stroke="var(--brand-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="14" r="2.8" fill="var(--brand-gold)" />
      <path
        d="M14 18 C11 20 9 24 9 29 C9 36 12 42 16 42 C19 42 20 37 24 37 C28 37 29 42 32 42 C36 42 39 36 39 29 C39 24 37 20 34 18 C30 15 27 16 24 18 C21 16 18 15 14 18 Z"
        fill="var(--primary)"
      />
      <path
        d="M18 26 Q24 31 30 26"
        stroke="var(--primary-foreground)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SunkistLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <SunkistIcon className="size-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-semibold text-foreground">Sunkist</span>
        <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">
          DENTAL
        </span>
      </span>
    </span>
  );
}
