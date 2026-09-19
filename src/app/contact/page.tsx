import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { couple } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageTitle>Contact Us</PageTitle>

      <StoryText>
        Questions about travel, attire, plus-ones, or anything we forgot to
        mention? Write to us. We read every note.
      </StoryText>

      <div className="mx-auto mt-10 max-w-md">
        <ContactForm />
      </div>

      <div className="mt-12 text-center">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#3a3a3a] uppercase">
          Or email us directly
        </p>
        <a
          href={`mailto:${couple.email}`}
          className="mt-3 inline-block text-[1.05rem] text-[#6b3a45] underline-offset-4 hover:underline"
        >
          {couple.email}
        </a>
        <p className="font-serif mt-6 text-[1.05rem] text-[#6b6560]">
          {couple.names}
        </p>
      </div>
    </PageShell>
  );
}
