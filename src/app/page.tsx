import Image from "next/image";

import { Container } from "@/components/layout/container";
import { BookAppointmentButton } from "@/components/site/book-appointment-button";
import { Testimonials } from "@/components/site/testimonials";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Container className="py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Your New Smile Starts Here
            </h1>
            <p className="text-lg text-muted-foreground">
              {siteConfig.doctorName} and the Sunkist Dental team provide
              friendly, family dentistry in Orange, CA.
            </p>
            <BookAppointmentButton size="lg" />
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/hero-office.jpg"
              alt="Sunkist Dental office"
              width={1600}
              height={1068}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </Container>

      <Container className="pb-24">
        <Testimonials />
      </Container>
    </>
  );
}
