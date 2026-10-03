"use client";

import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/zoom")) {
    return null;
  }

  return (
    <footer className="bg-white px-6 pb-10 text-center text-[11px] font-medium tracking-[0.22em] text-[#8a8178] uppercase">
      Huntsville, TX · 9 October 2026
    </footer>
  );
}
