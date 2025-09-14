"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Süreç" },
  { href: "#isler", label: "İşler" },
  { href: "#paketler", label: "Paketler" },
  { href: "#sss", label: "SSS" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // basit scroll-spy
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const l of LINKS) {
        const sec = document.querySelector(l.href) as HTMLElement | null;
        if (!sec) continue;
        const top = sec.offsetTop - 140;
        if (window.scrollY >= top) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mobil menü açıkken body scroll kilidi
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      {/* ince renkli alt çizgi */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-pizza-yellow/70 via-transparent to-pizza-red/70" />

      {/* SABİT YÜKSEKLİK & BOŞLUKLAR
         - Logonun boyutunu aşağıdaki img'deki h-[72px] ile ayarlarsın
         - Üst/alt boşluk: py-4 (8px=py-2, 16px=py-4, 24px=py-6) */}
      <div className="container flex items-center justify-between min-h-[92px] px-4">
        {/* Logo + kelime işaret */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/brand/pizza-logo.svg"
            alt="Pizza Dijital"
            className="h-[72px] w-auto select-none"
            draggable={false}
          />
          <span className="text-lg font-extrabold tracking-tight">
            Pizza <span className="text-neutral-900">Dijital</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-7 text-sm sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative transition ${
                active === l.href ? "text-pizza-red" : "text-neutral-800 hover:text-pizza-red"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-pizza-red transition-all ${
                  active === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#iletisim"
            className="hidden sm:inline-block rounded-xl border border-black/10 bg-pizza-yellow px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:brightness-110"
          >
            Ücretsiz keşif
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 sm:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menüyü aç/kapa"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-black" />
              <span className="block h-0.5 w-5 bg-black" />
              <span className="block h-0.5 w-5 bg-black" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="sm:hidden">
          <div className="container px-4 pb-4">
            <div className="rounded-2xl border border-black/10 bg-white p-3 shadow-md">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    active === l.href ? "bg-pizza-red/10 text-pizza-red" : "hover:bg-black/5"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#iletisim"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-pizza-yellow px-3 py-2 text-center text-sm font-semibold text-black"
              >
                Ücretsiz keşif
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
