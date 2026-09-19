import Link from "next/link";

import { PageShell, StoryText } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";

export default function NotFound() {
  return (
    <PageShell>
      <PageTitle>Lost our way</PageTitle>
      <StoryText>
        That page is not part of the wedding site. Head back to our story, or
        use the menu to find where to stay, the registry, or how to reach us.
      </StoryText>
      <p className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full border border-[#2a2a2a] px-6 text-sm font-medium"
        >
          Back to Our Story
        </Link>
      </p>
    </PageShell>
  );
}
