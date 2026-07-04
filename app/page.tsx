import Header from "@/components/site/Header";
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Studio from "@/components/home/Studio";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <SelectedWork />
        <Services />
        <Process />
        <Studio />
      </main>
      <Footer />
    </>
  );
}
