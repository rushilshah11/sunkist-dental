import Image from "next/image";

import type { InsuranceProvider } from "@/lib/insurance";

function LogoRow({ providers, ariaHidden }: { providers: InsuranceProvider[]; ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={ariaHidden}
    >
      {providers.map((provider) => (
        <div
          key={provider.name}
          className="flex h-10 w-32 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <Image
            src={provider.logo}
            alt={provider.name}
            width={128}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee({ providers }: { providers: InsuranceProvider[] }) {
  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      aria-label="Insurance providers we accept"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        <LogoRow providers={providers} />
        <LogoRow providers={providers} ariaHidden />
      </div>
    </div>
  );
}
