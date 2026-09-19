import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { PageTitle } from "@/components/page-title";
import { couple, registry, wedding } from "@/lib/site";

export default function RegistryPage() {
  const { bank } = registry;

  return (
    <PageShell>
      <PageTitle>Registry</PageTitle>

      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="/images/registry-hero.jpg"
          alt={`${couple.names}`}
          width={1142}
          height={1401}
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
        If you&apos;d like to contribute, we are accepting CASH donations.
        Thanks and God bless! 😊
      </p>

      <div
        className="mt-10 space-y-1 text-[1.08rem] font-semibold leading-8 text-[#1a1a1a]"
        data-testid="registry-bank"
      >
        <p>{bank.name}</p>
        <p>Account Name: {bank.accountName}</p>
        <p>Account Number: {bank.accountNumber}</p>
        <p>Routing Number: {bank.routingNumber}</p>
      </div>

      <p
        className="mt-8 text-[1.08rem] font-semibold leading-8 text-[#1a1a1a]"
        data-testid="registry-zelle"
      >
        Zelle: {registry.zelle}
      </p>
    </PageShell>
  );
}
