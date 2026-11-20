import React from "react";
import { business, services } from "../data/site";

const SITE = business.siteUrl;

const businessLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE}/#business`,
  name: "StoneCraft",
  alternateName: "Stone Craft Iconic Concrete",
  url: `${SITE}/`,
  logo: `${SITE}/icon-512.png`,
  image: `${SITE}/og-image.jpg`,
  description: "Concrete countertops, polished concrete floors, sinks, fireplaces and bar tops for homes and businesses in Maine.",
  telephone: "+1-207-591-7711",
  email: business.email,
  founder: { "@type": "Person", name: business.founder },
  address: { "@type": "PostalAddress", streetAddress: business.street, addressLocality: business.city, addressRegion: business.region, postalCode: business.zip, addressCountry: "US" },
  areaServed: [...business.areas.map((name) => ({ "@type": "City", name })), { "@type": "State", name: "Maine" }],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [...services.map((s) => s.title), "Concrete sinks", "Fireplace surrounds", "Outdoor fire pits", "Outdoor furniture"].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function Seo({ title, description, path = "/", home = false }) {
  const url = `${SITE}${path}`;
  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#3f4f22" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" type="image/png" href="/icon-192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="StoneCraft" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/og-image.jpg`} />

      <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin-wght-normal.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/fonts/montserrat-latin-wght-normal.woff2" crossOrigin="anonymous" />
      {home && <link rel="preload" as="font" type="font/woff2" href="/fonts/montserrat-latin-wght-italic.woff2" crossOrigin="anonymous" />}
      {home && (
        <link rel="preload" as="image" href="/images/hero-1600.webp" imageSrcSet="/images/hero-900.webp 900w, /images/hero-1600.webp 1600w" imageSizes="(min-width: 960px) 46vw, 100vw" fetchpriority="high" />
      )}
      {home && <script type="application/ld+json">{JSON.stringify(businessLd)}</script>}
    </>
  );
}
