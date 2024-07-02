import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import SectionStarter from "./sectionstarter";

const questions = [
  {
    question: "Hvem er ejerne bag Brand Onwers club?",
    answer:
      "Ejerne Bag hedder Gustav Aabro & filip Mellbin. de tog deres eget tøjbrand fra 0 - 2 millioner i omsætning på 6 måneder. De har en omfattende forståelse for hvordan du skalerer og opbygger et stærkt brand. Derfor lærer de nu andre videre i netop dette.",
  },
  {
    question: "Kan jeg være en del af brand owners club mens jeg er under uddannelse?",
    answer:
      "Vi startede selv vores tøjmærke mens vi var under uddannelse & job. Det lukrative ved et tøjbrand er at du let kan balancerer job eller uddannelse grundet den fleksibilitet man får gennem at have sin egen forretning.",
  },
  {
    question: "Hvor meget kan jeg forvente at tjene?",
    answer:
      "Der er ingen maximum på, hvor meget du kan tjene; det er fordelene ved at have en Rigtig Forretning, og ikke den døgnflue. Som regel vokser dit tøjbrand og netværk med tiden, hvilket giver mulighed for større vækst, samtidig med at tidsforbruget mindskes. Du har derfor selv muligheden for at bestemme, afhængigt af dine målsætninger, hvor du ønsker at bevæge dig hen. Vi har dog set flere af de første elever  ramme 100.000 / måned i omsætning efter blot 3 måneder.  Men husk det er eksempler og ikke nødvendigvis hvad der er gældende for dig.",
  },
  {
    question:
      "Har jeg penge tilbage garanti?",
    answer:
      "Hvis du får tilladelse til at tage part i BRAND OWNERS CLUB garanterer vi dig en omsætning på min 20.000,- efter 2 måneder. denne garanti har vi lavet efter tidligere data med diverse “test personer” som fik direkte adgang til vores metoder. Grundet vores garanti, kan vi ikke lade alle og enhver tage part i vores fællesskab, du skal være målrettet.",
  },
  {
    question: "Hvad sker der, efter jeg er blevet accepteret ind i  Brand Owners Club? ",
    answer:
      "Som du måske har lagt mærke til er der ingen “køb nu” knap på hjemmesiden, og det er der ikke grundet den garanti vi har. Vi skal tale med alle, inden du får adgang. Vi vil gerne vide hvem vi better vores egne penge på. Og hvem der skal repræsentere Brand Owners Club fællesskabet udadtil. Efter du har fået tilladelse til at tage part i dette eksklusive fællesskab vil du blive tilføjet til vores egen software med alle moduler. Vores undervisningsmateriale er både i tekst og video. Derudover kommer du med i en gruppe for eksklusive medlemmer Brand Owners Club, for at spare med hinanden og os.",
  },
];
const englishQuestions = [
  {
    question: "Can I do this while going to school/working?",
    answer:
      "Yes of course. Going to school while running this business is no problem. When we started the business, we were both in high school, but now we are full-time with our businesses.",
  },
  {
    question: "How do I get support?",
    answer:
      "You can always send us a message or set up a 1:1 call with us and we will help, because as our motto says: your success is our success.",
  },
  {
    question: "What will I learn?",
    answer:
      "You will learn how to start an OCMA, where we review the tips & tricks we have experienced ourselves.",
  },
  {
    question:
      "What happens after I have been accepted to purchase the OCMA Masterclass?",
    answer:
      "As you may have noticed, there is no buy now button on the website, and that is not because of the guarantee we have. We need to talk to everyone before you get access. We want to know who we are betting our own time on. After you get permission you will be added to our own software with all modules. Our teaching material is both in text and video. In addition, you join a group for exclusive members of the OCMA Masterclass, to save with each other and us.",
  },
  {
    question: "How much can I expect to earn?",
    answer:
      "There is no maximum on how much you can earn; these are the benefits of this business model. As a rule, your agency and network grow over time, which allows for greater growth while reducing time consumption. You therefore have the opportunity to decide, depending on your goals, where you want to go. However, we have seen several of the first students close deals of DKK 8-30,000 after just one week and then quit their jobs. But remember these are examples and not necessarily what applies to you",
  },
  {
    question: "Can't you just learn this on youtube?",
    answer:
      "Often you will be able to find the information you get in courses on YouTube or the like, but this is not the case here, since our business model is completely new. To prove this, I'd like to take you on a test. Go to YouTube and search for OCMA. It would surprise me if you found anything, and it would, since we are the first to teach you this very thing. However, it should be mentioned that there are other business models that lean on this one.",
  },
];

export default function FAQ() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px]">
      <div className="w-sectionMain mx-auto max-w-main text-center">
        <SectionStarter
          section={
            currentPath === "/en" ? "frequent questions" : "hyppige spørgsmål"
          }
          mode={false}
        />
        <Reveal>
          <h1 className="text-heroHeading font-[700] mb-[60px] text-white">
            {currentPath === "/en"
              ? "Get answers to all"
              : "Få svar på alle dine"}{" "}
            <span className="text-green-600">
              {currentPath === "/en" ? "extra questions" : "ekstra spørgsmål"}
            </span>
          </h1>
        </Reveal>
      </div>
      <div className="w-[70%] mx-auto max-w-[1000px] heroOne:w-sectionMain">
        {currentPath === "/en" ? (
          <Accordion
            type="single"
            collapsible
            className="mt-8rounded-lg"
          >
            {englishQuestions.map((question, index) => (
              <Reveal key={index}>
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-4 py-2 rounded-[30px] mb-[20px]"
                >
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        ) : (
          <Accordion
            type="single"
            collapsible
            className="mt-8rounded-lg"
          >
            {questions.map((question, index) => (
              <Reveal key={index}>
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-4 py-2 rounded-[30px] mb-[20px]"
                >
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}