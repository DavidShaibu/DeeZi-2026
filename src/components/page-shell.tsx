import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 bg-white px-6 pt-8 pb-20 sm:px-8 sm:pt-10">
      <div className="mx-auto w-full max-w-xl">{children}</div>
    </main>
  );
}

export function StoryText({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif text-center text-[1.2rem] leading-8 text-[#2f2f2f] sm:text-[1.28rem] sm:leading-9">
      {children}
    </p>
  );
}
