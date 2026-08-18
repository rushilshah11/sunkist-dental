import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Meet {siteConfig.doctorName}
          </h1>
          <p className="text-muted-foreground">
            Dr. Shah is passionate about giving every patient the best
            possible care. Her eye for detail, dedication to quality, and
            warm, easygoing manner set her apart — and she believes patients
            deserve to be fully informed about every step of a procedure
            beforehand.
          </p>
          <p className="text-muted-foreground">
            She makes a point of getting to know her patients, and it shows —
            for years she&apos;s treated generations of the same families, who
            hold her in the highest regard. Outside the office, she spends
            time with her two kids, plays the piano, and never misses an
            episode of Shark Tank.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <Image
            src="/images/doctor.jpeg"
            alt={siteConfig.doctorName}
            width={500}
            height={667}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
