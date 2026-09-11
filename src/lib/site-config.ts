export const siteConfig = {
  name: "Sunkist Dental",
  doctorName: "Dr. Grishma Shah",
  siteUrl: "https://sunkistdental.com",
  phone: "(714) 533-9670",
  phoneHref: "tel:+17145339670",
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

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
