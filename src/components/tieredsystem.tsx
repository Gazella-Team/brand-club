import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";

export default function TieredSystem() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] bg-transparent">
      <SectionStarter
        section={
          currentPath === "/en" ? "customers by size" : "størrelser af kunder"
        }
        mode={false}
      />
      <div className="w-sectionMain mx-auto max-w-main text-center">
        <Reveal>
          <h1 className="text-heroHeading font-[700] mb-[14px] text-white">
            {currentPath === "/en"
              ? "Your clients ranked by"
              : "Dine kunder rangeret efter"}{" "}
            <span className="text-blue-500">
              {currentPath === "/en" ? "payment" : "betaling"}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px] max-w-[850px] mx-auto">
            {currentPath === "/en"
              ? "Within Organic Masterclass community operates a celebration system, divided into three levels. When a person closes a client, we celebrate all events together, whether it is a small client or a large one."
              : "Inden for Organic Masterclass-fællesskabet opererer vi med et fejringssystem, opdelt i tre niveauer. Når en person lukker en kunde, fejrer vi alle begivenheden sammen, uanset om det drejer sig om en mindre kunde eller en stor."}
          </p>
        </Reveal>
        <div className="grid grid-cols-2">
          <div className="border-r-[2px] flex flex-col items-end justify-between py-[50px]">
            <Reveal>
              <div className="text-left px-[60px] ">
                <img
                  alt="bronze"
                  className="w-[80px] blinking-object"
                  src="/bronze-medal.png"
                ></img>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-left px-[60px] ">
                <img
                  alt="silver"
                  className="w-[110px] blinking-object"
                  src="/silver-medal.png"
                ></img>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-left px-[60px] ">
                <img
                  alt="gold"
                  className="w-[140px] blinking-object"
                  src="/gold-medal.png"
                ></img>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col gap-[60px] py-[50px]">
            <Reveal>
              <div className="text-left px-[60px]">
                <p className="font-[600] text-gray-200">Level 10</p>
                <h1 className="text-[30px] font-[700] text-white mb-[10px]">
                  {currentPath === "/en" ? "Bronze" : "Bronze"}
                </h1>
                <p className="mb-[10px]">
                  {currentPath === "/en"
                    ? "Clients who pay:"
                    : "Klienter der betaler:"}
                </p>
                <p className="font-[700]">
                  {currentPath === "/en"
                    ? "$1,000-2,000 / mo"
                    : "7.000.DKK-14.000.DKK / m"}
                  .
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-left px-[60px]">
                <p className="font-[600] text-gray-200">Level 50</p>
                <h1 className="text-[30px] font-[700] text-white mb-[10px]">
                  {currentPath === "/en" ? "Silver" : "Sølv"}
                </h1>
                <p className="mb-[10px]">
                  {" "}
                  {currentPath === "/en"
                    ? "Clients who pay:"
                    : "Klienter der betaler:"}
                  :
                </p>
                <p className="font-[700]">
                  {currentPath === "/en"
                    ? "$2,000-6,000 / mo"
                    : "14.000.DKK-42.000.DKK / m"}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-left px-[60px]">
                <p className="font-[600] text-gray-200">Level 100</p>
                <h1 className="text-[30px] font-[700] text-white mb-[10px]">
                  {currentPath === "/en" ? "Gold" : "Guld"}
                </h1>
                <p className="mb-[10px]">
                  {" "}
                  {currentPath === "/en"
                    ? "Clients who pay:"
                    : "Klienter der betaler:"}
                </p>
                <p className="font-[700]">
                  {currentPath === "/en" ? "+$6,000 / mo" : "+42.000.DKK / m"}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}