import type { ReactNode } from "react";

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-script mb-8 text-center text-[3.15rem] leading-none text-[#2a2a2a] sm:mb-10 sm:text-6xl">
      {children}
    </h1>
  );
}
