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
  const [view, setView] = useState<"chooser" | "browser">("chooser");

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
      className="relative flex w-full min-h-[min(70svh,calc(100svh-12rem))] items-center justify-center overflow-hidden rounded-2xl border border-[#e8ddd4] bg-white md:min-h-[min(72dvh,calc(100dvh-14rem))]"
      style={height ? { height } : undefined}
      data-testid="zoom-stage"
    >
      {view === "chooser" ? (
        <div className="flex w-full max-w-md flex-col items-center px-6 py-10 text-center">
          <p className="text-[1.65rem] font-bold tracking-[-0.04em] text-[#0E72ED]">
            ZOOM
          </p>
          <h2 className="mt-10 text-[1.35rem] font-semibold text-[#1a1a1a]">
            Join meeting
          </h2>
          <a
            href={zoom.joinUrl}
            data-testid="zoom-join-app"
            className="mt-8 inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-md bg-[#0E72ED] text-[15px] font-medium text-white transition hover:bg-[#0c64d1]"
          >
            Join from Zoom Workplace app
          </a>
          <button
            type="button"
            data-testid="zoom-join-browser"
            onClick={() => setView("browser")}
            className="mt-3 inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-md border border-[#d0d0d8] bg-white text-[15px] font-medium text-[#1a1a1a] transition hover:bg-[#f7f7f8]"
          >
            Join from browser
          </button>
          <p className="mt-6 text-[13px] leading-5 text-[#5b5b67]">
            Don&apos;t have the Zoom Workplace app installed?{" "}
            <a
              href={zoom.downloadUrl}
              data-testid="zoom-download"
              className="text-[#0E72ED] hover:underline"
            >
              Download Now
            </a>
          </p>
        </div>
      ) : (
        <iframe
          title="Wedding Zoom room"
          data-testid="zoom-frame"
          src={zoom.browserUrl}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
          allow="camera *; microphone *; autoplay *; clipboard-write *; display-capture *; fullscreen *; speaker-selection *"
          allowFullScreen
          className="h-full w-full border-0 bg-white"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
}
