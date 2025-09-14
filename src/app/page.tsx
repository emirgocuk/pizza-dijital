import FullSection from "@/components/layout/FullSection";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <main>
      {/* yazıyı yukarı taşımak için padTop'u 120 → 80 yaptım */}
      <FullSection id="hero" padTop={80}>
        <Hero />
      </FullSection>

      <FullSection id="hizmetler" padTop={120}>
        <Services />
      </FullSection>

      <FullSection id="isler" padTop={120}>
        <Work />
      </FullSection>

      <FullSection id="paketler" padTop={120}>
        <Pricing />
      </FullSection>

      <FullSection id="surec" padTop={120}>
        <Process />
      </FullSection>

      <FullSection id="sss" padTop={120}>
        <FAQ />
      </FullSection>
    </main>
  );
}
