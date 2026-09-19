"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { XIcon } from "lucide-react";

import { couple, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative isolate overflow-hidden bg-[var(--header)]">
      <Image
        src="/images/floral-top-right.png"
        alt=""
        width={1400}
        height={788}
        priority
        className="pointer-events-none absolute top-0 right-0 w-[90%] max-w-[720px] mix-blend-multiply select-none sm:w-[70%]"
      />
      <Image
        src="/images/floral-bottom-left.png"
        alt=""
        width={1400}
        height={788}
        priority
        className="pointer-events-none absolute bottom-0 left-0 w-[82%] max-w-[640px] mix-blend-multiply select-none sm:w-[62%]"
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label="Open menu"
            className="absolute top-5 left-4 z-20 flex size-12 items-center justify-center rounded-2xl border-0 bg-white p-0 shadow-[0_8px_24px_rgba(40,30,20,0.12)] ring-1 ring-black/5 transition hover:shadow-[0_10px_28px_rgba(40,30,20,0.16)] sm:top-6 sm:left-6"
        >
          <span className="flex flex-col items-center gap-[5px]">
            <span className="block h-[2px] w-[18px] rounded-full bg-[#2b2b2b]" />
            <span className="block h-[2px] w-[18px] rounded-full bg-[#2b2b2b]" />
            <span className="block h-[2px] w-[18px] rounded-full bg-[#2b2b2b]" />
          </span>
        </SheetTrigger>

        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-[86%] max-w-[360px] gap-0 border-0 bg-white p-0 shadow-2xl data-[side=left]:sm:max-w-[360px]"
        >
          <SheetHeader className="flex-row items-start justify-between px-7 pt-8 pb-2">
            <SheetTitle className="font-script text-[2.05rem] leading-none font-normal tracking-tight text-[#2a2a2a]">
              {couple.names}
            </SheetTitle>
            <SheetClose
              aria-label="Close menu"
              className="mt-1 flex size-8 items-center justify-center rounded-full border-0 bg-transparent p-0 text-[#2a2a2a] shadow-none transition hover:bg-neutral-100"
            >
              <XIcon className="size-5" strokeWidth={1.75} />
            </SheetClose>
          </SheetHeader>
          <SheetDescription className="sr-only">
            Wedding pages for Juanita and Johannes
          </SheetDescription>

          <nav className="flex flex-col px-7 pt-6 pb-10" aria-label="Pages">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-transparent py-[18px] text-[17px] tracking-[0.01em] text-[#2b2b2b] transition-colors",
                    active
                      ? "font-medium"
                      : "font-normal hover:text-[#6b3a45]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="relative mx-auto flex min-h-[210px] max-w-5xl items-center justify-center px-16 py-12 sm:min-h-[250px] md:min-h-[280px]">
        <Link
          href="/"
          className="font-script relative z-10 text-center text-[2.65rem] leading-[1.05] text-[#2a2a2a] sm:text-6xl md:text-[4.1rem]"
        >
          {couple.names}
        </Link>
      </div>
    </header>
  );
}
