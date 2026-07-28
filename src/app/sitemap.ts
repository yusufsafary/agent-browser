import { MetadataRoute } from "next";

const BASE_URL = "https://agentbrowser.fun";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/how-to`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/docs`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/docs/installation`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/docs/quickstart`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/docs/commands`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/docs/configuration`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/sessions`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/snapshots`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/network`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/recording`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/mcp`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/vercel`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/docker`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/providers`, priority: 0.65, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/docs/changelog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/login`, priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return staticPages.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
