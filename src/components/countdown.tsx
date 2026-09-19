import { weddingDateIso } from "@/lib/site";

function daysUntil(iso: string) {
  const now = new Date();
  const target = new Date(iso);
  const startOfToday = Date.UTC(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  const startOfTarget = Date.UTC(
    target.getFullYear(),
    target.getMonth(),
    target.getDate(),
  );
  return Math.round((startOfTarget - startOfToday) / 86_400_000);
}

export function Countdown() {
  const days = daysUntil(weddingDateIso);

  const label =
    days > 1
      ? `${days} DAYS`
      : days === 1
        ? "1 DAY"
        : days === 0
          ? "TODAY"
          : "CELEBRATED";

  return (
    <div className="mt-10 mb-8 text-center">
      <p className="text-[11px] font-medium tracking-[0.22em] text-[#3a3a3a] uppercase">
        Event takes place in:
      </p>
      <p className="mt-2 text-[1.35rem] font-medium tracking-[0.08em] text-[#1f1f1f]">
        {label}
      </p>
    </div>
  );
}
