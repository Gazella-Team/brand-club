import { Link, Element } from "react-scroll";
import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";
import { ArrowDown, ArrowRight } from "lucide-react";
import YoutubeVideo from "./demovid";
import YoutubeVideoEng from "./demovideng";
import WistiaVideoEmbed from "./wistia-embed";
import WistiaVideo from "./wistia-embed";
import EnglishWistiaVideo from "./wistia-english";

export default function Hero() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[220px] pb-[40px] bg-transparent">
      <div className="w-sectionMain max-w-main mx-auto grid grid-cols-2 gap-[100px] heroOne:grid-cols-1">
        <div className="items-center justify-center hidden sm:flex">
          <Reveal>
            {currentPath === "/en" ? (
              <div className="flex flex-col items-center">
                <WistiaVideo />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <WistiaVideo />
              </div>
            )}
          </Reveal>
        </div>
        <div className="py-[20px] heroOne:py-0">
          <Reveal>
            <img className="w-24 mb-6" src="/stars-5.svg"></img>
          </Reveal>
          <Reveal>
            <h1 className="text-heroHeading text-white font-[700] mb-[20px] heroTwo:text-[30px]">
              {currentPath === "/en"
                ? "Perfected masterclass that guides you step by step in building an"
                : "Fællesskab for seriøse brandejere, som vil skalere deres"}{" "}
              <span className="text-[#29a226]">
                {currentPath === "/en"
                  ? "OCMA"
                  : "tøjbrand"}
              </span>
            </h1>
          </Reveal>
          <div className="items-center justify-center flex mb-10 sm:hidden sm:mb-[0px]">
          <Reveal>
            {currentPath === "/en" ? (
              <div className="flex flex-col items-center">
                <div>
                <WistiaVideo />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <WistiaVideo />
              </div>
            )}
          </Reveal>
        </div>
          <Reveal>
            <p className="text-heroDescription text-gray-200 mb-[40px] w-[90%]">
              {currentPath === "/en"
                ? "Using our comprehensive framework, you'll get guidance on how to build a business, generate profits and scale it to new heights - just like we did it ourselves."
                : "Ved hjælp af vores omfattende framework får du vejledning i, hvordan du opbygger et tøjbrand, genererer profit og skalerer den til nye højder - nøjagtigt som vi gjorde det selv."}
            </p>
          </Reveal>
          <div>
            <Reveal>
              <div className="flex gap-[10px] heroTwo:flex-col">
                <a
                  className="text-glow bg-[#29a226] text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
                  href={
                    currentPath === "/en"
                      ? "https://calendly.com/google-brandownersclub/30min"
                      : "https://calendly.com/google-brandownersclub/30min"
                  }
                >
                  {currentPath === "/en" ? "Apply today" : "Ansøg i dag"}
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </a>

                <Link
                  to="omos"
                  smooth={true}
                  duration={500}
                  className="text-glow bg-[#29a226] text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
                >
                  {currentPath === "/en" ? "Hear more" : "Hør mere"}
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}