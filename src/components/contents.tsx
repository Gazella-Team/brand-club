import {
    Camera,
    Plus,
    PlusCircle,
    X,
    XCircle,
    HeartHandshakeIcon,
    ScissorsSquare,
    CircleDollarSign,
    MessageCircleMore,
    Footprints,
    ShieldCheck,
    Globe,
    Phone,
  } from "lucide-react";
  import { Reveal } from "./Animations/Reveal";
  import SectionStarter from "./sectionstarter";
  import { useState } from "react";
  import { useRouter } from "next/router";
  
  const contentsDataRight = [
    {
      heading: "Ugentlige live opkald med os",
      icon: <Phone />,
      description:
        "Alle lærer forskelligt; derfor har vi implementeret community opkald hver uge, hvor du kan få svar på alle dine spørgsmål",
    },
    {
      heading: "Egnet til nybegyndere og letøvede",
      icon: <MessageCircleMore />,
      description:
        "Vi tager dig gennem rejsen fra A-z så du kan opbygge dit eget OCMA. Denne masterclass er for alle; Dem der først lige starter, erfarne agency ejere og endda store virksomheder som vil skalere deres brand.",
    },
    {
      heading: "Vores resultater, værktøjer og skabeloner",
      icon: <Footprints />,
      description:
        "Vi giver dig alle vores dybdegående værktøjer, resultater, systemer og skabeloner, vi selv bruger til vores eget Agency. ",
    },
    {
      heading: "Hvordan du skalerer dit OCMA til 50k/måned",
      icon: <ShieldCheck />,
      description:
        "Vi tager dig fra a-z på hvordan du kan tage din nye forretning til 50k/ måned. Vi har udfoldet et helt kapitel der uddyber dette konkret",
    },
    {
      heading: "Sparringsgruppe",
      icon: <Footprints />,
      description:
        "Du vil både blive tilføjet til den større gruppe med alle medlemmerne, men så tilføjer vi dig også til en sparringsgruppe med 3-4 andre medlemmer vi dedikeret selv udvælger, som er like minded iværksættere som også vil hjælpe dig på din rejse.",
    },
  ];
  const contentsDataLeft = [
    {
      heading: "Support samme dag",
      icon: <HeartHandshakeIcon />,
      description:
        "Support samme dag - Vi fokusere på den enkleste succeshistorie, derfor svarer vi med det samme når du har brug for hjælp :)",
    },
    {
      heading: "Egnet til nybegyndere og letøvede ",
      icon: <Globe />,
      description:
        "Vi tager dig gennem rejsen  fra A-z så du kan opbygge dit eget 60k/ måned organic agency. Denne masterclass er for alle; Dem der først lige starter, erfarne agency ejere og endda store virksomheder som vil skalere deres brand.",
    },
    {
      heading: "Vores værktøjer og skabeloner ",
      icon: <ScissorsSquare />,
      description:
        "Vi giver dig alle vores dybdegående værktøjer, systemer og skabeloner vi selv bruger til vores forretning.",
    },
    {
      heading: "Hvordan du skalerer dit agency til 60k/måned",
      icon: <CircleDollarSign />,
      description:
        "Vi tager dig fra a-z på hvordan du kan tage din nye forretning til 60k/ måned.",
    },
    {
      heading: "30+ trin for trin dybdegående moduler",
      icon: <ShieldCheck />,
      description:
        "Vi har udfoldet mere end 30+ dybdegående moduler som lærer dig nøjagtig hvordan du kan få succes med dit OCMA.",
    },
  ];
  const englishContentsDataRight = [
    {
      heading: "Weekly live calls with us",
      icon: <Phone />,
      description:
        "Everyone learns differently; therefore we have implemented community calls every week where you can get answers to all your questions.",
    },
    {
      heading: "Personal sparring group ",
      icon: <MessageCircleMore />,
      description:
        "You will be added to a group with other like minded entrepreneurs who will help you on your journey.",
    },
    {
      heading: "30+ step by step in-depth modules",
      icon: <Footprints />,
      description:
        "We've rolled out more than 30+ in-depth tutorials that teach you exactly how to scale your agency to 9k/month.",
    },
    {
      heading: "24/7 personal access",
      icon: <ShieldCheck />,
      description:
        "You have 24/7 access to our masterclass, which is developed in our own software.",
    },
  ];
  const englishContentsDataLeft = [
    {
      heading: "Support same day",
      icon: <HeartHandshakeIcon />,
      description:
        "We focus on the individual's success story, that's why we respond immediately when you need help :)",
    },
    {
      heading: "Suitable for beginners and intermediates",
      icon: <Globe />,
      description:
        "We take you through the journey from A-z so you can build your own 9k/month organic agency. This masterclass is for everyone; Those just starting out, experienced agency owners and even large companies looking to scale their brand.",
    },
    {
      heading: "Our tools and templates",
      icon: <ScissorsSquare />,
      description:
        "We give you all our in-depth tools, systems and templates we use for our own business.",
    },
    {
      heading: "How to scale your agency to 9k/month",
      icon: <CircleDollarSign />,
      description:
        "We take you from a-z on how you can take your new business to 60k/month.",
    },
  ];
  
  export default function Contents() {
    const router = useRouter();
    const currentPath = router.pathname.slice(0, 3);
    return (
      <section className="py-[100px] bg-transparent">
        <SectionStarter section="masterclass content" mode={false} />
        <div className="w-sectionMain mx-auto max-w-main text-center">
          <Reveal>
            <h1 className="text-heroHeading font-[700] mb-[60px] text-white">
              {currentPath === "/en"
                ? " What is included in "
                : " Hvad indeholder "}{" "}
              <span className="text-blue-500">
                {currentPath === "/en" ? "our masterclass" : "vores masterclass"}
              </span>
            </h1>
          </Reveal>
          <div className="grid grid-cols-2 gap-[30px] contents:grid-cols-1">
            {currentPath === "/en" ? (
              <div className="flex flex-col gap-[30px]">
                {englishContentsDataLeft.map((v) => (
                  <ContentCard key={v} Obj={v} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-[30px]">
                {contentsDataLeft.map((v) => (
                  <ContentCard key={v} Obj={v} />
                ))}
              </div>
            )}
            {currentPath === "/en" ? (
              <div className="flex flex-col gap-[30px]">
                {englishContentsDataRight.map((v) => (
                  <ContentCard key={v} Obj={v} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-[30px]">
                {contentsDataRight.map((v) => (
                  <ContentCard key={v} Obj={v} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
  
  const ContentCard = (props: any) => {
    const [contentCardExpanded, setContentCardExpanded] = useState(false);
    return (
      <Reveal>
        <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="text-left p-[20px] border-[2px] rounded-main">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-[20px] text-[18px] font-[700]">
              <div className="bg-blue-500 p-[10px] rounded-[50px] text-white">
                {props.Obj.icon}
              </div>
  
              <h1>{props.Obj.heading}</h1>
            </div>
            {contentCardExpanded ? (
              <XCircle
                className="cursor-pointer"
                onClick={() => setContentCardExpanded(false)}
              />
            ) : (
              <PlusCircle
                className="cursor-pointer"
                onClick={() => setContentCardExpanded(true)}
              />
            )}
          </div>
          {contentCardExpanded ? (
            <p className="mt-[30px] text-[16px] text-gray-200">
              {props.Obj.description}
            </p>
          ) : null}
        </div>
      </Reveal>
    );
  };