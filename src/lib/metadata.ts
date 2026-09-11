import type { Metadata } from "next";

type OgImage = {
  url: string;
  width: number;
  height: number;
};

// Next.js falls back openGraph.title/description to the page's own
// title/description when omitted, so this only needs to carry what's
// actually different per page: the canonical path and an optional image.
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: OgImage;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      url: path,
      ...(image && { images: [image] }),
    },
  };
}
