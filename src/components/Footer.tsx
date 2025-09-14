// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Pizza Dijital</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#hizmetler" className="hover:underline">Hizmetler</a>
          <a href="#surec" className="hover:underline">Süreç</a>
          <a href="#isler" className="hover:underline">İşler</a>
          <a href="#iletisim" className="hover:underline">İletişim</a>
        </nav>
      </div>
    </footer>
  );
}
