import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { PageHeading, SectionHeading } from "@/components/site/heading";
import { JsonLdScript } from "@/components/site/json-ld-script";
import { ServiceArea } from "@/components/site/service-area";
import { VisitCard } from "@/components/site/visit-card";
import { getDoctorJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { doctor, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "About Dr. Grishma Shah",
  description: `Meet ${siteConfig.doctorName}, a Loma Linda-trained family dentist in Orange, CA with ${doctor.yearsInPractice} years of experience, known for patient, honest, detail-oriented care.`,
  path: "/about",
  image: { url: "/images/doctor.jpeg", width: 500, height: 667 },
});

export default function AboutPage() {
  return (
    <Container className="space-y-16 py-16">
      <JsonLdScript data={getDoctorJsonLd()} />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="space-y-6">
          <PageHeading className="sm:text-4xl">
            Meet {siteConfig.doctorName}
          </PageHeading>
          <p className="text-lg text-foreground">
            Family dentist in {siteConfig.address.city}, CA with{" "}
            {doctor.yearsInPractice} years of experience.
          </p>
          <p className="text-muted-foreground">
            Dr. Shah is passionate about giving every patient the best possible
            care. Her eye for detail, dedication to quality, and warm,
            easygoing manner set her apart. She believes patients deserve to
            be fully informed about every step of a procedure beforehand.
          </p>
          <p className="text-muted-foreground">
            She makes a point of getting to know her patients, and it shows:
            for years she&apos;s treated generations of the same families, who
            hold her in the highest regard. Outside the office, she spends time
            with her two kids, plays the piano, and never misses an episode of
            Shark Tank.
          </p>

          <section aria-labelledby="credentials-heading" className="space-y-4 pt-4">
            <SectionHeading id="credentials-heading">
              Education &amp; credentials
            </SectionHeading>
            <ul className="max-w-2xl space-y-4">
              {doctor.education.map((entry) => (
                <li key={entry.school}>
                  <p className="font-medium text-foreground">{entry.school}</p>
                  <p className="text-sm text-muted-foreground">
                    {[entry.detail, entry.years].filter(Boolean).join(" · ")}
                  </p>
                </li>
              ))}
              {doctor.licenseNumber && (
                <li>
                  <p className="font-medium text-foreground">
                    Licensed dentist in California
                  </p>
                  <p className="text-sm text-muted-foreground">
                    License #{doctor.licenseNumber}
                  </p>
                </li>
              )}
              {doctor.memberships.length > 0 && (
                <li>
                  <p className="font-medium text-foreground">
                    Professional memberships
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {doctor.memberships.join(" · ")}
                  </p>
                </li>
              )}
            </ul>
          </section>

          <ServiceArea />
        </div>
        <div className="overflow-hidden rounded-lg border border-border lg:sticky lg:top-24">
          <Image
            src="/images/doctor.jpeg"
            alt={`${siteConfig.doctorName}, family dentist in ${siteConfig.address.city}, CA`}
            width={500}
            height={667}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      <VisitCard />
    </Container>
  );
}
