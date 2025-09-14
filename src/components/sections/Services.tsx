
"use client";

import { motion, type Variants } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    title: "Tasarım & Branding",
    text: "Logo, kurumsal kimlik, web & mobil UI.",
    emoji: "🎨",
  },
  {
    title: "Web & Uygulama",
    text: "Next.js, e-ticaret, kurumsal site, SEO temelli.",
    emoji: "🧩",
  },
  {
    title: "Dijital Pazarlama",
    text: "Performans reklamları, sosyal medya, içerik.",
    emoji: "�",
  },
  {
    title: "Prodüksiyon",
    text: "Fotoğraf, video, animasyon & post prodüksiyon.",
    emoji: "🎬",
  },
];

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
export default function Services() {
  return (
    <div className="section-wrap py-24">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Hizmetlerimiz</h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-2 max-w-2xl text-neutral-700">
            İhtiyacına göre dilimleri birleştir; modüler ve ölçeklenebilir işleyiş.
          </p>
        </Reveal>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          /* 2 sütun – 4 kutu -> 2×2 */
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={child}
              className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">{it.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{it.text}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-pizza-yellow via-transparent to-pizza-red opacity-60 transition group-hover:opacity-90" />
            </motion.div>
          ))}
    </motion.div>
  </div>
  );
}
