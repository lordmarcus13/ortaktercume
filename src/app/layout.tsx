import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ortak Tercüme ve Vize Danışmanlık",
  description: "16 yıllık sektörel tecrübemizle yurt dışı aile birleşimi, tercüme ve vize danışmanlık süreçlerinizde profesyonel rehberlik sunuyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-bg text-text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}
