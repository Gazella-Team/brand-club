import SectionStarter from "./sectionstarter";
import { Reveal } from "./Animations/Reveal";
import { use, useState } from "react";
import { Play, Clock, PlusCircle, XCircle } from "lucide-react";
import { useRouter } from "next/router";

const classContentData = [
  {
    image: "/chaps/ch1.jpg",
    mainHeading: "Fundamentet for dit tøjbrand",
    videoQuantity: "2",
    timeOfModule: "0:41:17",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Konceptet bag dit tøjmærke",
        moduleContentTime: "07:01",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Opbyg dit tøjmærke fundamenter",
        moduleContentTime: "06:33",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Tøj brands ordbogen",
        moduleContentTime: "07:01",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Målgruppe forståelse",
        moduleContentTime: "06:33",
      },
    ],
  },
  {
    image: "/chaps/ch2.jpg",
    mainHeading: "Målsætninger",
    videoQuantity: "5",
    timeOfModule: "0:17:26",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Trin for trin årsplan",
        moduleContentTime: "08:02",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Få struktur over dine arbejdsopgaver",
        moduleContentTime: "06:24",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Forstå hvordan du sætter målsætninger og planer",
        moduleContentTime: "03.00",
      },
    ],
  },
  {
    image: "/chaps/ch3.jpg",
    mainHeading: "Branding",
    videoQuantity: "3",
    timeOfModule: "1:04:15",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Case study i hvordan vi lavede ngoodso // trin for trin",
        moduleContentTime: "04:07",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvordan du lader dig inspirere * korrekt",
        moduleContentTime: "31:17",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Sådan laver du din første Brandbog",
        moduleContentTime: "28:51",
      },
    ],
  },
  {
    image: "/chaps/ch4.jpg",
    mainHeading: "Produkthåndtering  og design",
    videoQuantity: "3",
    timeOfModule: "0:26:06",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvordan du fanger trends",
        moduleContentTime: "05:07",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvilke Produkter & tekstiler skal du vælge?",
        moduleContentTime: "04:55",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Vores leverandører gennemgang ",
        moduleContentTime: "10:01",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Professionel Produktdesign gennemgang",
        moduleContentTime: "10:01",
      },
    ],
  },
  {
    image: "/chaps/ch5.jpg",
    mainHeading: "Hvordan du laver content til dit brand",
    videoQuantity: "7",
    timeOfModule: "2:55:35",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading:
          "Valg af Modeller i forskellige niecher",
        moduleContentTime: "19:00",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Håndtering af Produktbilleder",
        moduleContentTime: "27:10",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Håndtering af modelbilleder",
        moduleContentTime: "1:01:16",
      },
    ],
  },
  {
    image: "/chaps/ch6.jpg",
    mainHeading: "Byg din hjemmeside professionelt",
    videoQuantity: "2",
    timeOfModule: "07:38",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Valg af shopsystem",
        moduleContentTime: "02:23",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading:
          "Lær hvordan du navigerer rundt i shopify",
        moduleContentTime: "03:09",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Lav en Hjemmeside med os * trin for trin gennemgang",
        moduleContentTime: "02:23",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading:
          "Konverteringsoptimeringer",
        moduleContentTime: "03:09",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading:
          "Valg af betalingsløsning",
        moduleContentTime: "03:09",
      },
    ],
  },
  {
    image: "/chaps/ch7.jpg",
    mainHeading: "Markedsføring til dit brand",
    videoQuantity: "1",
    timeOfModule: "12:19",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvordan du laver konverterende",
        moduleContentTime: "12:19",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Influencer marketing * kopier vores framework",
        moduleContentTime: "12:19",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Paid ads",
        moduleContentTime: "12:19",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Organisk markedsføring",
        moduleContentTime: "12:19",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvordan du får fin markedsføring automatiseret og effektiviseret løbende",
        moduleContentTime: "12:19",
      },
    ],
  },
  {
    image: "/chaps/ch8.jpg",
    mainHeading: "Dit første salg",
    videoQuantity: "5",
    timeOfModule: "1:12:33",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading:
          "Håndtering af Levering & forsendelse",
        moduleContentTime: "39:47",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading:
          "Kundeservice automatisering",
        moduleContentTime: "20:00",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvordan du får konverteret kunden igen",
        moduleContentTime: "12:52",
      },
    ],
  },
  {
    image: "/chaps/ch9.jpg",
    mainHeading: "Skalering af brand",
    videoQuantity: "4",
    timeOfModule: "17:36",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvordan du automatiserer opgaver",
        moduleContentTime: "03:17",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Hvor dit fokus skal ligge som brand ejer",
        moduleContentTime: "04:58",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Trin for trin vejledning ift. Lagerhotel",
        moduleContentTime: "06:37",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Fra white label til producent",
        moduleContentTime: "03:24",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Dømme kollektionsopbygning & hype til drops",
        moduleContentTime: "03:24",
      },
    ],
  },
  {
    image: "/chaps/ch9.jpg",
    mainHeading: "Få en oversigt af dine tal",
    videoQuantity: "4",
    timeOfModule: "17:36",
    moduleContent: [
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Gennemgang af vores nøjagtige systemer",
        moduleContentTime: "03:17",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Regnskab og bogføring",
        moduleContentTime: "04:58",
      },
    ],
  },
];
const englishClassContentData = [
  {
    image: "/chaps/ch1.jpg",
    mainHeading: "Your Foundations",
    videoQuantity: "1",
    timeOfModule: "0:09:28",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Introduction",
        moduleContentTime: "09:28",
      },
    ],
  },
  {
    image: "/chaps/ch2.jpg",
    mainHeading: "Building your own OCMA from scratch",
    videoQuantity: "5",
    timeOfModule: "0:17:26",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Your OCMA from the outside",
        moduleContentTime: "08:02",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "OCMA, the world of systems",
        moduleContentTime: "06:24",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "How to make your digital business card",
        moduleContentTime: "03.00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Setting up your online presence",
        moduleContentTime: "06:24",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Build your linkedin from scratch",
        moduleContentTime: "03.00",
      },
    ],
  },
  {
    image: "/chaps/ch3.jpg",
    mainHeading: "Getting your foot in the door",
    videoQuantity: "3",
    timeOfModule: "1:03:75",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Introduction to contacting businesses",
        moduleContentTime: "04:07",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Which businesses to contact + the methods behind it",
        moduleContentTime: "31:17",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "The OCMA recipe for outreach",
        moduleContentTime: "28:51",
      },
    ],
  },
  {
    image: "/chaps/ch4.jpg",
    mainHeading: "Make the plants sprout (close the deals)",
    videoQuantity: "3",
    timeOfModule: "0:25:66",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Make the deal",
        moduleContentTime: "05:07",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Follow up on your customers",
        moduleContentTime: "04:55",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Preparing to catch your first fish",
        moduleContentTime: "10:01",
      },
    ],
  },
  {
    image: "/chaps/ch5.jpg",
    mainHeading: "Learn the business yourself and then outsource",
    videoQuantity: "7",
    timeOfModule: "2:55:35",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "The machinery behind the results",
        moduleContentTime: "19:00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Cost of in-house production",
        moduleContentTime: "27:10",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Fundamental walkthrough of editing",
        moduleContentTime: "1:01:16",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Professional fly on the wall (while we edit)",
        moduleContentTime: "40:38",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Post first piece of material",
        moduleContentTime: "10:29",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Content scaler never ran out of ideas",
        moduleContentTime: "07:06",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Find your creators",
        moduleContentTime: "10:36",
      },
    ],
  },
  {
    image: "/chaps/ch6.jpg",
    mainHeading: "System tracking / progressive development in your business",
    videoQuantity: "2",
    timeOfModule: "07:38",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Overview of the business",
        moduleContentTime: "02:23",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Accounting in your business",
        moduleContentTime: "03:09",
      },
    ],//
  },
  {
    image: "/chaps/ch7.jpg",
    mainHeading: "Watch the flower sprout",
    videoQuantity: "1",
    timeOfModule: "12:19",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "An insight into one of our customers",
        moduleContentTime: "12:19",
      },//
    ],
  },
  {
    image: "/chaps/ch8.jpg",
    mainHeading: "Streamlined OCMA systems",
    videoQuantity: "5",
    timeOfModule: "1:12:33",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "CRM system - manage your leads",
        moduleContentTime: "39:47",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Build your digital business card",
        moduleContentTime: "20:00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "How to create a high-tech website",
        moduleContentTime: "12:52",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "OCMA - script everything",
        moduleContentTime: "20:00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "OCMA - editing loopholes",
        moduleContentTime: "12:52",
      },
    ],
  },
  {
    image: "/chaps/ch9.jpg",
    mainHeading: "Don't work in the business, work on the business",
    videoQuantity: "4",
    timeOfModule: "17:36",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "When to pull the outsource trigger",
        moduleContentTime: "03:17",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Make your business work for you",
        moduleContentTime: "04:58",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Find freelancers ",
        moduleContentTime: "06:37",
      },
      {
        moduleContentImage: "/boc/module.webp",
        moduleContentHeading: "Handle the wheel while scaling your business",
        moduleContentTime: "03:24",
      },
    ],
  },
];

