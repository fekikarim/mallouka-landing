import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "../globals.css";

const locales = ["en", "fr", "ar"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale,
      siteName: "Mallouka Motors",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: `https://malloukamotors.com/${locale}`,
      languages: {
        en: "https://malloukamotors.com/en",
        fr: "https://malloukamotors.com/fr",
        ar: "https://malloukamotors.com/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Mallouka Motors",
              alternateName: "Allo Casse Auto",
              description: "Trusted automotive specialists since 2003. Premium imported engines and automotive services in Tunisia.",
              url: "https://malloukamotors.com",
              telephone: "+216 24 270 888",
              email: "malloukamotors21@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rue Ibn El Jazzar, Bhar Lazreg, La Marsa",
                addressLocality: "La Marsa",
                addressCountry: "TN",
              },
              openingHours: "Mo-Sa 08:00-18:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
