import type { Faq } from "@/lib/faqs";
import { doctor, siteConfig } from "@/lib/site-config";

const dayToSchema: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

function parseTimeRange(time: string): { opens: string; closes: string } | null {
  const match = time.match(
    /^(\d{1,2}):(\d{2})\s*(AM|PM)\s*[–-]\s*(\d{1,2}):(\d{2})\s*(AM|PM)$/i
  );
  if (!match) return null;

  const to24Hour = (hour: string, minute: string, meridiem: string) => {
    let h = parseInt(hour, 10) % 12;
    if (meridiem.toUpperCase() === "PM") h += 12;
    return `${h.toString().padStart(2, "0")}:${minute}`;
  };

  return {
    opens: to24Hour(match[1], match[2], match[3]),
    closes: to24Hour(match[4], match[5], match[6]),
  };
}

export function getLocalBusinessJsonLd() {
  const openingHoursSpecification = siteConfig.hours
    .map((entry) => {
      const range = parseTimeRange(entry.time);
      if (!range || !dayToSchema[entry.day]) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayToSchema[entry.day],
        opens: range.opens,
        closes: range.closes,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteConfig.siteUrl}/#dentist`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description:
      "Friendly, family dentistry in Orange, CA with Dr. Grishma Shah — restorative care, root canals, implants, dentures, periodontal care and routine cleanings.",
    image: `${siteConfig.siteUrl}/images/hero-office.jpg`,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    hasMap: siteConfig.mapsUrl,
    isAcceptingNewPatients: true,
    paymentAccepted: "Cash, Credit Card",
    areaServed: siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "California" },
    })),
    sameAs: [...siteConfig.sameAs],
    employee: {
      "@type": "Person",
      name: siteConfig.doctorName,
      honorificPrefix: "Dr.",
      honorificSuffix: "DDS",
      jobTitle: "Dentist",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification,
  };
}

export function getFaqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function getDoctorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/about#doctor`,
    name: siteConfig.doctorName,
    honorificPrefix: "Dr.",
    honorificSuffix: "DDS",
    jobTitle: "Dentist",
    image: `${siteConfig.siteUrl}/images/doctor.jpeg`,
    url: `${siteConfig.siteUrl}/about`,
    worksFor: { "@id": `${siteConfig.siteUrl}/#dentist` },
    alumniOf: doctor.education.map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.school,
    })),
    ...(doctor.memberships.length > 0 && {
      memberOf: doctor.memberships.map((name) => ({
        "@type": "Organization",
        name,
      })),
    }),
    ...(doctor.languages.length > 0 && { knowsLanguage: doctor.languages }),
  };
}
