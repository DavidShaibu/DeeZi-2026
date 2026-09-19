import Image from "next/image";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { Countdown } from "@/components/countdown";
import { MapLink } from "@/components/map-link";
import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { hotels, socialPreview, wedding } from "@/lib/site";

export const metadata: Metadata = {
  title: "Where to Stay",
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

export default function WhereToStayPage() {
  return (
    <PageShell>
      <PageTitle>Where to Stay</PageTitle>

      <StoryText>
        We&apos;ve picked a handful of hotels in Huntsville, Texas, a short
        drive from the wedding. Several sit near I-45 and Ravenwood Village
        Drive. Let us know if you have any questions!
      </StoryText>

      <Countdown />

      <div className="relative overflow-hidden rounded-[1.6rem] bg-[#efe6d6]">
        <Image
          src="/images/stay-map-huntsville.jpg"
          alt={`Map of ${wedding.venueArea} with nearby hotels`}
          width={1600}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />

        <MapLink
          name={wedding.mapsName}
          address={wedding.mapsAddress}
          className="absolute inset-x-4 bottom-4 flex h-12 items-center justify-center gap-2 rounded-full bg-white/95 text-[15px] font-medium text-[#1f1f1f] shadow-lg ring-1 ring-black/5 transition hover:bg-white"
        >
          <MapPin className="size-4" />
          Explore on Map
        </MapLink>
      </div>

      <ul className="mt-8 space-y-5">
        {hotels.map((hotel) => (
          <li
            key={hotel.name}
            className="overflow-hidden rounded-2xl border border-[#eee6de] bg-white shadow-[0_8px_30px_rgba(40,30,20,0.06)]"
          >
            <div className="relative h-48">
              <Image
                src={hotel.image}
                alt={`${hotel.name} in Huntsville, Texas`}
                fill
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-cover"
              />
            </div>
            <div className="px-5 py-4">
              <p className="text-lg font-medium text-[#1f1f1f]">{hotel.name}</p>
              <p className="mt-0.5 text-sm text-[#6b6560]">
                {hotel.area}, Huntsville, TX
              </p>
              <p className="font-serif mt-3 text-[1.05rem] leading-7 text-[#3a3a3a]">
                {hotel.note}
              </p>
              <MapLink
                name={hotel.name}
                address={hotel.mapsAddress}
                className="mt-4 inline-flex text-sm font-medium text-[#6b3a45] underline-offset-4 hover:underline"
              >
                View on Map
              </MapLink>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
