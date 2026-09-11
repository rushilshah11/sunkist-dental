import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeading } from "@/components/site/heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Container className="py-24 text-center">
      <PageHeading>Thanks for reaching out</PageHeading>
      <p className="mx-auto mt-2 max-w-md text-muted-foreground">
        We received your message and will get back to you soon.
      </p>
      <Button className="mt-8" nativeButton={false} render={<Link href="/" />}>
        Back to Home
      </Button>
    </Container>
  );
}
