"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";

export default function ScrollPager({ children }: { children: React.ReactNode }) {
  const indexRef = useRef(0);
  const ticking = useRef(false);
  const coolDown = useRef(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-page]")
    );
    if (!sections.length) return;

    const getHeaderOffset = (): number => {
      const cssVar = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-h")
        .trim();
      const px = parseInt(cssVar || "100", 10);
      return Number.isFinite(px) ? -px : -100;
    };

    const updateIndexFromScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      const i = sections.findIndex((s) => {
        const r = s.getBoundingClientRect();
        const top = r.top + window.scrollY;
        const bottom = top + r.height;
        return mid >= top && mid < bottom;
      });
      if (i >= 0) indexRef.current = i;
    };
    updateIndexFromScroll();

    const callLenisScrollTo = (lenis: Lenis, target: Element, options: {
      offset: number;
      duration: number;
      easing: (t: number) => number;
    }) => {
      // Lenis tipleri sürüme göre overload içeriyor; güvenli çağrı
      (lenis as unknown as {
        scrollTo: (el: Element | number, opts?: Record<string, unknown>) => void;
      }).scrollTo(target, options);
    };

    const onWheel = (e: WheelEvent) => {
      if (coolDown.current) return;
      if (Math.abs(e.deltaY) < 15) return;

      e.preventDefault();

      if (ticking.current) return;
      ticking.current = true;

      const dir = e.deltaY > 0 ? 1 : -1;
      let next = indexRef.current + dir;
      next = Math.max(0, Math.min(sections.length - 1, next));

      if (next !== indexRef.current) {
        indexRef.current = next;
        const target = sections[next];
        const offset = getHeaderOffset();

        const lenis = window.__lenis;
        if (lenis) {
          callLenisScrollTo(lenis, target, {
            offset,
            duration: 0.9,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          });
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.scrollBy({ top: offset, behavior: "smooth" });
        }

        coolDown.current = true;
        setTimeout(() => (coolDown.current = false), 420);
      }

      requestAnimationFrame(() => (ticking.current = false));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", updateIndexFromScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", updateIndexFromScroll);
    };
  }, []);

  return <>{children}</>;
}
