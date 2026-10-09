import type { Metadata } from "next";

import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { livestream, socialPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "Livestream",
  description:
    "Watch the wedding live from St. Thomas Catholic Church.",
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

export default function LivestreamPage() {
  return (
    <PageShell>
      <PageTitle>Livestream</PageTitle>

      <StoryText>
        <span data-testid="livestream-message">
          Watch the wedding live from St. Thomas Catholic Church.
        </span>
      </StoryText>

      <p className="mt-10 text-center">
        <a
          href={livestream.streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="livestream-watch-link"
          className="inline-flex h-12 items-center rounded-full bg-[#2a2a2a] px-8 text-base font-medium text-white transition hover:bg-[#3a3a3a]"
        >
          Watch livestream
        </a>
      </p>
    </PageShell>
  );
}