export default function ClassContent() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] bg-transparent">
      <div className="w-[90%] mx-auto max-w-[800px] text-white text-center">
        <Reveal>
          <h1 className="text-heroHeading font-[700] mb-[14px]">
            {currentPath === "/en"
              ? "Se en smagsprøve ad hvad du får eksklusiv adgang til i "
              : "Se en smagsprøve af hvad du kan forvente i"}{" "}
            <span className="text-white">
              {currentPath === "/en" ? " Brand Owners Club" : " Brand Owners Club"}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            {currentPath === "/en"
              ? "30+ step by step modules includes what you get access to in the organic masterclass"
              : "30+ step by step moduler er bla. hvad du får adgang til i OCMA masterclass"}
          </p>
        </Reveal>
        {currentPath === "/en" ? (
          <div className="grid grid-cols-1 gap-[30px]">
            {englishClassContentData.map((v, index) => (
              <ClassContentCard key={v} Obj={v} i={index + 1} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-[30px]">
            {classContentData.map((v, index) => (
              <ClassContentCard key={v} Obj={v} i={index + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const ClassContentCard = (props: any) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <Reveal>
      <div className="p-[20px] bg-green-600 text-blue-950 rounded-main">
        <div className="grid grid-cols-contentCard gap-[30px] trustbadgesTwo:grid-cols-1">
          <img
            alt="courseelement"
            className="rounded-main h-[200px] w-full object-cover"
            src={props.Obj.image}
          ></img>
          <div className="text-left flex flex-col justify-center gap-[10px]">
            <p className="text-green-600 bg-white w-[100px] text-center p-[6px] rounded-[100px] font-[700] mb-[10px]">
              {currentPath === "/en" ? "Chapter " : "Kapitel "}
              {props.i}
            </p>
            <h1 className="text-[20px] font-[700] mb-[6px]">
              {props.Obj.mainHeading}
            </h1>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[6px]">
                <Play />
                <p>{props.Obj.moduleContent.length} {currentPath === "/en" ? "videos":"videoer"}</p>
              </div>

            </div>
          </div>
          <div className="flex flex-col justify-end trustbadgesTwo:items-end">
            {cardExpanded ? (
              <XCircle
                className="cursor-pointer"
                onClick={() => setCardExpanded(false)}
                size={28}
              />
            ) : (
              <PlusCircle
                className="cursor-pointer"
                onClick={() => setCardExpanded(true)}
                size={28}
              />
            )}
          </div>
        </div>

        {cardExpanded ? (
          <div className="mt-[20px] flex flex-col gap-[20px]">
            {props.Obj.moduleContent.map((v: any) => (
              <div  key={v} className="text-left p-[10px] border-[1px] border-gray-600 rounded-main text-main grid grid-cols-subcontent gap-[40px]">
                <img
                  alt={v.moduleContentImage}
                  className="rounded-main h-[120px] w-full object-cover"
                  src={v.moduleContentImage}
                ></img>
                <div className="flex flex-col justify-center">
                  {" "}
                  <h1 className="font-[700] mb-[10px]">
                    {v.moduleContentHeading}
                  </h1>

                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
};