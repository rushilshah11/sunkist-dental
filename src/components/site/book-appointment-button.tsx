import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type BookAppointmentButtonProps = Omit<ComponentProps<typeof Button>, "render">;

export function BookAppointmentButton(props: BookAppointmentButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" />
      }
      {...props}
    >
      Book Appointment
    </Button>
  );
}
