import Image from "next/image";
import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { couple, ourStory, socialPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

function isPhotoBreak(
  beat: (typeof ourStory)[number],
): beat is Extract<(typeof ourStory)[number], { photos: unknown }> {
  return "photos" in beat;
}

export default function OurStoryPage() {
  return (
    <PageShell>
      <PageTitle>Our Story</PageTitle>

      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="/images/our-story.jpg"
          alt={`${couple.names}`}
          width={1600}
          height={1794}
          className="h-auto w-full object-cover object-top"
          priority
        />
      </figure>

      <div className="mt-12 flex flex-col gap-10">
        {ourStory.map((beat, index) => {
          if (isPhotoBreak(beat)) {
            return (
              <div
                key={`photos-${index}`}
                className="my-2 flex flex-col gap-6"
                data-testid="story-chapter-photos"
              >
                {beat.photos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="h-auto w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            );
          }

          return (
            <blockquote
              key={`${beat.speaker}-${index}`}
              className="text-center"
            >
              <p className="text-[11px] font-medium tracking-[0.22em] text-[#6b3a45] uppercase">
                {beat.speaker}
              </p>
              {beat.text.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-serif mt-3 text-[1.2rem] leading-8 text-[#2f2f2f] sm:text-[1.28rem] sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}
            </blockquote>
          );
        })}
      </div>
    </PageShell>
  );
}
