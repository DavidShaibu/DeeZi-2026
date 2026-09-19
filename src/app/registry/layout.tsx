import type { Metadata } from "next";

import { socialPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "Registry",
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

export default function RegistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
