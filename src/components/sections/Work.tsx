import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const works = [
  { title: "E-ticaret Dönüşümü", metric: "%38 daha hızlı yüklenme", img: "/work/work1.jpg" },
  { title: "B2B Kurumsal Site", metric: "%42 organik trafik artışı", img: "/work/work2.jpg" },
  { title: "SaaS Landing", metric: "3.2x kayıt artışı", img: "/work/work3.jpg" },
];

export default function Work() {
  return (
    <section id="isler" className="bg-white">
      <div className="container py-16">
        <Reveal>
          <SectionHeader title="İşlerimiz" subtitle="Seçili projelerden performans sonuçları." />
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {works.map((w, idx) => (
            <Reveal key={w.title} delay={idx * 80}>
              <article className="group overflow-hidden rounded-2xl border">
                <div className="relative aspect-[16/10]">
                  <img
                    src={w.img}
                    alt={w.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="text-sm text-white/80">{w.metric}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
