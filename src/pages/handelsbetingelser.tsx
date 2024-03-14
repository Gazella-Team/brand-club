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

export default function Handelsbetingelser() {
  return (
    <main style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}}>
      <Navbar />
      <section className="py-[150px] pt-[250px]">
        <div className="w-[90%] mx-auto max-w-[800px]">
          <h1 className="text-[50px] font-[700] mb-[30px]">
            Handelsbetingelser
          </h1>
          <p className="mb-[100px] text-[18px]">
          Når du samarbejder med OCMA Masterclass, skal du vide, at alt er omhyggeligt struktureret og gennemført. Dette inkluderer både det produkt, vi har skabt og er meget stolte af, samt de juridiske aspekter. Af denne grund har vi tydeliggjort alle de punkter, du accepterer ved indgåelse af en aftale med OCMA Masterclass. Primært er dette selvindlysende og opfattes i vores optik som almindelig forretningspraksis. Tøv ikke med at kontakte os på benjamin@ocmamasterclass.com hvis du har spørgsmål.
          </p>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Tilbud og aftale
            </h1>
            <p className="text-[18px]">
            Fakturaen/betalingslinket for aftalen/købet/bestillingen/ordren bliver sendt, så snart der opnås enighed. Den anses for accepteret, og dermed gælder ingen fortrydelsesret, så snart kunden modtager fakturaen, medmindre kunden skriftligt meddeler, at der er noget galt. Især ved betaling af fakturaen anses det som accepteret, og der gælder ingen fortrydelsesret. (Husk dog vi har tilfredshedsgaranti, læs længere nede)
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Priser og betaling
            </h1>
            <p className="text-[18px]">
            Hvis betalingsfristen, som er angivet på fakturaen, overskrides, forbeholder OCMA Masterclass sig retten til at pålægge kunden rykkergebyrer og inkassoomkostninger
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Ansvar</h1>
            <p className="text-[18px]">
            Kunden har ansvaret for legaliteten af produkternes indhold og udformning både i offentligretlig og privatretlig sammenhæng. Det skal understreges, at OCMA Masterclass ikke aktivt vurderer lovligheden af markedsføringstiltag af nogen art, uanset i hvilket omfang  Ocma Masterclass har medvirket til udformningen af disse.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Begrænset hæftelse
            </h1>
            <p className="text-[18px]">
            Ved forsinkelse eller mangler ved det leverede påtager OCMA Masterclass sig ikke ansvar for driftstab, tab af avance eller andet indirekte tab, herunder tab som følge af kundens retsforhold overfor tredjemand. OCMA Masterclass kan under ingen omstændigheder påtage sig ansvar for et større beløb end det, der er blevet betalt ved købet af  vores 
masterclass

            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
            Ved køb af OCMA Masterclass
            </h1>
            <p className="text-[18px]">
            Når du køber en Masterclass hos OCMA Masterclass, så forpligter du dig samtidig til ikke på nogen vis uddele materiale eller lignende til personer, som ikke har købt forløbet. Hvis du gør dette, så er OCMA Masterclass berettiget til at kræve et erstatningskrav og smide dig ud af gruppen og lukke ned for din adgang. Se mere nedenfor.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Brugs- og ejendomsret
            </h1>
            <p className="text-[18px]">
            Kunden opnår fuld brugsret til det specifikke indhold og de tilhørende skabeloner. Kunden defineres her som den person, der erhverver ydelsen, enten som en repræsentant for et firma eller som en privatperson. Hvis indholdet erhverves af en virksomhed, vil brugsretten til ydelsen kun følge den specifikke erhverver, som identificeres som kontaktperson for virksomheden ved erhvervelsen.
