import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
import { getLocalBusinessJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `${siteConfig.doctorName} and the Sunkist Dental team provide friendly, family dentistry in Orange, CA.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description,
    url: "/",
    images: [{ url: "/images/hero-office.jpg", width: 1600, height: 1068 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description,
    images: ["/images/hero-office.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const localBusinessJsonLd = getLocalBusinessJsonLd();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
