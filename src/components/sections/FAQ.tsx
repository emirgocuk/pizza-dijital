const faqs = [
  ["Ne kadar sürede teslim ediyorsunuz?", "Landing projeleri 1-2 hafta; kapsam büyüdükçe planlıyoruz."],
  ["SEO tarafında ne yapıyorsunuz?", "Teknik SEO, Lighthouse 90+, sitemap/robots, schema ve içerik önerisi."],
  ["Sonradan sayfa ekleyebilir miyiz?", "Evet—dilim mantığında ek paket olarak büyütüyoruz."],
  ["Ödeme ve sözleşme süreci nasıl?", "İş planı + milestone’lar, proje başlangıcı ve teslimde dilimli ödeme."],
];

export default function FAQ() {
  return (
    <section id="sss" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="text-3xl font-bold">Sık Sorulan Sorular</h2>

        <div className="mt-6 divide-y rounded-2xl border bg-white">
          {faqs.map(([q, a], idx) => (
            <details key={idx} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 hover:bg-neutral-50">
                <span className="font-semibold">{q}</span>
                <span className="ml-4 rounded-full border px-2 py-0.5 text-xs transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-neutral-700">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
