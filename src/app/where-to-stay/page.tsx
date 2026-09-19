import Image from "next/image";
import type { Metadata } from "next";
import { Heart, MapPin } from "lucide-react";

import { Countdown } from "@/components/countdown";
import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { hotels, mapsUrl, wedding } from "@/lib/site";

export const metadata: Metadata = {
  title: "Where to Stay",
};

export default function WhereToStayPage() {
  return (
    <PageShell>
      <PageTitle>Where to Stay</PageTitle>

      <StoryText>
        We&apos;ve curated a list of hotels near the wedding venues for your
        convenience. Let us know if you have any questions!
      </StoryText>

      <Countdown />

      <div className="relative overflow-hidden rounded-[1.6rem] bg-[#d7e6ee]">
        <Image
          src="/images/stay-map.jpg"
          alt={`Map of ${wedding.venueArea} and nearby neighborhoods`}
          width={1600}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />

        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-sm text-[#2a2a2a] shadow-md">
          <Heart className="size-3.5 fill-[#6b3a45] text-[#6b3a45]" />
          Venue
        </div>

        <a
          href={mapsUrl(wedding.mapsQuery)}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-x-4 bottom-4 flex h-12 items-center justify-center gap-2 rounded-full bg-white/95 text-[15px] font-medium text-[#1f1f1f] shadow-lg ring-1 ring-black/5 transition hover:bg-white"
        >
          <MapPin className="size-4" />
          Explore on Map
        </a>
      </div>

      <ul className="mt-8 space-y-5">
        {hotels.map((hotel) => (
          <li
            key={hotel.name}
            className="overflow-hidden rounded-2xl border border-[#eee6de] bg-white shadow-[0_8px_30px_rgba(40,30,20,0.06)]"
          >
            <div className="relative h-40">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-cover"
              />
              {hotel.favorite ? (
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium tracking-wide text-[#6b3a45] uppercase shadow-sm">
                  Couple&apos;s Favorite
                </span>
              ) : null}
              <span className="absolute right-3 bottom-3 rounded-full bg-[#2a2a2a]/90 px-3 py-1 text-sm text-white">
                {hotel.price}
              </span>
            </div>
            <div className="px-5 py-4">
              <p className="text-lg font-medium text-[#1f1f1f]">{hotel.name}</p>
              <p className="mt-0.5 text-sm text-[#6b6560]">{hotel.area}</p>
              <p className="font-serif mt-3 text-[1.05rem] leading-7 text-[#3a3a3a]">
                {hotel.note}
              </p>
              <a
                href={mapsUrl(hotel.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-[#6b3a45] underline-offset-4 hover:underline"
              >
                View on map
              </a>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
