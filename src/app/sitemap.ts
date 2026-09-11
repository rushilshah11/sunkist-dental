import type { MetadataRoute } from "next";

import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.siteUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.siteUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.siteUrl}/insurance`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/new-patient-forms`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.siteUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
