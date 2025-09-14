import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative text-center">
      {/* yalnızca içerik; arka plan/kart YOK */}
      <div className="container">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-wide text-neutral-700 shadow-sm backdrop-blur">
            🍕 PIZZA DİJİTAL • YENİ NESİL AJANS
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            Markanı <span className="bg-gradient-to-r from-black to-neutral-800 bg-clip-text text-transparent">dilim dilim</span> büyüt.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-700">
            Tasarım, yazılım ve pazarlamayı tek tabakta sunuyoruz. Hızlı, yaratıcı, ölçülebilir sonuçlar.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button as="a" href="#iletisim">Ücretsiz keşif görüşmesi</Button>
            <Button as="a" href="#hizmetler" variant="outline">
              Hizmetlerimiz
            </Button>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <ul className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-4 text-sm text-neutral-600">
            <li>⚡ Hızlı teslim</li>
            <li>🎯 Performans odaklı</li>
            <li>🔁 Esnek “dilim” paketler</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
