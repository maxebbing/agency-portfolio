import type { MetadataRoute } from "next";

// NOTE: must be set to the real production URL via NEXT_PUBLIC_SITE_URL
// when this site is deployed, so that the sitemap URL is correct.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
