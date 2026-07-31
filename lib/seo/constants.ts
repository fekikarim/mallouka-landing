export const SITE_URL = "https://mallouka-motors.netlify.app";

export const SITE_NAME = "Mallouka Motors";

export const SITE_ALTERNATE_NAME = "Allo Casse Auto";

export const DEFAULT_LOCALE = "fr";

export const SUPPORTED_LOCALES = ["fr", "en", "ar"] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const OG_IMAGE_PATH = "/og-image.png";

export const OG_IMAGE_TYPE = "image/png";

export const OG_IMAGE_WIDTH = 1200;

export const OG_IMAGE_HEIGHT = 630;

export const OG_IMAGE_ALT =
  "Mallouka Motors | Imported Engines & Automotive Spare Parts in Tunisia";

export const OG_COUNTRY_NAME = "Tunisia";

export const OG_LOCALE_MAP: Record<SupportedLocale, string> = {
  fr: "fr_FR",
  en: "en_US",
  ar: "ar_TN",
};

export const APP_ICON_PATH = "/assets/logo/mallouka_motors_logo.svg";
