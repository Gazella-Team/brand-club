import { Link, Element } from "react-scroll";
import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";
import { ArrowDown, ArrowRight } from "lucide-react";
import YoutubeVideo from "./demovid";
import YoutubeVideoEng from "./demovideng";

export default function Hero() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[220px] pb-[40px] bg-transparent">
      <div className="w-sectionMain max-w-main mx-auto grid grid-cols-2 gap-[100px] heroOne:grid-cols-1">
        <div className="py-[20px] heroOne:py-0">
          <Reveal>
            <h1 className="text-heroHeading text-white font-[700] mb-[20px] heroTwo:text-[30px]">
              {currentPath === "/en"
                ? "Perfected masterclass that guides you step by step in building a 6-figure"
                : "Veludarbejdet masterclass, der guider dig trin for trin i opbygningen af et 6-cifret"}{" "}
              <span className="text-blue-500">
                {currentPath === "/en"
                  ? "OCMA"
                  : "OCMA"}
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-heroDescription text-gray-200 mb-[40px] w-[90%]">
              {currentPath === "/en"
                ? "Using our comprehensive framework, you'll get guidance on how to build a business, generate profits and scale it to new heights - just like we did it ourselves."
                : "Ved hjælp af vores omfattende framework får du vejledning i, hvordan du opbygger en virksomhed, genererer profit og skalerer den til nye højder - nøjagtigt som vi gjorde det selv."}
            </p>
          </Reveal>
          <div>
            <Reveal>
              <div className="flex gap-[10px] heroTwo:flex-col">
                <a
                  className="text-glow bg-blue-500 text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
                  href={
                    currentPath === "/en"
                      ? "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
                      : "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
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
                  className="text-glow bg-blue-500 text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
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

        <div className="flex items-center justify-center">
          <Reveal>
            {currentPath === "/en" ? (
              <div className="flex flex-col items-center">
                <h1 className="text-white text-[20px] font-[700] text-center mb-[30px] flex items-center gap-[10px]">
                  Watch our free demo video
                  <span>
                    <ArrowDown />
                  </span>
                </h1>
                <a href="https://ocmamasterclass.com/en">
                  <img className="rounded-main text-glow" alt="hero" src="/thumbnail.jpg"></img>
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <h1 className="text-white text-[20px] font-[700] text-center mb-[30px] flex items-center gap-[10px]">
                  Se vores gratis læringsvideo{" "}
                  <span>
                    <ArrowDown />
                  </span>
                </h1>
                <a href={"https://ocmamasterclass.com/"}>
                  <img className="rounded-main text-glow" alt="hero" src="/thumbnail.jpg"></img>
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}