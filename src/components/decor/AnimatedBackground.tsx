"use client";

import { useEffect, useRef } from "react";

/**
 * İki blob: sarı ve kırmızı.
 * - Kaydırdıkça parallax (x/y) hareket
 * - Zamanla yavaşça dönme (rAF)
 */
export default function AnimatedBackground() {
  const yellowRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const render = (t: number) => {
      const scrollY = window.scrollY || 0;
      const wh = window.innerHeight || 1;

      // Parallax kuvveti (oynatmak istersen katsayılarla oyna)
      const k1 = 0.18; // sarı
      const k2 = 0.22; // kırmızı

      // Yavaş dönüş açıları (daha hızlı için 0.03 -> 0.05 gibi büyüt)
      const rot1 = (t * 0.02) % 360;   // derece / saniye ~0.02
      const rot2 = (t * 0.016) % 360;

      // Parallax ofsetleri
      const yOff1 = -(scrollY * k1);
      const xOff1 =  (scrollY * k1) * 0.4;

      const yOff2 =  (scrollY * k2) * 0.6;
      const xOff2 = -(scrollY * k2) * 0.35;

      // Başlangıç konumları (ekrana göre yüzde). Yukarı/sağa kaydırmak istersen değiştir.
      const baseY1 = wh * 0.12; // sarı üstlere yakın
      const baseX1 = 0.15 * window.innerWidth;

      const baseY2 = wh * 0.35; // kırmızı ortaya yakın
      const baseX2 = 0.70 * window.innerWidth;

      if (yellowRef.current) {
        yellowRef.current.style.transform =
          `translate3d(${baseX1 + xOff1}px, ${baseY1 + yOff1}px, 0) rotate(${rot1}deg)`;
      }
      if (redRef.current) {
        redRef.current.style.transform =
          `translate3d(${baseX2 + xOff2}px, ${baseY2 + yOff2}px, 0) rotate(${rot2}deg)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="bg-blobs" aria-hidden>
      <div ref={yellowRef} className="blob yellow" />
      <div ref={redRef} className="blob red" />
    </div>
  );
}
