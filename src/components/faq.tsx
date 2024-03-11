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
      "Vi garanterer din første betalte kunde inden for 180 dage, ellers sender vi hver eneste krone tilbage. ",
  },
  {
    question: "Kan jeg gøre dette, mens jeg går i skole/arbejder?",
    answer:
      "Ja, selvfølgelig. Det er ikke noget problem at gå i skole, mens du driver denne virksomhed. Da vi startede, gik vi alle tre i skole, men nu er vi fuldtidsbeskæftigede med vores virksomheder.",
  },
  {
    question: "Hvordan får jeg support?",
    answer:
      "Du kan altid sende os en besked, og vi vil svare, for din succes er vores succes.",
  },
  {
    question: "Hvad kommer jeg til at lære?",
    answer:
      "Du vil lære præcis, hvordan man bygger en forretning. Alt sammen på samme måde som vi gjorde, for du får alle vores frameworks. Dette er en helt ny forretningsmodel, som alle virksomheder har brug for, så det er et perfekt tidspunkt at komme i gang. Vi driver selv et agency ud fra denne forretningsmodel, Organic Agency. Du vil altid være et skridt foran andre, fordi du netop har vores frameworks, som opdateres løbende. Så hvad venter du på? Ansøg i dag og start din rejse.",
  },
  {
    question:
      "Hvad sker der, efter jeg er blevet accepteret til at købe Organic Masterclass?",
    answer:
      "Du bliver tilføjet til vores egen software med alle moduler. Vores undervisningsmateriale er både i tekst og video. Derudover kommer du med i en gruppe for udelukkende medlemmerne af Organic Masterclass,, for at spare med hinanden og os. ",
  },
  {
    question: "Hvor meget kan jeg forvente at tjene?",
    answer:
      "Der er ingen maximum på, hvor meget du kan tjene; det er fordelene ved denne forretningsmodel. Som regel vokser dit agency og netværk med tiden, hvilket giver mulighed for større vækst, samtidig med at tidsforbruget mindskes. Du har derfor selv muligheden for at bestemme, afhængigt af dine målsætninger, hvor du ønsker at bevæge dig hen. Vi har dog set flere af de første elever lukke aftaler på 8-30.000,- efter blot en uge og derefter opsige deres job, da de nu tjener langt mere end deres gamle job.",
  },
  {
    question: "Kan man ikke bare lære dette på youtube?",
    answer:
      "super godt spørgsmål, fordi ved andre kurser er netop dette gældende. Ofte vil du kunne finde den information du får i kurser på youtube eller lign. men sådan er det ikke her, eftersom vores forretningsmodel er helt ny. Og for at bevise dette vil jeg gerne tage dig med på en test, gå ind på youtube > søg på “organic agency” det ville overraske mig hvis du fandt noget! og det ville det netop eftersom vi er de første som oplærer dig netop dette :)",
  },
];
const englishQuestions = [
  {
    question: "What is your guarantee?",
    answer:
      "We guarantee your first paid client within 180 days, otherwise we send every single penny back.",
  },
  {
    question: "Can I do this while in school/work?",
    answer:
      "Yes, of course. Going to school while running this business is no problem. When we first started, we all 3 went to school, but now are full time on our businesses.",
  },
  {
    question: "How do I get support?",
    answer:
      "You can always send us a message and we will respond, because your success is our success.",
  },
  {
    question: "What will I learn?",
    answer:
      "You'll learn exactly how to build a business. All in the same way we did, because you'll get all our frameworks. This is a brand new business model that every company needs, so it's a perfect time to get started. We run an agency ourselves based on this business model, Organic Agency. You'll always be one step ahead of others because you have our frameworks, which are constantly updated. So what are you waiting for? Apply today and start your journey.",
  },
  {
    question:
      "What happens after I have been accepted to purchase the Organic Masterclass?",
    answer:
      "You will be added to our proprietary software with all modules. Our teaching material is both in text and video. In addition, you will join an Organic Masterclass members-only group to save with each other and us.",
  },
  {
    question: "How much can I expect to earn?",
    answer:
      "There is no maximum on how much you can earn; these are the benefits of this business model. Normally your agency and network grow over time, which allows for greater growth while reducing time consumption. You therefore have the opportunity to decide for yourself, depending on your goals, where you want to go. However, we have seen several of the first students close deals of 1 - 4,000 usd after just one week and then quit their jobs, as they are now earning far more than their old jobs.",
  },
  {
    question: "Can't you just learn this on youtube?",
    answer:
      "Super good question, because this is exactly what applies to other courses. you will often be able to find the information you get in courses on YouTube or similar. but that is not the case here, as our business model is completely new. And to prove this, I'd like to take you on a test, go to youtube > search for “organic agency” it would surprise me if you found anything! and it would precisely because we are the first to teach you exactly this :)",
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