"use client";

import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

type BookAppointmentButtonProps = Omit<ComponentProps<typeof Button>, "onClick">;

// Booking flow isn't chosen yet — CTA stays visible per rebuild_plan.md, wiring comes later.
function handleBookAppointment() {}

export function BookAppointmentButton(props: BookAppointmentButtonProps) {
  return (
    <Button onClick={handleBookAppointment} {...props}>
      Book Appointment
    </Button>
  );
}
