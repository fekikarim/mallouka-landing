import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/seo/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import "../globals.css";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    locale: locale as SupportedLocale,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });

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
              description: t("description"),
              url: "https://malloukamotors.com",
              telephone: "+216 24 270 888",
              email: "malloukamotors21@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rue Ibn El Jazzar, Bhar Lazreg, La Marsa",
                addressLocality: "La Marsa",
                addressCountry: "TN",
              },
              openingHours: "Mo-Fr 08:30-17:30, Sa 08:30-15:30",
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
