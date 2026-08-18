import { House, Mail, Stethoscope, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navIcons: Record<string, LucideIcon> = {
  "/": House,
  "/services": Stethoscope,
  "/about": UserRound,
  "/contact": Mail,
};
