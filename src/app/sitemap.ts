import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/projects",
    "/projects/tavern",
    "/projects/nexora",
    "/projects/velora",
    "/projects/lume",
    "/about",
    "/skills",
    "/contact",
  ];

  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
