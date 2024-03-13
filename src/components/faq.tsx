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
    question: "Hvad er jeres garanti?",
    answer:
      "Vi garanterer dig en indkomst på 20.000,- / måned i 180 dage, ellers sender vi hver eneste krone tilbage + 12.000 kroner fra vores egen pung",
  },
  {
    question: "Kan jeg gøre dette, mens jeg går i skole/arbejder?",
    answer:
      "Ja, selvfølgelig. Det er ikke noget problem at gå i skole, mens du driver denne virksomhed. Da vi startede med forretning, gik vi begge i gymnasiet, men nu er vi fuldtidsbeskæftigede med vores virksomheder.",
  },
  {
    question: "Hvordan får jeg support?",
    answer:
      "Du kan altid sende os en besked, eller opsætte et 1:1 opkald med os  og vi vil hjælpe, for som vores motto siger: din succes er vores succes.",
  },
  {
    question: "Hvad kommer jeg til at lære?",
    answer:
      "Du vil lære præcis, hvordan man bygger en forretning. Alt sammen på samme måde som vi gjorde, for du får alle vores frameworks og en klar forretningsplan der forklarer dig præcis hvad du skal gøre hver dag. Dette er en helt ny forretningsmodel, som alle virksomheder har brug for, så det er et perfekt tidspunkt at komme i gang. Vi driver selv et agency ud fra denne forretningsmodel, OCMA. Du vil altid være et skridt foran andre, fordi du netop har vores frameworks, som opdateres løbende. Så hvad venter du på? Ansøg i dag og start din rejse.",
  },
  {
    question:
      "Hvad sker der, efter jeg er blevet accepteret til at købe OCMA Masterclass?",
    answer:
      "Som du måske har set på hjemmesiden er der ingen “køb nu” knap, og det er der ikke grundet den garanti vi har. Vi skal tale med alle får nogen får adgang. Vi vil gerne vide hvem vi better vores egne penge på. Du bliver tilføjet til vores egen software med alle moduler. Vores undervisningsmateriale er både i tekst og video. Derudover kommer du med i en gruppe for udelukkende medlemmer af OCMA Masterclass,, for at spare med hinanden og os.",
  },
  {
    question: "Hvor meget kan jeg forvente at tjene?",
    answer:
      "Der er ingen maximum på, hvor meget du kan tjene; det er fordelene ved denne forretningsmodel. Som regel vokser dit agency og netværk med tiden, hvilket giver mulighed for større vækst, samtidig med at tidsforbruget mindskes. Du har derfor selv muligheden for at bestemme, afhængigt af dine målsætninger, hvor du ønsker at bevæge dig hen. Vi har dog set flere af de første elever lukke aftaler på 8-30.000,- efter blot en uge og derefter opsige deres job, da de nu * Men husk det er eksempler og ikke nødvendigvis hvad der er gældende for dig.",
  },
  {
    question: "Kan man ikke bare lære dette på youtube?",
    answer:
      "Ofte vil du kunne finde den information du får i kurser på youtube eller lign. men sådan er det ikke her, eftersom vores forretningsmodel er helt ny. Og for at bevise dette vil jeg gerne tage dig med på en test, gå ind på youtube > søg på “OCMA” Det ville overraske mig hvis du fandt noget! og det ville det netop eftersom vi er de første som oplærer dig netop dette. Det skal dog nævnes at der er andre forretningsmodeller der læner sig op ad denne. ",
  },
];
const englishQuestions = [
  {
    question: "What is your warranty?",
    answer:
      "We guarantee you an income of NOK 20,000 / month for 180 days, otherwise we will return every penny + NOK 12,000 from our own wallet",
  },
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
      "You will learn exactly how to build a business. All in the same way as we did, because you get all our frameworks and a clear business plan that explains exactly what you have to do every day. This is a brand new business model that all businesses need, so it's a perfect time to get started. We ourselves run an agency based on this business model, OCMA. You will always be one step ahead of others, because you have our frameworks, which are updated continuously. So what are you waiting for? Apply today and start your journey.",
  },
  {
    question:
      "What happens after I have been accepted to purchase the OCMA Masterclass?",
    answer:
      "As you may have seen on the website, there is no buy now button, and that is not because of the guarantee we have. We have to talk to everyone, someone gets access. We want to know who we're betting our own money on. You will be added to our own software with all modules. Our teaching material is both in text and video. In addition, you join a group for members only of the OCMA Masterclass, to save with each other and us.",
  },
  {
    question: "How much can I expect to earn?",
    answer:
      "There is no maximum on how much you can earn; these are the benefits of this business model. As a rule, your agency and network grow over time, which allows for greater growth while reducing time consumption. You therefore have the opportunity to decide, depending on your goals, where you want to go. However, we have seen several of the first students close deals of NOK 8-30,000 after just one week and then quit their jobs, as they now * But remember these are examples and not necessarily what applies to you",
  },
  {
    question: "Can't you just learn this on youtube?",
    answer:
      "You will often be able to find the information you get in courses on YouTube or similar. but that is not the case here, as our business model is completely new. And to prove this I'd like to take you on a test, go to youtube > search “OCMA” I'd be surprised if you found anything! and it would precisely because we are the first to teach you exactly this. However, it should be mentioned that there are other business models that lean on this one.",
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
            <span className="text-blue-500">
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