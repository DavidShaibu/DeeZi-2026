import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { Countdown } from "@/components/countdown";
import { MapLink } from "@/components/map-link";
import { PageShell } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { dayNotes, schedule, socialPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule",
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

function googleCalendarUrl(event: (typeof schedule)[number]) {
  const location = `${event.venue}, ${event.mapsAddress}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.calendar.title,
    dates: `${event.calendar.start}/${event.calendar.end}`,
    ctz: "America/Chicago",
    location,
    details: event.calendar.details,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const pillClassName =
  "inline-flex h-12 items-center justify-center rounded-full border border-[#2a2a2a] px-7 text-[15px] font-medium text-[#1f1f1f] transition hover:bg-[#f7f4f1]";

export default function SchedulePage() {
  return (
    <PageShell>
      <figure className="-mx-6 -mt-8 mb-8 overflow-hidden sm:-mx-8 sm:-mt-10">
        <Image
          src="/images/schedule-church-v2.jpg"
          alt="St. Thomas Catholic Church"
          width={1026}
          height={962}
          className="h-auto w-full object-cover object-center"
          priority
        />
      </figure>

      <PageTitle>Schedule</PageTitle>

      <Countdown />

      <div className="flex flex-col gap-16 sm:gap-20" data-testid="schedule-list">
        {schedule.map((event) => (
          <section key={event.id} data-testid={`schedule-${event.id}`}>
            <p className="font-serif text-[1.55rem] leading-9 text-[#2a2a2a] sm:text-[1.7rem]">
              {event.date}
            </p>
            <p className="font-serif mt-6 text-[1.2rem] leading-8 text-[#2f2f2f] sm:text-[1.28rem]">
              {event.time}
            </p>
            <h2 className="font-serif mt-6 text-[1.85rem] leading-tight text-[#1f1f1f] sm:text-[2.05rem]">
              {event.title}
            </h2>
            <p className="font-serif mt-6 text-[1.15rem] leading-8 text-[#2f2f2f] sm:text-[1.25rem] sm:leading-9">
              {event.description}
            </p>
            <div className="mt-8 flex items-start gap-3 text-[#2f2f2f]">
              <MapPin className="mt-1 size-[1.15rem] shrink-0" aria-hidden="true" />
              <div className="font-serif text-[1.15rem] leading-8 sm:text-[1.25rem]">
                <p>{event.venue}</p>
                {event.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href={googleCalendarUrl(event)}
                target="_blank"
                rel="noreferrer"
                className={pillClassName}
              >
                Add to Calendar
              </a>
              <Link href="/where-to-stay" className={pillClassName}>
                Where to Stay
              </Link>
              <MapLink
                name={event.venue}
                address={event.mapsAddress}
                className={pillClassName}
              >
                Directions
              </MapLink>
            </div>
          </section>
        ))}
      </div>

      <p
        className="font-serif mt-16 text-[1.15rem] leading-8 text-[#2f2f2f] sm:text-[1.25rem]"
        data-testid="schedule-notes"
      >
        Colors of the day are {dayNotes.colors}. Dress code: {dayNotes.dressCode}.
      </p>
    </PageShell>
  );
}
