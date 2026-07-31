import type { MetadataRoute } from "next";

import { SITE_URL, SUPPORTED_LOCALES } from "@/lib/seo/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return SUPPORTED_LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: locale === "fr" ? 1 : 0.9,
  }));
}
