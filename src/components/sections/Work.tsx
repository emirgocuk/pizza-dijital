"use client";

import { motion, type Variants } from "framer-motion";

type WorkItem = { id: string; title: string; tag: string; image?: string };

const items: WorkItem[] = [
  { id: "w1", title: "Delta • Kurumsal Site", tag: "Web", image: "/work/work1.jpg" },
  { id: "w2", title: "Flow • SaaS Landing", tag: "Landing", image: "/work/work2.jpg" },
  { id: "w3", title: "Aurora • E-ticaret", tag: "E-commerce", image: "/work/work3.jpg" },
  { id: "w4", title: "MiV • Mobil UI", tag: "UI", image: "/work/work4.jpg" },
  { id: "w5", title: "KTKD • Branding", tag: "Branding", image: "/work/work5.jpg" },
  { id: "w6", title: "Nova • Ürün Sitesi", tag: "Web", image: "/work/work6.jpg" },
];

const parent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Work() {
  return (
    <div className="section-wrap py-24">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">İşler</h2>
      <p className="mt-2 max-w-2xl text-neutral-700">Seçtiğimiz projelerden küçük bir vitrin.</p>

      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
        /* 2 sütun */
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {items.map((it) => (
          <motion.a
            key={it.id}
            href="#iletisim"
            variants={card}
            className="group relative overflow-hidden rounded-2xl border bg-white/90 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg hover:ring-pizza-yellow/40"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-pizza-yellow/15 to-sauce-red/15">
              {it.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  draggable={false}
                />
              )}
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <div className="text-[11px] font-semibold text-sauce-red">{it.tag}</div>
                <div className="text-sm font-semibold">{it.title}</div>
              </div>
              <div className="rounded-full bg-black/5 px-2 py-1 text-xs opacity-70 transition group-hover:opacity-100">↗</div>
            </div>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pizza-yellow/80 via-transparent to-sauce-red/80" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
