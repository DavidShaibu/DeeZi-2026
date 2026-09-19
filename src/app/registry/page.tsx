import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { couple, registry, wedding } from "@/lib/site";

export default function RegistryPage() {
  const { usd, naira } = registry;

  return (
    <PageShell>
      <PageTitle>Registry</PageTitle>

      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="/images/registry-hero.jpg"
          alt={`${couple.names}`}
          width={1170}
          height={2008}
          className="h-auto w-full object-cover object-top"
          priority
        />
      </figure>

      <p className="font-serif mt-10 text-[1.55rem] leading-9 text-[#2a2a2a] sm:text-[1.7rem]">
        {wedding.dateLong}
      </p>

      <p
        className="font-serif mt-5 text-[1.2rem] leading-8 text-[#2f2f2f] sm:text-[1.28rem] sm:leading-9"
        data-testid="registry-message"
      >
        A lot of you have asked how you can be a part of our {registry.hashtag}.
        If you’d like to support us as we begin this new journey together,
        we’ll be accepting cash gifts. Thank you so much, and God bless you! ❤️
      </p>

      <div
        className="mt-10 space-y-1 text-[1.08rem] font-semibold leading-8 text-[#1a1a1a]"
        data-testid="registry-bank"
      >
        <p className="font-serif text-[1.35rem] font-semibold">USD</p>
        <p>Account Name: {usd.bank.accountName}</p>
        <p>Account Number: {usd.bank.accountNumber}</p>
        <p>Routing Number: {usd.bank.routingNumber}</p>
        <p>Bank: {usd.bank.name}</p>
        <p aria-hidden="true">&nbsp;</p>
        <p data-testid="registry-zelle">Zelle: {usd.zelle}</p>
      </div>

      <div
        className="mt-10 space-y-1 text-[1.08rem] font-semibold leading-8 text-[#1a1a1a]"
        data-testid="registry-naira"
      >
        <p className="font-serif text-[1.35rem] font-semibold">Naira</p>
        <p>Account Name: {naira.accountName}</p>
        <p>Account Number: {naira.accountNumber}</p>
        <p>Bank: {naira.bank}</p>
      </div>
    </PageShell>
  );
}
