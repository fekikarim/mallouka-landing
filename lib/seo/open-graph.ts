import type { Metadata } from "next";

import {
  OG_COUNTRY_NAME,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  OG_LOCALE_MAP,
  SITE_NAME,
  SITE_URL,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "./constants";

export type OgImageDescriptor = {
  url: string;
  secureUrl?: string;
  type?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
};

type OpenGraph = NonNullable<Metadata["openGraph"]>;

export type OpenGraphType =
  | "article"
  | "book"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "profile"
  | "website"
  | "video.tv_show"
  | "video.other"
  | "video.movie"
  | "video.episode";

export type OpenGraphOptions<TType extends OpenGraphType = "website"> = {
  title: string;
  description: string;
  locale: SupportedLocale;
  url: string;
  type?: TType;
  siteName?: string;
  determiner?: "a" | "an" | "the" | "auto" | "";
  images?: OgImageDescriptor | Array<OgImageDescriptor>;
  alternateLocale?: Array<string>;
  countryName?: string;
};

export function buildOgImage(
  path: string = OG_IMAGE_PATH,
  alt: string = OG_IMAGE_ALT
): OgImageDescriptor {
  return {
    url: `${SITE_URL}${path}`,
    type: OG_IMAGE_TYPE,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt,
  };
}

export function createOpenGraph<TType extends OpenGraphType = "website">(
  options: OpenGraphOptions<TType>
): Extract<OpenGraph, { type: TType }> {
  const {
    title,
    description,
    locale,
    url,
    type = "website",
    siteName = SITE_NAME,
    determiner = "auto",
    images = [buildOgImage()],
    alternateLocale,
    countryName = OG_COUNTRY_NAME,
  } = options;

  return {
    title,
    description,
    type,
    url,
    siteName,
    determiner,
    locale: OG_LOCALE_MAP[locale],
    alternateLocale:
      alternateLocale ??
      SUPPORTED_LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE_MAP[l]),
    images,
    countryName,
  } as Extract<OpenGraph, { type: TType }>;
}
