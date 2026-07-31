import type { Metadata } from "next";

import {
  APP_ICON_PATH,
  DEFAULT_LOCALE,
  SITE_URL,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "./constants";
import { buildOgImage, createOpenGraph } from "./open-graph";

type OpenGraph = NonNullable<Metadata["openGraph"]>;
type Twitter = NonNullable<Metadata["twitter"]>;

export type BuildMetadataOptions = {
  title: string;
  description: string;
  keywords?: string | string[];
  locale?: SupportedLocale;
  path?: string;
  icons?: Metadata["icons"];
  openGraph?: Partial<OpenGraph>;
  twitter?: Partial<Twitter>;
  robots?: Metadata["robots"];
};

export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    keywords,
    locale = DEFAULT_LOCALE,
    path = "",
    icons = { icon: APP_ICON_PATH },
    openGraph,
    twitter,
    robots,
  } = options;

  const canonical = `${SITE_URL}/${locale}${path}`;
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((lang) => [
      lang,
      `${SITE_URL}/${lang}${path}`,
    ])
  ) as Record<SupportedLocale, string>;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    icons,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      ...createOpenGraph({ title, description, locale, url: canonical }),
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [buildOgImage()],
      ...twitter,
    },
    robots: robots ?? {
      index: true,
      follow: true,
    },
  };
}
