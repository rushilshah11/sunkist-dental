import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function PageHeading({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-3xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

export function SectionHeading({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}
