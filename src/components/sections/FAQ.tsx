"use client";

import { motion } from "framer-motion";

const faq = [
  { q: "Teslim süresi nedir?", a: "Başlangıç paketleri 1–2 hafta; orta ölçekli projeler 3–6 hafta aralığında." },
  { q: "Revizyon politikası?", a: "Belirlenen revizyon turu ücretsizdir. Ek talepler dilim bazlı eklenir." },
  { q: "Bakım / destek veriyor musunuz?", a: "Evet. Aylık bakım ve performans izleme için esnek dilimlerimiz var." },
  { q: "Kod bize ait mi?", a: "Evet. Versiyon kontrolü ile size ait repoda ilerliyoruz." },
];

export default function FAQ() {
  return (
  <div className="section-wrap py-24">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Sık Sorulanlar</h2>
      <p className="mt-2 max-w-2xl text-neutral-700">Kafanızda kalanları netleştirelim.</p>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faq.map((f, i) => (
          <motion.details
            key={f.q}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-xl border border-black/10 bg-white/95 p-4 shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer select-none list-none text-sm font-semibold leading-6 outline-none">
              <span className="mr-2 inline-block rotate-0 transition group-open:rotate-90 text-sauce-red">›</span>
              {f.q}
            </summary>
            <div className="pt-2 text-sm text-neutral-700">{f.a}</div>
          </motion.details>
        ))}
      </div>
    </div>
  );
}


