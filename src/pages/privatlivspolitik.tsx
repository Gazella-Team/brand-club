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
            <h1 className="text-[30px] font-[700] mb-[20px]">Generelt</h1>
            <p className="text-[18px]">
            Personoplysninger er alle slags informationer, der i et eller andet omfang kan henføres til dig. Når du benytter vores website indsamler og behandler vi en række sådanne informationer. Det sker f.eks. ved alm. tilgang af indhold, hvis du tilmelder dig vores nyhedsbrev, deltager i konkurrencer eller undersøgelser, registrerer dig som bruger eller abonnent, øvrig brug af services eller foretager booking/køb via websitet. 

Vi indsamler og behandler typisk følgende typer af oplysninger: Et unikt ID og tekniske oplysninger om din computer, tablet eller mobiltelefon, dit IP-nummer, geografisk placering, samt hvilke sider du klikker på (interesser). I det omfang du selv giver eksplicit samtykke hertil og selv indtaster informationerne behandles desuden: Navn, telefonnummer, e-mail, adresse og betalingsoplysninger. Det vil typisk være i forbindelse med oprettelse af login eller ved køb.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Sikkerhed</h1>
            <p className="text-[18px]">
            Vi har truffet tekniske og organisatoriske foranstaltninger mod, at dine oplysninger hændeligt eller ulovligt bliver slettet, offentliggjort, fortabt, forringet eller kommer til uvedkommende kendskab, misbruges eller i øvrigt behandles i strid med lovgivningen.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Formål</h1>
            <p className="text-[18px]">
            Oplysningerne bruges til at identificere dig som bruger og vise dig de annoncer, som vil have størst sandsynlighed for at være relevante for dig, at registrere dine køb og betalinger, samt at kunne levere de services, du har efterspurgt, som f.eks. at fremsende et nyhedsbrev. Herudover anvender vi oplysningerne til at optimere vores services og indhold.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Periode for opbevaring
            </h1>
            <p className="text-[18px]">
            Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til lovgivningen, og vi sletter dem, når de ikke længere er nødvendige. Perioden afhænger af karakteren af oplysningen og baggrunden for opbevaring. Det er derfor ikke muligt at angive en generel tidsramme for, hvornår informationer slettes.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Videregivelse af oplysninger
            </h1>
            <p className="text-[18px]">
            Data om din brug af websitet, hvilke annoncer, du modtager og evt. klikker på, geografisk placering, køn og alderssegment m.v. videregives til tredjeparter i det omfang disse oplysninger er kendt. Du kan se hvilke tredjeparter, der er tale om, i afsnittet om “Cookies” ovenfor. Oplysningerne anvendes til målretning af annoncering. Vi benytter herudover en række tredjeparter til opbevaring og behandling af data. Disse behandler udelukkende oplysninger på vores vegne og må ikke anvende dem til egne formål. Videregivelse af personoplysninger som navn og e-mail m.v. vil kun ske, hvis du giver samtykke til det. Vi anvender kun databehandlere i EU eller i lande, der kan give dine oplysninger en tilstrækkelig beskyttelse.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Indsigt og klager
            </h1>
            <p className="text-[18px]">
            Vi kan opbevare og beholde dine data i op til 5 år efter dit køb i henhold til bogføringsloven, som kræver sin bibeholdelse af dokumenter i op til 5 år. Du har ret til at få oplyst, hvilke personoplysninger, vi behandler om dig. Du kan desuden til enhver tid gøre indsigelse mod, at oplysninger anvendes. Hvis de oplysninger, der behandles om dig, er forkerte, har du ret til at de bliver rettet. Henvendelse herom kan ske til: Benjamin@ocmamasterclass.com. Hvis du vil klage over vores behandling af dine personoplysninger, har du også mulighed for at tage kontakt til Datatilsynet.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
            Generelle bestemmelser
            </h1>
            <p className="text-[18px]">
            Din tilmelding i hvilken som helst sammenhæng under vores domæne gælder disse vilkår. Du accepterer at OCMA masterclass får lov til at sende markedsføringsrelaterede: mails, opkald/sms(er) til dig, hvis de føler der er relevans for det. Derudover accepterer du at du er over 18 år når du tilmelder dig under vores domæne.            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}