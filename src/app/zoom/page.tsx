import type { Metadata } from "next";

import { ZoomStage } from "@/components/zoom-stage";
import { socialPreview, wedding } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zoom",
  description: `Watch ${socialPreview.title} live on Zoom.`,
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

export default function ZoomPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col bg-white px-3 pt-5 pb-3 sm:px-6 sm:pt-6">
      <h1 className="font-script mb-2 text-center text-[2.55rem] leading-none text-[#2a2a2a] sm:text-5xl">
        Zoom
      </h1>
      <p
        className="font-serif mx-auto mb-4 max-w-xl text-center text-[1.05rem] leading-7 text-[#2f2f2f] sm:text-[1.12rem] sm:leading-8"
        data-testid="zoom-message"
      >
        Watch the wedding live from wherever you are. The Zoom room opens in the
        frame below, fitted to your screen — you can stay on this page for{" "}
        {wedding.dateLong}.
      </p>
      <ZoomStage />
    </main>
  );
}
