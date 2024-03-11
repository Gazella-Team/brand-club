import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import FeaturesSlider from "@/components/featuresslider";
import Footer from "@/components/Layout/Footer";
import TrustBadges from "@/components/trustbadges";
import FAQ from "@/components/faq";
import Why from "@/components/why";
import TieredSystem from "@/components/tieredsystem";
import About from "@/components/about";
import Free from "@/components/free";
import ClassContent from "@/components/classcontent";
import Articles from "@/components/articles";
import Calls from "@/components/calls";
import Contents from "@/components/contents";
import { Element } from "react-scroll";

export default function Garanti() {
  return (
    <main style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}}>
      <Navbar />
      <section className="py-[150px] pt-[250px]">
        <div className="w-[90%] mx-auto max-w-[800px]">
          <h1 className="text-[50px] font-[700] mb-[30px]">Garanti</h1>
          <p className="mb-[40px] text-[18px]">
            Vi hos organic masterclass ligger fokus på at adskille os og være
            transparente, derfor har vi valgt at give dig alle dine penge
            tilbage hvis du ikke lukker din første betalende kunde efter 180
            dage i vores masterclass<br></br>
            <br></br>Denne garanti tilbydes, da vi er meget stolte af vores
            produkt, vi ved alle nok skal få succes med det, hvis de ligger
            arbejdet i det. Vi har denne garanti, da vi vil sikre hver elevs
            succes.
            <br></br>
            <br></br>Hvis du har gjort brug af garantien én gang, er du stadig
            velkommen til at deltage i vores masterclass på et senere tidspunkt.
            Dog vil den nye pris gælde, hvis den er steget i mellemtiden. Når du
            vælger at deltage i vores masterclass igen efter at have benyttet
            garantien, fraviges enhver form for ekstra garanti ved køb af
            organic masterclass.
            <br></br>
            <br></br>
            Ønsker du at gøre brug af din garanti, bedes du kontakte os
            skriftligt.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}