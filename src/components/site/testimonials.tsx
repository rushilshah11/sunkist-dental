import { Star } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { googleReviews } from "@/lib/reviews";
import { testimonials } from "@/lib/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="testimonials-heading"
          className="text-2xl font-semibold tracking-tight text-foreground"
        >
          What our patients say
        </h2>

        <Link
          href={googleReviews.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <Badge variant="secondary" className="gap-1">
            <Star className="size-3 fill-brand-gold text-brand-gold" />
            {googleReviews.rating}
          </Badge>
          {googleReviews.count} Google reviews
        </Link>
      </div>

      <Carousel className="mt-8" opts={{ align: "start" }}>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              className="sm:basis-1/2 lg:basis-1/3"
            >
              <figure className="flex h-full flex-col justify-between gap-4 rounded-lg border border-border p-6">
                <blockquote className="text-sm text-muted-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>
                      {getInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 hidden justify-end gap-2 sm:flex">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
