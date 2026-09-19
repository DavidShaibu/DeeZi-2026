import type { Metadata } from "next";

import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { rsvpFormUrl, socialPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "RSVP",
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

export default function RsvpPage() {
  return (
    <PageShell>
      <PageTitle>RSVP</PageTitle>

      <StoryText>
        We would love to know if you can celebrate with us in Huntsville on
        Friday, October 9, 2026. Please fill out the short form so we can plan
        for you.
      </StoryText>

      <p className="mt-10 text-center">
        <a
          href={rsvpFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="rsvp-form-link"
          className="inline-flex h-12 items-center rounded-full bg-[#2a2a2a] px-8 text-base font-medium text-white transition hover:bg-[#3a3a3a]"
        >
          Open RSVP form
        </a>
      </p>
    </PageShell>
  );
}
