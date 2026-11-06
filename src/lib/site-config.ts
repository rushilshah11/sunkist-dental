export const siteConfig = {
  // Full listing name — matches Google Business Profile. Use `shortName` in
  // running prose so sentences don't repeat the doctor's name.
  name: "Sunkist Dental Office: Dr. Grishma Shah",
  shortName: "Sunkist Dental",
  doctorName: "Dr. Grishma Shah",
  siteUrl: "https://sunkistdental.com",
  phone: "(714) 533-9670",
  phoneHref: "tel:+17145339670",
  phoneE164: "+17145339670",
  email: "sunkistdental@yahoo.com",
  address: {
    line1: "1234 W Chapman Ave, Suite 106",
    city: "Orange",
    state: "CA",
    zip: "92868",
  },
  geo: {
    latitude: 33.7875189,
    longitude: -117.8685795,
  },
  mapsUrl:
    "https://www.google.com/maps/place/Sunkist+Dental+Office:+Dr.+Grishma+Shah/@33.7875189,-117.8685795,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcd7a7cf60ce2d:0xf5d0edb015e84cfd!8m2!3d33.7875145!4d-117.8660046!16s%2Fg%2F1tr17wcn",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Sunkist+Dental+Office+1234+W+Chapman+Ave+Suite+106+Orange+CA+92868&output=embed",
  social: {
    facebook: "https://www.facebook.com/sunkistdental/",
    linkedin: "https://www.linkedin.com/in/drgrishmashah/",
  },
  // Profiles that confirm this site and the listings are the same business.
  // Add Yelp, Bing Places, etc. here once the listings are claimed.
  sameAs: [
    "https://www.facebook.com/sunkistdental/",
    "https://www.linkedin.com/in/drgrishmashah/",
    "https://www.healthgrades.com/dentist/dr-grishma-shah-oa4qgdi555",
    "https://www.google.com/maps/place/Sunkist+Dental+Office:+Dr.+Grishma+Shah/@33.7875189,-117.8685795,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcd7a7cf60ce2d:0xf5d0edb015e84cfd!8m2!3d33.7875145!4d-117.8660046!16s%2Fg%2F1tr17wcn",
  ],
  bookingUrl:
    "https://patient.rocks/Dashboard/PatientDashboard/ZGFlN2M3NDUtMWJmYi00MDU5LTk0MmMtZDNmMTBh/MA==",
  newPatientFormsUrl:
    "https://patient.rocks/PatientForm/patient/ZGFlN2M3NDUtMWJmYi00MDU5LTk0MmMtZDNmMTBh",
  serviceAreas: ["Orange", "Anaheim", "Villa Park", "Tustin"],
  hours: [
    { day: "Monday", time: "10:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "10:00 AM – 6:00 PM" },
    { day: "Thursday", time: "Closed" },
    { day: "Friday", time: "10:00 AM – 6:00 PM" },
    { day: "Saturday", time: "By Appointment Only" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export type NavLink = { href: string; label: string };
export type NavGroup = { label: string; items: NavLink[] };
export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

export const navLinks: NavEntry[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    label: "New Patients",
    items: [
      { href: "/insurance", label: "Insurance & Payment" },
      { href: "/new-patient-forms", label: "New Patient Forms" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function flattenNavLinks(entries: NavEntry[]): NavLink[] {
  return entries.flatMap((entry) => (isNavGroup(entry) ? entry.items : [entry]));
}

// Dr. Shah's professional profile. `licenseNumber` and `memberships` are
// intentionally empty: fill them in with REAL details (the license number is
// on her California dental license and verifiable at the Dental Board of
// California's license lookup). The About page hides those lines until set.
export const doctor: {
  yearsInPractice: number;
  education: { school: string; shortSchool: string; detail?: string; years: string }[];
  licenseNumber: string;
  memberships: string[];
  languages: string[];
} = {
  yearsInPractice: 35,
  education: [
    {
      school: "Loma Linda University",
      shortSchool: "Loma Linda University",
      detail: "Doctor of Dental Surgery (DDS)",
      years: "1997 – 1999",
    },
  ],
  licenseNumber: "",
  memberships: [],
  languages: [],
};
