const steps = [
  ["Keşif", "Hedefleri ve başarı metriklerini netliyoruz."],
  ["Araştırma", "Rakip, kullanıcı, pazar içgörüleri."],
  ["Prototip", "Hızlı kabuk, akış ve kullanıcı testleri."],
  ["Tasarım", "UI sistemleri, komponentler, marka dokusu."],
  ["Geliştirme", "Next.js performans, SEO, analitik kurulum."],
  ["Lansman & Büyüme", "A/B test, içerik, reklam ve iterasyon."],
];

export default function Process() {
  return (
    <section id="surec" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="text-3xl font-bold">Sürecimiz</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([t, d], idx) => (
            <div key={t} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-pizzaYellow font-semibold">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-semibold">{t}</h3>
              </div>
              <p className="mt-3 text-neutral-600">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-600">
          “Pizza modeli”: İhtiyacın kadar <span className="font-semibold">dilim</span> al—esnek paketler, ölçeklenebilir işleyiş.
        </p>
      </div>
    </section>
  );
}
