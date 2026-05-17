import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { MetodoESC } from "@/components/sections/MetodoESC";
import { ReelsProcesso } from "@/components/sections/ReelsProcesso";
import { FastVsCompleto } from "@/components/sections/FastVsCompleto";
import { PreDiagnostico } from "@/components/sections/PreDiagnostico";
import { Provas } from "@/components/sections/Provas";
import { Localizacao } from "@/components/sections/Localizacao";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFAB } from "@/components/WhatsappFAB";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <MetodoESC />
        <ReelsProcesso />
        <FastVsCompleto />
        <PreDiagnostico />
        <Provas />
        <Localizacao />
      </main>
      <Footer />
      <WhatsappFAB numero="5511991783807" />
    </>
  );
}
