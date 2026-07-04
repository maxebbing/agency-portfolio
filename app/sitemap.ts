import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

// NOTE: must be set to the real production URL via NEXT_PUBLIC_SITE_URL
// when this site is deployed, so that sitemap URLs are correct.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  return routes;
}
