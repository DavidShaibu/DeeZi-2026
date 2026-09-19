"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { XIcon } from "lucide-react";

import { couple, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const tabBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const active = tabBarRef.current?.querySelector("[data-active=true]");
    active?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [pathname]);

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
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/floral-top-right.png"
            alt=""
            width={1400}
            height={788}
            priority
            className="absolute top-0 right-0 w-[92%] max-w-[760px] mix-blend-multiply select-none sm:w-[72%] md:max-w-[920px]"
          />
          <Image
            src="/images/floral-bottom-left.png"
            alt=""
            width={1400}
            height={788}
            priority
            className="absolute bottom-0 left-0 w-[86%] max-w-[700px] mix-blend-multiply select-none sm:w-[64%] md:max-w-[860px]"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[210px] max-w-5xl items-center justify-center px-16 py-12 sm:min-h-[250px] md:min-h-[280px]">
          <Link
            href="/"
            className="font-script text-center text-[2.65rem] leading-[1.05] text-[#2a2a2a] sm:text-6xl md:text-[4.1rem]"
          >
            {couple.names}
          </Link>
        </div>
      </header>

      <div className="sticky top-0 z-40 bg-white">
        <div className="relative flex items-stretch">
          <button
            type="button"
            data-testid="open-menu"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen(true)}
            className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#2b2b2b]"
          >
            <span className="flex flex-col items-center gap-[5px]">
              <span className="block h-[1.5px] w-[16px] rounded-full bg-[#2b2b2b]" />
              <span className="block h-[1.5px] w-[16px] rounded-full bg-[#2b2b2b]" />
              <span className="block h-[1.5px] w-[16px] rounded-full bg-[#2b2b2b]" />
            </span>
          </button>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-12 z-10 h-12 w-5 bg-gradient-to-r from-white to-transparent"
          />
          <nav
            ref={tabBarRef}
            data-testid="tab-bar"
            aria-label="Page tabs"
            className="tab-bar flex min-w-0 flex-1 items-stretch overflow-x-auto"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active ? "true" : "false"}
                  className={cn(
                    "flex shrink-0 items-center px-4 text-[15px] whitespace-nowrap text-[#2b2b2b]",
                    active
                      ? "border-b-2 border-[#2a2a2a] font-medium"
                      : "border-b-2 border-transparent",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="h-px bg-[#ece8e4]" />
      </div>

      {open ? (
        <>
          <div
            data-testid="menu-backdrop"
            className="fixed inset-0 z-[80] bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            id={menuId}
            data-testid="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Wedding pages"
            className="fixed inset-y-0 left-0 z-[90] flex w-[86%] max-w-[360px] flex-col bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between px-7 pt-8 pb-2">
              <p className="font-script text-[2.05rem] leading-none text-[#2a2a2a]">
                {couple.names}
              </p>
              <button
                type="button"
                data-testid="close-menu"
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
      ) : null}
    </>
  );
}
