import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";
import { ArrowRight } from "lucide-react";
import CoolCarousel from "./carousel";

export default function Articles() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] bg-transparent">
      <div className="w-sectionMain max-w-main mx-auto grid grid-cols-2 gap-[100px] heroOne:grid-cols-1">
        <div className="py-[20px] heroOne:py-0">
          <Reveal>
            <h1 className="text-heroHeading text-white font-[700] mb-[20px] heroTwo:text-[30px]">
              {currentPath === "/en"
                ? "Seen in the news: Our knowledge is based on"
                : "Rost i nyhederne: Vores viden er baseret på"}{" "}
              <span className="text-blue-500">
                {currentPath === "/en" ? "experience" : "erfaring"}
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-heroDescription text-gray-200 mb-[40px] w-[90%]">
              {currentPath === "/en"
                ? "The team behind the organic Masterclass are well-known faces in Denmark, including “JydskeVestkysten”, “Sjællandskenyheder”, “ugeavisen” & the Det grønne område” have written about our success.At organic masterclass, we focus on showing you the reality of crafting a 10k$/ month business without any filter on, as well as letting our experience and results speak for themselves"
                : "Tvillingerne Benjamin og Sebastian  er velkendte ansigter over hele landet. De har Drevet den velkendte tøjforretning Linenclothing og bl. a. har JydskeVestkysten, Sjællandske Nyheder, Ugeavisen og Det Grønne Område skrevet om vores succes i en ung alder. Hos OCMA Masterclass sætter vi fokus på at vise dig virkeligheden uden filter og lader vores erfaringer og resultater tale for sig selv."}
            </p>
          </Reveal>
          <div>
            <Reveal>
              <div className="flex gap-[10px] heroTwo:flex-col">
                <Link
                  className="text-glow bg-blue-500 text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
                  href={
                    currentPath === "/en"
                      ? "https://calendly.com/organicmasterclass/30min?month=2024-01"
                      : "https://calendly.com/organicmasterclass/dk?month=2024-01&fbclid=IwAR1QxiXMF-RBNdSKsZY1yYySZ4vWfzard9pSvdwqfGIfEZYjA9vIex6pyqA"
                  }
                >
                  {currentPath === "/en" ? "Start today" : "Start i dag"}
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </Link>
                <Link
                  className="text-glow bg-blue-500 text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
                  href={
                    "https://jv.dk/haderslev/unge-ivaerksaettere-har-succes-med-at-lave-videoer-til-tiktok-har-droppet-fester-og-gaar-tidligt-i-seng-hver-aften?fbclid=IwAR1g4Cp6la6At-wmayf8PXfN-Lxmubv3kuVhmGbp1jx-PCV9tf-ToybLiJ0"
                  }
                >
                  {currentPath === "/en" ? "Hear the story" : "Hør historien"}
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden ">
          <Reveal>
            <div>
              <CoolCarousel />
              <p className=" mt-[10px] text-center flex items-center justify-center">
                swipe
                <span>
                  <ArrowRight />
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}