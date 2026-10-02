import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ortak Tercüme ve Vize Danışmanlık | Yozgat Sorgun",
  description: "Sorgun/Yozgat'ta 16 yıllık tecrübeyle yeminli tercüme, noter onaylı çeviri, yurt dışı aile birleşimi ve profesyonel vize danışmanlık hizmetleri.",
  keywords: "Yeminli Tercüme, Noter Onaylı Çeviri, Vize Danışmanlık, Sorgun Tercüme, Yozgat Tercüme, Yurt Dışı Aile Birleşimi, Randevu İşlemleri",
  alternates: {
    canonical: "https://ortaktercume.vercel.app",
  },
  openGraph: {
    title: "Ortak Tercüme ve Vize Danışmanlık | Yozgat Sorgun",
    description: "Sorgun/Yozgat'ta 16 yıllık tecrübeyle yeminli tercüme ve profesyonel vize danışmanlık hizmetleri.",
    url: "https://ortaktercume.vercel.app",
    siteName: "Ortak Tercüme ve Vize Danışmanlık",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ortak Tercüme ve Vize Danışmanlık",
    "image": "https://ortaktercume.vercel.app/logo.png",
    "description": "Yozgat Sorgun'da Yeminli Tercüme, Noter Onaylı Çeviri ve profesyonel Vize Danışmanlık hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yeşilöz Mah. Yılmaz Kılıçaslan Caddesi Bina No: 12 Kat: 2 No: 1",
      "addressLocality": "Sorgun",
      "addressRegion": "Yozgat",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.8099745,
      "longitude": 35.1786664
    },
    "telephone": ["+905435136713", "+905426961732"],
    "url": "https://ortaktercume.vercel.app"
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0f1d] text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200`}>
        {children}
      </body>
    </html>
  );
}
