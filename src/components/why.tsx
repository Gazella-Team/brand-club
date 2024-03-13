import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { CheckSquare2, XSquare } from "lucide-react";
import { useRouter } from "next/router";

const whyData = [
  [
    "Mange års erfaring indenfor organisk markedsføring. Skaleret egne forretninger/webshops med denne forretningsmodel og hjulpet nogle af de hurtigst voksende profiler på sociale medier.  ",
    "Vi har selv vækstet forretninger fra 0-1.000.000 indenfor 1 måned med vores framework som DU får adgang til, for at have mulighed for at kunne tilbyde samme resultater som vores agency.",
    "Får hjælp til at holde kunder i længere perioder, så du ikke hele tiden skal jagte nye kunder, men kan have nogle længerevarende samarbejder.",
    "Viden fra nogle af de absolut største inden for content creation marketing.",
    "Du lærer hvordan du uden tidligere erfaring, kan opbygge en forretning du kan leve af. ",
  ],
  [
    "Du lærer fra nogen, som ingen resultater har, men blot har lavet et online mentorforløb og ikke selv lever af denne forretningsmodel. ",
    "Du bliver ikke oplært i hvordan du opbygger en forretning du kan leve af. ",
    "Ingen resultater men bare en som vil tjene penge på at sælge kurser. ",
    "Har ikke længere succes med denne forretningsmodel, men måske haft for mange år siden. ",
    "Du bliver oplært som gruppe og ikke individuelt",
    "Du ved ikke på forhånd, hvad der er inkluderet i forløbet",
    "Ingen garanti eller refund-politik",
  ],
];
const englishWhyData = [
  [
    "Many years of experience in organic marketing. Scaled own businesses/web shops with this business model and helped some of the fastest growing social media profiles. ",
    "Grown businesses from 0-1,000,000 within 1 month with our framework, which YOU get access to in order to be able to offer the same results as our agency. ",
    "Get help to retain customers for longer periods of time, so you don't have to constantly chase new customers, but can have some long-term collaborations. ",
    "Knowledge from some of the biggest names in content creation marketing. ",
    "You'll learn how to build a business you can make a living from with no previous experience.",
  ],
  [
    "You're learning from someone who has no results, but has only done an online mentoring program and doesn't make a living from this business model. ",
    "You're not being taught how to build a business you can make a living from. ",
    "No results, just someone who wants to make money selling courses.",
    "No longer successful with this business model, but may have been many years ago.",
    "You are trained as a group and not individually",
    "You do not know in advance what is included in the course",
    "No guarantee or refund policy",
  ],
];

export default function Why() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] bg-transparent">
      <SectionStarter
        section={currentPath === "/en" ? "why us" : "hvorfor os"}
        mode={false}
      />
      <div className="w-sectionMain mx-auto max-w-main text-center">
        <Reveal>
          <h1 className="text-heroHeading font-[700] mb-[60px] text-white">
            {currentPath === "/en"
              ? "Why choose our"
              : "Hvorfor vores masterclass"}{" "}
            <span className="text-blue-500">
              {currentPath === "/en" ? "masterclass" : "skiller sig ud"}
            </span>
          </h1>
        </Reveal>
        <div className="grid grid-cols-2 gap-[30px] navbar:grid-cols-1">
          {currentPath === "/en" ? (
            <Reveal>
              <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="border-[4px] border-blue-500 text-left p-[40px] rounded-main box-border">
                <h1 className="text-[30px]  text-white font-[700] mb-[40px]">
                 OCMA
                </h1>
                {englishWhyData[0].map((v, index) => (
                  <div className="flex flex-col mb-[30px]" key={index}>
                    <Reveal>
                      <div className="flex items-center gap-[20px] text-white text-sectionDescription ">
                        <div className="w-[30px]">
                          <CheckSquare2 color="white" size={30} />
                        </div>
                        {v}
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="bg-blue-500 border-[4px] border-blue-500 text-left p-[40px] rounded-main box-border">
                <h1 className="text-[30px]  text-white font-[700] mb-[40px]">
                  OCMA
                </h1>
                {whyData[0].map((v, index) => (
                  <div key={index} className="flex flex-col mb-[30px]">
                    <Reveal>
                      <div className="flex items-center gap-[20px] text-white text-sectionDescription ">
                        <div className="w-[30px]">
                          <CheckSquare2 color="white" size={30} />
                        </div>

                        {v}
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {currentPath === "/en" ? (
            <Reveal>
              <div
                style={{
                  background:
                    " linear-gradient(204deg, rgba(0,0,0,0) 0%, rgba(23,37,84,0.06488532913165268) 100%)",
                }}
                className="bg-white border-[1px] border-gray-600 text-left p-[40px] rounded-main"
              >
                <h1 className="text-[30px] text-white font-[700] mb-[40px]">
                  {currentPath === "/en"
                    ? "Other masterclasses"
                    : "Andre vækst forløb"}
                </h1>
                {englishWhyData[1].map((v, index) => (
                  <div key={index} className="flex flex-col mb-[30px]">
                    <Reveal>
                      <div className="flex items-center gap-[20px] text-white text-sectionDescription">
                        <div className="w-[30px]">
                          <XSquare size={30} />
                        </div>

                        {v}
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div
                className="border-[1px] border-gray-600 text-left p-[40px] rounded-main"
              >
                <h1 className="text-[30px] text-whute font-[700] mb-[40px]">
                  Andre vækst forløb
                </h1>
                {whyData[1].map((v, index) => (
                  <div key={index} className="flex flex-col mb-[30px]">
                    <Reveal>
                      <div className="flex items-center gap-[20px] text-white text-sectionDescription">
                        <div className="w-[30px]">
                          <XSquare size={30} />
                        </div>

                        {v}
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}