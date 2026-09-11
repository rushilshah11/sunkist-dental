export type InsuranceProvider = {
  name: string;
  logo: string;
};

// Placeholder list of common major dental PPO providers — not yet confirmed
// against what Sunkist Dental actually accepts. See backlog.md.
export const insuranceProviders: InsuranceProvider[] = [
  { name: "Aetna", logo: "/images/insurance/aetna.svg" },
  { name: "Anthem Blue Cross", logo: "/images/insurance/anthem.svg" },
  { name: "Cigna", logo: "/images/insurance/cigna.svg" },
  { name: "Delta Dental", logo: "/images/insurance/delta-dental.svg" },
  { name: "Guardian", logo: "/images/insurance/guardian.svg" },
  { name: "Humana", logo: "/images/insurance/humana.svg" },
  { name: "MetLife", logo: "/images/insurance/metlife.svg" },
  { name: "Principal", logo: "/images/insurance/principal.svg" },
  { name: "UnitedHealthcare", logo: "/images/insurance/unitedhealthcare.svg" },
  { name: "Sun Life", logo: "/images/insurance/sun-life.svg" },
];
