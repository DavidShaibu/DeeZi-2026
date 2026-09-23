import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { couple, siteUrl, socialPreview } from "@/lib/site";

import "./globals.css";

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const serif = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${couple.names} — Wedding`,
    template: `%s · ${couple.names}`,
  },
  description: socialPreview.description,
  openGraph: {
    title: socialPreview.title,
    description: socialPreview.description,
    type: "website",
    locale: "en_US",
    siteName: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    card: "summary_large_image",
    title: socialPreview.title,
    description: socialPreview.description,
    images: [socialPreview.image.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${script.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#2b2b2b]">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="bg-white px-6 pb-10 text-center text-[11px] font-medium tracking-[0.22em] text-[#8a8178] uppercase">
          Huntsville, TX · 9 October 2026
        </footer>
      </body>
    </html>
  );
}
