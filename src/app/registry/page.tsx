"use client";

import Image from "next/image";
import { useState } from "react";

import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { couple, registryItems } from "@/lib/site";

export default function RegistryPage() {
  const [pledged, setPledged] = useState<string | null>(null);

  return (
    <PageShell>
      <PageTitle>Registry</PageTitle>

      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="/images/registry-hero.jpg"
          alt={`${couple.names} at their beach proposal`}
          width={1200}
          height={1600}
          className="h-auto w-full object-cover"
          priority
        />
      </figure>

      <div className="mt-10">
        <StoryText>
          Your presence in Lagos is the gift we want most. If you would still
          like to celebrate with something extra, we have a short list of wishes
          for the honeymoon and the home we are making together.
        </StoryText>
      </div>

      <ul className="mt-10 space-y-4">
        {registryItems.map((item) => {
          const isPledged = pledged === item.title;

          return (
            <li
              key={item.title}
              className="rounded-2xl border border-[#eee6de] px-5 py-5 shadow-[0_8px_30px_rgba(40,30,20,0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-medium text-[#1f1f1f]">
                    {item.title}
                  </p>
                  <p className="font-serif mt-2 text-[1.05rem] leading-7 text-[#3a3a3a]">
                    {item.detail}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-[#6b6560]">{item.amount}</p>
              </div>
              <button
                type="button"
                className={
                  isPledged
                    ? "mt-4 inline-flex h-10 items-center rounded-full bg-[#f4efe9] px-5 text-sm font-medium text-[#2a2a2a]"
                    : "mt-4 inline-flex h-10 items-center rounded-full border border-[#2a2a2a] bg-white px-5 text-sm font-medium text-[#2a2a2a] transition hover:bg-[#f4efe9]"
                }
                onClick={() => setPledged(item.title)}
              >
                {isPledged ? "We’ll take it from here" : "Contribute"}
              </button>
            </li>
          );
        })}
      </ul>

      {pledged ? (
        <p className="font-serif mt-6 text-center text-[1.1rem] leading-8 text-[#3a3a3a]">
          Thank you. In this preview, contributions are a note of intent only —
          no payment is collected.
        </p>
      ) : null}
    </PageShell>
  );
}
