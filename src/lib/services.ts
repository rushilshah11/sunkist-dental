export type Service = {
  slug: string;
  title: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "root-canals",
    title: "Root Canal Therapy",
    summary: "Relieve infection and pain while saving the natural tooth.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    summary: "A permanent, natural-looking replacement for missing teeth.",
  },
  {
    slug: "dentures",
    title: "Dentures & Partials",
    summary: "Custom-fit full and partial dentures, plus repairs.",
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    summary: "Restore damaged teeth or replace gaps with durable, natural results.",
  },
  {
    slug: "fillings",
    title: "Tooth-Colored Fillings",
    summary: "Composite fillings that blend in and hold up to daily use.",
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning & Prevention",
    summary: "Routine cleanings and checkups to keep small issues from growing.",
  },
  {
    slug: "extractions",
    title: "Tooth Extractions",
    summary: "Simple extractions performed with care, including wisdom teeth.",
  },
];
