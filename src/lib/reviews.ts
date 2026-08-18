import { siteConfig } from "@/lib/site-config";

// Manual snapshot from the public Google Business Profile — the Places API
// costs money past a point and isn't worth it for a rating badge, so this
// gets refreshed by hand periodically instead (see backlog.md).
export const googleReviews = {
  rating: 4.9,
  count: 77,
  capturedOn: "2026-08-17",
  url: siteConfig.mapsUrl,
} as const;
