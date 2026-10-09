import type { Metadata } from "next";

import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { socialPreview, zoom } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zoom",
  description: `Watch ${socialPreview.title} live from St. Thomas Catholic Church.`,
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
    <PageShell>
      <PageTitle>Zoom</PageTitle>

      <StoryText>
        <span data-testid="zoom-message">
          Watch the wedding live from St. Thomas Catholic Church. The livestream
          opens only after you tap the button below.
        </span>
      </StoryText>

      <p className="mt-10 text-center">
        <a
          href={zoom.streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="zoom-watch-link"
          className="inline-flex h-12 items-center rounded-full bg-[#2a2a2a] px-8 text-base font-medium text-white transition hover:bg-[#3a3a3a]"
        >
          Watch livestream
        </a>
      </p>
    </PageShell>
  );
}
