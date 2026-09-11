import type { Service } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

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
    name: siteConfig.name,
    image: `${siteConfig.siteUrl}/images/hero-office.jpg`,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
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

export function getFaqJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
