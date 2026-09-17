import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "/",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "/projects",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/projects/tavern",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/projects/nexora",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/projects/velora",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/projects/lume",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/skills",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}