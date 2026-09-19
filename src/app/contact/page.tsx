import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { contacts, socialPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  openGraph: {
    title: socialPreview.title,
    images: [socialPreview.image],
  },
  twitter: {
    title: socialPreview.title,
    images: [socialPreview.image.url],
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageTitle>Contact Us</PageTitle>

      <div className="flex flex-col gap-16 sm:gap-20" data-testid="contact-list">
        {contacts.map((person) => (
          <section key={person.role}>
            <h2 className="font-serif text-[1.85rem] leading-tight text-[#1f1f1f] sm:text-[2.05rem]">
              {person.role}
            </h2>
            <p className="font-serif mt-8 text-[1.15rem] leading-8 text-[#2f2f2f] sm:text-[1.25rem]">
              {person.name}
            </p>
            <a
              href={`tel:${person.tel}`}
              className="font-serif mt-8 inline-block text-[1.15rem] leading-8 text-[#2f2f2f] sm:text-[1.25rem]"
            >
              {person.phone}
            </a>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
