"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { zoom } from "@/lib/site";

function viewportBottom() {
  const viewport = window.visualViewport;
  if (viewport) {
    return viewport.offsetTop + viewport.height;
  }
  return window.innerHeight;
}

export function ZoomStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  const updateHeight = useCallback(() => {
    const node = stageRef.current;
    if (!node) {
      return;
    }
    const top = node.getBoundingClientRect().top;
    setHeight(Math.max(320, Math.floor(viewportBottom() - top - 8)));
  }, []);

  useLayoutEffect(() => {
    updateHeight();
    const node = stageRef.current;
    window.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("scroll", updateHeight);
    const observer = node ? new ResizeObserver(updateHeight) : null;
    if (node) {
      observer?.observe(node);
    }
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.visualViewport?.removeEventListener("resize", updateHeight);
      window.visualViewport?.removeEventListener("scroll", updateHeight);
      observer?.disconnect();
    };
  }, [updateHeight]);

  return (
    <div
      ref={stageRef}
      className="relative w-full min-h-[min(70svh,calc(100svh-12rem))] overflow-hidden rounded-2xl border border-[#e8ddd4] bg-[#111] md:min-h-[min(72dvh,calc(100dvh-14rem))]"
      style={height ? { height } : undefined}
      data-testid="zoom-stage"
    >
      {loaded ? null : (
        <p className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center font-serif text-lg text-white/85">
          Opening the Zoom room…
        </p>
      )}
      <iframe
        title="Wedding Zoom room"
        data-testid="zoom-frame"
        src={zoom.joinUrl}
        allow="camera *; microphone *; autoplay *; clipboard-write *; display-capture *; fullscreen *; speaker-selection *"
        allowFullScreen
        className="relative z-20 h-full w-full border-0 bg-white"
        onLoad={() => setLoaded(true)}
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
