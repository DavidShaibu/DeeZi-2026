"use client";

import { useSyncExternalStore } from "react";

import { weddingDateIso } from "@/lib/site";

const DAY_MS = 24 * 60 * 60 * 1000;

function daysUntilWedding() {
  const now = new Date();
  const wedding = new Date(weddingDateIso);
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const weddingDay = Date.UTC(
    wedding.getFullYear(),
    wedding.getMonth(),
    wedding.getDate(),
  );
  return Math.round((weddingDay - today) / DAY_MS);
}

function msUntilNextLocalMidnight() {
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0,
    0,
  );
  return nextMidnight.getTime() - now.getTime();
}

function countdownLabel(days: number) {
  if (days > 1) {
    return `${days} DAYS`;
  }
  if (days === 1) {
    return "1 DAY";
  }
  if (days === 0) {
    return "TODAY";
  }
  return "CELEBRATED";
}

function subscribeToCalendarDay(onStoreChange: () => void) {
  let intervalId: ReturnType<typeof setInterval> | undefined;

  const timeoutId = setTimeout(() => {
    onStoreChange();
    intervalId = setInterval(onStoreChange, DAY_MS);
  }, msUntilNextLocalMidnight());

  const onVisible = () => {
    if (document.visibilityState === "visible") {
      onStoreChange();
    }
  };
  document.addEventListener("visibilitychange", onVisible);

  return () => {
    clearTimeout(timeoutId);
    if (intervalId) {
      clearInterval(intervalId);
    }
    document.removeEventListener("visibilitychange", onVisible);
  };
}

export function Countdown() {
  const days = useSyncExternalStore(
    subscribeToCalendarDay,
    daysUntilWedding,
    () => null,
  );

  return (
    <div className="mt-10 mb-8 text-center">
      <p className="text-[11px] font-medium tracking-[0.22em] text-[#3a3a3a] uppercase">
        Event takes place in:
      </p>
      <p
        className="mt-2 min-h-[1.35rem] text-[1.35rem] font-medium tracking-[0.08em] text-[#1f1f1f]"
        data-testid="countdown-value"
      >
        {days === null ? "\u00a0" : countdownLabel(days)}
      </p>
    </div>
  );
}
