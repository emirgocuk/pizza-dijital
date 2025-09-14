// src/components/sections/Pricing.tsx
import Reveal from "@/components/ui/Reveal";

type Tier = {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
};

const tiers: Tier[] = [
  {
    name: "Başlangıç Dilimi",
    price: "₺9.900",
    period: "/proje",
    features: [
      "Tek sayfa landing",
      "Hızlı kurulum (Next.js)",
      "Temel SEO + Analytics",
      "1 revizyon turu",
    ],
    cta: "Başla",
    popular: false,
  },
  {
    name: "Büyüme Dilimi",
    price: "₺24.900",
    period: "/proje",
    features: [
      "Çok bölümlü site",
      "Blog / Case altyapısı",
      "Performance/Lighthouse 90+",
      "3 revizyon turu",
    ],
    cta: "Bu paketi seç",
    popular: true,
  },
  {
    name: "Pro Dilim",
    price: "₺/teklif",
    period: "",
    features: [
      "Özel tasarım sistemleri",
      "CRM / e-posta / form entegrasyonları",
      "A/B test & içerik stratejisi",
      "Sürekli büyüme danışmanlığı",
    ],
    cta: "Teklif al",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="paketler" className="bg-neutral-50">
      <div className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Pizza Dilim Paketleri</h2>
          <p className="mt-2 text-neutral-600">
            İhtiyacın kadar <span className="font-semibold">dilim</span> al—esnek, hızlı, ölçeklenebilir.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 80}>
              <div
                className={`relative rounded-2xl bg-white p-[1px] transition hover:-translate-y-1 ${
                  t.popular ? "shadow-xl" : "shadow"
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(248,210,74,0.7), rgba(240,68,56,0.4))",
                }}
              >
                <div className="rounded-2xl bg-white p-6">
                  {t.popular && (
                    <div className="mb-3 inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold text-pizzaYellow">
                      En çok tercih edilen
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <div className="mt-4 flex items-end gap-1">
                    <div className="text-3xl font-extrabold">{t.price}</div>
                    <div className="pb-1 text-sm text-neutral-500">{t.period}</div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span>✅</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#iletisim"
                    className={`mt-6 inline-block w-full rounded-xl px-5 py-3 text-center font-semibold transition ${
                      t.popular
                        ? "bg-black text-pizzaYellow hover:brightness-110"
                        : "border border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    {t.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Fiyatlar örnektir. İhtiyaca göre dilimler birleştirilebilir.
        </p>
      </div>
    </section>
  );
}
