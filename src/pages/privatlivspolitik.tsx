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

export default function Privat() {
  return (
    <main style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}}>
      <Navbar />
      <section className="py-[150px] pt-[250px]">
        <div className="w-[90%] mx-auto max-w-[800px]">
          <h1 className="text-[50px] font-[700] mb-[100px]">
            Privatlivspolitik
          </h1>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Generel Information</h1>
            <p className="text-[18px]">
            OCMA masterclass, der er beliggende i EU og opererer inden for sektoren "855900 Anden undervisning i.a.n.", værdsætter dit privatliv og er forpligtet til at beskytte de personoplysninger, vi indsamler om dig i overensstemmelse med gældende databeskyttelseslovgivning, herunder General Data Protection Regulation (GDPR)
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Dataindsamling og Formål</h1>
            <p className="text-[18px]">
            Når du tilmelder dig på vores website eller deltager i vores aktiviteter, vil du blive bedt om at oplyse dit fornavn, e-mailadresse og telefonnummer. Disse oplysninger indsamles udelukkende med det formål at kunne kontakte dig og tilbyde dig relevant markedsføringsmateriale og information om vores tjenester.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Samtykke</h1>
            <p className="text-[18px]">
            Ved at indtaste dine oplysninger på vores tilmeldingsformular og markere feltet "Jeg accepterer", bekræfter du, at du har læst og forstået denne privatlivspolitik og udtrykkeligt giver dit samtykke til, at vi må behandle dine personoplysninger til markedsføringsformål. Du kan til enhver tid trække dit samtykke tilbage ved at kontakte os eller ved at følge afmeldingsinstruktionerne i de kommunikationer, du modtager fra os.             </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Opbevaring og Sikkerhed</h1>
            <p className="text-[18px]">
            Dine personoplysninger opbevares sikkert i vores CRM-system, Leadconnector, som er hosted i EU. Vi anvender passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine oplysninger mod uautoriseret adgang, ændring, videregivelse eller ødelæggelse.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Videregivelse af oplysninger</h1>
            <p className="text-[18px]">
            Data om din brug af websitet, hvilke annoncer, du modtager og evt. klikker på, geografisk placering, køn og alderssegment m.v. videregives til tredjeparter i det omfang disse oplysninger er kendt.

Vi benytter herudover en række tredjeparter til opbevaring og behandling af data. Disse behandler udelukkende oplysninger på vores vegne og må ikke anvende dem til egne formål.
Videregivelse af personoplysninger som navn og e-mail m.v. vil kun ske, hvis du giver samtykke til det. Vi anvender kun databehandlere i EU eller i lande, der kan give dine oplysninger en tilstrækkelig beskyttelse.
              </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Dine Rettigheder</h1>
            <p className="text-[18px]">
            Som dataansvarlig har du ret til at anmode om adgang til og rettelse eller sletning af dine personoplysninger. Du har også ret til at begrænse behandlingen af dine data og til at gøre indsigelse mod behandlingen. Hvis du ønsker at udøve disse rettigheder, er du velkommen til at kontakte os på den nedenfor angivne kontaktinformation.</p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Kontaktinformation</h1>
            <p className="text-[18px]">
            Hvis du har spørgsmål eller bekymringer vedrørende behandlingen af dine personoplysninger, kan du kontakte os via:
benjamin@ocmamasterclass.com
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Ændringer til Privatlivspolitiken</h1>
            <p className="text-[18px]">
            Denne privatlivspolitik kan blive opdateret fra tid til anden for at afspejle ændringer i vores praksis. Nuværende version vil altid være tilgængelig på vores website.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}