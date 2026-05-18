import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { MetodoESC } from "@/components/sections/MetodoESC";
import { ReelsProcesso } from "@/components/sections/ReelsProcesso";
import { FastVsCompleto } from "@/components/sections/FastVsCompleto";
import { ShowroomApp } from "@/components/sections/ShowroomApp";
import { StackTecnologico } from "@/components/sections/StackTecnologico";
import { PreDiagnostico } from "@/components/sections/PreDiagnostico";
import { Provas } from "@/components/sections/Provas";
import { Localizacao } from "@/components/sections/Localizacao";
import { NasRedes } from "@/components/sections/NasRedes";
import { ManifestoFinal } from "@/components/sections/ManifestoFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFAB } from "@/components/WhatsappFAB";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Hero não usa ScrollReveal — primeira tela, sempre visível */}
        <Hero />

        <ScrollReveal>
          <MetodoESC />
        </ScrollReveal>

        <ScrollReveal>
          <ShowroomApp />
        </ScrollReveal>

        <ScrollReveal>
          <StackTecnologico />
        </ScrollReveal>

        <ScrollReveal>
          <ReelsProcesso />
        </ScrollReveal>

        <ScrollReveal>
          <FastVsCompleto />
        </ScrollReveal>

        <ScrollReveal>
          <PreDiagnostico />
        </ScrollReveal>

        <ScrollReveal>
          <Provas />
        </ScrollReveal>

        <ScrollReveal>
          <Localizacao />
        </ScrollReveal>

        <ScrollReveal>
          <NasRedes />
        </ScrollReveal>

        <ScrollReveal>
          <ManifestoFinal />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsappFAB numero="5511991783807" />
    </>
  );
}
