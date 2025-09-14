export default function CTA() {
  return (
    <section id="iletisim" className="bg-neutral-50">
      <div className="container py-16">
        <div className="rounded-2xl bg-black p-10 text-white">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Markanı büyütmeye hazır mısın?</h3>
              <p className="text-white/70">Hemen ücretsiz bir keşif görüşmesi planlayalım.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:info@pizzadijital.com"
                className="rounded-xl bg-pizzaYellow px-6 py-3 font-semibold text-black transition hover:brightness-110"
              >
                Bize yaz
              </a>
              <a
                href="https://wa.me/905555555555"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
