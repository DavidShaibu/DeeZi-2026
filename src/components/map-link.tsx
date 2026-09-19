"use client";

import { useSyncExternalStore, type ReactNode } from "react";

function googleMapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function appleMapsUrl(name: string, address: string) {
  const params = new URLSearchParams({
    q: name,
    address,
  });
  return `https://maps.apple.com/?${params.toString()}`;
}

function subscribe() {
  return () => {};
}

function isAppleDevice() {
  return /iPhone|iPad|iPod/.test(navigator.userAgent);
}

export function MapLink({
  name,
  address,
  className,
  children,
}: {
  name: string;
  address: string;
  className?: string;
  children: ReactNode;
}) {
  const query = `${name}, ${address}`;
  const apple = useSyncExternalStore(subscribe, isAppleDevice, () => false);
  const href = apple ? appleMapsUrl(name, address) : googleMapsUrl(query);

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
