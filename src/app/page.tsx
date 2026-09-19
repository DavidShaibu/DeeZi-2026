import Image from "next/image";
import type { Metadata } from "next";

import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { couple, wedding } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <PageShell>
      <PageTitle>Our Story</PageTitle>

      <StoryText>
        Juanita and Johannes found each other in Lagos — between busy weeks,
        shared playlists, and the kind of conversations that make you miss your
        stop. What started as one coffee became a life they were already
        building, long before they had a name for it.
      </StoryText>

      <figure className="mt-10 overflow-hidden rounded-2xl">
        <Image
          src="/images/story-couple.jpg"
          alt={`${couple.names} walking together at golden hour`}
          width={1200}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />
      </figure>

      <h2 className="font-script mt-12 mb-5 text-center text-4xl text-[#2a2a2a]">
        How we met
      </h2>
      <StoryText>
        A mutual friend insisted they would get along. Juanita almost cancelled.
        Johannes arrived early and kept the better seat. They talked until the
        café closed, then kept talking on the walk to the car. By the following
        Sunday they had plans, a running joke, and no interest in being casual.
      </StoryText>

      <figure className="mt-10 overflow-hidden rounded-2xl">
        <Image
          src="/images/story-cafe.jpg"
          alt="Juanita and Johannes laughing over coffee"
          width={1200}
          height={900}
          className="h-auto w-full object-cover"
        />
      </figure>

      <h2 className="font-script mt-12 mb-5 text-center text-4xl text-[#2a2a2a]">
        The proposal
      </h2>
      <StoryText>
        Johannes asked on a quiet stretch of beach at dusk, under a simple arch
        of white flowers and a handwritten sign. Juanita said yes before he
        finished the question. They are getting married on {wedding.dateLabel}{" "}
        in {wedding.city}, surrounded by the people who watched this story
        grow.
      </StoryText>
    </PageShell>
  );
}
