import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Thanks for reaching out
      </h1>
      <p className="mx-auto mt-2 max-w-md text-muted-foreground">
        We received your message and will get back to you soon.
      </p>
      <Button className="mt-8" nativeButton={false} render={<Link href="/" />}>
        Back to Home
      </Button>
    </Container>
  );
}
