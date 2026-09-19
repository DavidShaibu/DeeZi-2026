"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { XIcon } from "lucide-react";

import { couple, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="relative overflow-hidden bg-[var(--header)]">
        <Image
          src="/images/floral-top-right.png"
          alt=""
          width={1400}
          height={788}
          priority
          className="pointer-events-none absolute top-0 right-0 w-[92%] max-w-[760px] mix-blend-multiply select-none sm:w-[72%] md:max-w-[920px]"
        />
        <Image
          src="/images/floral-bottom-left.png"
          alt=""
          width={1400}
          height={788}
          priority
          className="pointer-events-none absolute bottom-0 left-0 w-[86%] max-w-[700px] mix-blend-multiply select-none sm:w-[64%] md:max-w-[860px]"
        />

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
          className="absolute top-5 left-4 z-20 flex size-12 items-center justify-center rounded-2xl border-0 bg-white p-0 shadow-[0_8px_24px_rgba(40,30,20,0.12)] ring-1 ring-black/5 transition hover:shadow-[0_10px_28px_rgba(40,30,20,0.16)] sm:top-6 sm:left-6"
        >
          <span className="flex flex-col items-center gap-[5px]">
            <span className="block h-[2px] w-[18px] rounded-full bg-[#2b2b2b]" />
            <span className="block h-[2px] w-[18px] rounded-full bg-[#2b2b2b]" />
            <span className="block h-[2px] w-[18px] rounded-full bg-[#2b2b2b]" />
          </span>
        </button>

        <div className="relative mx-auto flex min-h-[210px] max-w-5xl items-center justify-center px-16 py-12 sm:min-h-[250px] md:min-h-[280px]">
          <Link
            href="/"
            className="font-script relative z-10 text-center text-[2.65rem] leading-[1.05] text-[#2a2a2a] sm:text-6xl md:text-[4.1rem]"
          >
            {couple.names}
          </Link>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[80] bg-black/40 transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id={menuId}
        role="dialog"
        aria-modal={open}
        aria-label="Wedding pages"
        inert={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-[90] flex w-[86%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-start justify-between px-7 pt-8 pb-2">
          <p className="font-script text-[2.05rem] leading-none text-[#2a2a2a]">
            {couple.names}
          </p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="mt-1 flex size-8 items-center justify-center rounded-full text-[#2a2a2a] transition hover:bg-neutral-100"
          >
            <XIcon className="size-5" strokeWidth={1.75} />
          </button>
        </div>

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
                  "py-[18px] text-[17px] tracking-[0.01em] text-[#2b2b2b] transition-colors",
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
      </aside>
    </>
  );
}