Ved virksomhedens køb af produktet er det ikke tilladt internt i virksomheden at videredistribuere indholdet til ansatte eller medejere, da dette vil blive anset som et brud på handelsbetingelserne. Hvis behovet opstår for at anvende produktet af flere personer inden for samme virksomhed/juridiske enhed, skal der rettes henvendelse for at anmode om tilbud på udstedelse af flere licenser.
Hvis en virksomhed eller privatperson, inden der indhentes tilbud på udstedelse af flere licenser, allerede har overtrådt reglerne for videredistribuering, forbeholder udstederen sig retten til at fakturere virksomheden for en ny licens, da dette betragtes som et brud på handelsbetingelserne.

              <br></br>
              <br></br>
              Kunden har herunder tilladelse til at gøre følgende:<br></br>{" "}
              -Elektronisk lagre det oprindelige indhold/skabelon til eget senere brug (ikke omfattet af videoer).
              <br></br>
              -Udskrive det oprindelige dokument/skabelon til eget brug.
              <br></br>-Tilrette skabelonerne til den givne situation samt udskrive denne/disse version(er).
              <br></br>-Kunden må ikke overdrage pågældende indhold/skabelon til
              andre, videredistribuere det på internettet eller i anden
              elektronisk form eller i trykte (papir-)udgaver uden forudgående
              tilladelse.
              <br></br>-Kunden er under ingen omstændigheder berettiget til at
              videredistribuere dokumenter og/eller skabeloner.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
            Garanti ved køb af OCMA masterclass
            </h1>
            <p className="text-[18px]">
            Du kan få alle dine penge refunderet efter 180 dage + 12.000 overført såfremt du ikke har opnået en indkomst på 20.000,- / måned For at indløse garantien skal følgende krav opfyldes:<br></br>
              <br></br> - Lave min. 20 outreaches om dagen<br></br>
              <br></br> - Deltage til alle ugentlige opkald <br></br>
              <br></br> - Set hele OCMA masterclass<br></br>
              <br></br> - Være medlem i min. 180 dage af OCMA masterclass
              <br></br>Bygge både din instagram & Linkedin op til min 2.000 følgere
              <br></br>
              <br></br> Denne garanti tilbydes, da vi er meget stolte af vores produkt, vi ved alle nok skal få succes med det, hvis de ligger arbejdet i det, vil vi sikre hver elevs succes. Din succes er vores succes. 

Hvis du har gjort brug af garantien én gang, er du stadig velkommen til at deltage i forløbet på et senere tidspunkt. Dog vil den nye pris gælde, hvis den er steget i mellemtiden. Når du vælger at deltage i forløbet igen efter at have benyttet garantien, fraviges enhver form for  ekstra garanti ved køb af OCMA masterclass. Ønsker du at gøre brug af din garanti, bedes du kontakte os skriftligt.

            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Indtægtsfraskrivelse
            </h1>
            <p className="text-[18px]">
            OCMA masterclass fraskriver sig enhver forpligtelse vedrørende kursisternes succes i at opnå indtægt gennem vores online forløb. Dette gøres af respekt for vores masterclass. Alle indtjenings- og indkomst eksempler på vores hjemmeside og masterclass er udelukkende estimater for, hvad der potentielt kan opnås. Der er ingen garanti for, at du vil kunne opnå de angivne eksempler.
OCMA Masterclass påtager sig intet ansvar for eventuelle økonomiske tab, som du eventuelt kunne pådrage dig ved brug af OCMA masterclass produkt, uanset vores opfattelse af, at prisen er rimelig i forhold til værdien af produktet.

            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Ansvarsfraskrivelse
            </h1>
            <p className="text-[18px]">
            Det er elevens eget ansvar at være opdateret på gældende lovgivning til enhver tid. OCMA masterclass kan ikke påtage sig ansvar, hverken helt eller delvist, for eventuelle lovovertrædelser, der måtte opstå som følge af elevens handlinger.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Fortrolighed og GDPR
            </h1>
            <p className="text-[18px]">
            Oplysninger må på ingen måde deles med tredjepart og må ikke udnyttes, herunder også efter aftalens udløb. Begge parter forpligter sig til at behandle oplysningerne på en måde, der sikrer, at de forbliver utilgængelige for uvedkommende, og at der ikke opstår nogen risiko for, at uvedkommende får kendskab til dem. Det er kundens ansvar at fjerne OCMA Masterclass´s adgang til alt, der vedrører persondata.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Underleverandører
            </h1>
            <p className="text-[18px]">
            OCMA masterclass er berettiget til helt eller delvis at lade arbejde udføre hos underleverandør(er).
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Lovvalg og værneting
            </h1>
            <p className="text-[18px]">
            Eventuelle uoverensstemmelser, der opstår som følge af disse betingelser eller andre samhandelsforhold mellem parterne, skal indbringes for retten i København. Tvisten vil blive afgjort i overensstemmelse med dansk ret.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}