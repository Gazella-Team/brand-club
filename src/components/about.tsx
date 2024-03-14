import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";
import { ArrowBigDown } from "lucide-react";

export default function About() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] bg-transparent">
      <SectionStarter
        section={currentPath === "/en" ? "about" : "om os"}
        mode={true}
      />
      <div className="w-sectionMain mx-auto max-w-main text-white text-center">
        <Reveal>
          <h1 className="text-heroHeading font-[700] w-[80%] mx-auto navbar:text-[20px]">
            {currentPath === "/en"
              ? "Read more about who we are, what we do and how we got to where we are today."
              : "Læs mere omkring hvem vi er, hvad vi laver, og hvordan vi er nået til der, hvor vi er i dag"}{" "}
          </h1>
        </Reveal>
        <div className="flex items-center justify-center mt-[40px]">
          <ArrowBigDown className="blinking-object" size={60} />
        </div>
      </div>
    </section>
  );
}