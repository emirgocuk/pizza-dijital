const logos = [
  { name: "Delta", src: "/logos/delta.svg" },
  { name: "Miv", src: "/logos/miv.svg" },
  { name: "KibrisTKD", src: "/logos/ktkd.svg" },
  { name: "Flow", src: "/logos/flow.svg" },
  { name: "Aurora", src: "/logos/aurora.svg" },
];

export default function Logos() {
  return (
    <section className="bg-white">
      <div className="container py-10">
        <p className="text-center text-sm text-neutral-500">Bizi tercih eden markalardan bazıları</p>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l) => (
            <img key={l.name} src={l.src} alt={l.name} className="h-8 opacity-70" />
          ))}
        </div>
        <figure className="mx-auto mt-8 max-w-2xl rounded-2xl border p-6 text-center">
          <blockquote className="text-lg">
            “Pizza Dijital ile site hızımız sıçradı, kampanya sayfaları 3 kat daha iyi dönüyor.”
          </blockquote>
          <figcaption className="mt-2 text-sm text-neutral-600">– Müşteri yorumu (örnek)</figcaption>
        </figure>
      </div>
    </section>
  );
}
