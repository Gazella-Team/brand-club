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
              : "læs mere omkring vores succeshistorie med vores eget tøjmærke"}{" "}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}