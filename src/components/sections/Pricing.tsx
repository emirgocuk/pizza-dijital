"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

type Tier = {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Başlangıç",
    price: "₺9.900",
    period: "/proje",
    features: ["Tek sayfa landing", "Hafif UI kit", "Temel SEO", "1 tur revizyon"],
    cta: "Başla",
  },
  {
    name: "Büyüme",
    price: "₺24.900",
    period: "/proje",
    popular: true,
    features: ["Çok sayfa site", "Özel UI", "Performans & SEO", "2 tur revizyon"],
    cta: "Teklif al",
  },
  {
    name: "Plus",
    price: "₺39.900",
    period: "/proje",
    features: ["E-ticaret / SaaS", "Design system", "Analitik & A/B", "3 tur revizyon"],
    cta: "Görüşelim",
  },
];

export default function Pricing() {
  return (
    <div className="section-wrap py-24">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Paketler</h2>
      <p className="mt-2 max-w-2xl text-neutral-700">Projeyi dilim dilim büyüt. İşine en uygun paketi seç.</p>

      {/* daha dar bir satır: */}
      <div className="mt-10 mx-auto w-full max-w-5xl grid gap-6 md:grid-cols-3">
        {tiers.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-2xl bg-white p-[1px] ring-1 ring-black/5 transition hover:-translate-y-1 ${
              t.popular ? "shadow-xl" : "shadow"
            }`}
          >
            <div className="rounded-2xl bg-white p-6">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-pizza-yellow via-transparent to-sauce-red" />
              {t.popular && (
                <span className="absolute right-4 top-4 rounded-full bg-pizza-yellow px-2 py-0.5 text-xs font-semibold text-black">Popüler</span>
              )}
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <div className="text-3xl font-extrabold text-neutral-900">{t.price}</div>
                <div className="text-sm text-neutral-500">{t.period}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-0.5 text-sauce-red">✓</span><span className="text-neutral-700">{f}</span></li>
                ))}
              </ul>
              <div className="mt-6"><Button as="a" href="#iletisim" className="w-full">{t.cta}</Button></div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-neutral-500">Fiyatlar örnektir. İhtiyaca göre kapsam belirlenir. KDV hariçtir.</p>
    </div>
  );
}

