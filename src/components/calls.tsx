import SectionStarter from "./sectionstarter";
import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";
import { Dot, UserRound } from "lucide-react";

const callsData = [
  {
    callName: "Live Q/A",
    participants: "16",
    date: "Jan 1, 24",
    time: "6:00 PM",
    dotColor: "rgb(23 37 84)",
  },
  {
    callName: "Salgs opkald",
    participants: "4",
    date: "Jan 8, 24",
    time: "3:00 PM",
    dotColor: "rgb(23 37 84)",
  },
  {
    callName: "Ugentlig status",
    participants: "22",
    date: "Jan 16, 24",
    time: "4:00 PM",
    dotColor: "rgb(23 37 84)",
  },
  {
    callName: "Emne opkald",
    participants: "13",
    date: "Jan 23, 24",
    time: "5:00 PM",
    dotColor: "rgb(23 37 84)",
  },
];
const englishCallsData = [
  {
    callName: "Live Q/A",
    participants: "16",
    date: "Jan 1, 24",
    time: "6:00 PM",
    dotColor: "rgb(23 37 84)",
  },
  {
    callName: "Sales Meeting",
    participants: "4",
    date: "Jan 8, 24",
    time: "3:00 PM",
    dotColor: "rgb(23 37 84)",
  },
  {
    callName: "Weekly Cacthup",
    participants: "22",
    date: "Jan 16, 24",
    time: "4:00 PM",
    dotColor: "rgb(23 37 84)",
  },
  {
    callName: "Topic Call",
    participants: "13",
    date: "Jan 23, 24",
    time: "5:00 PM",
    dotColor: "rgb(23 37 84)",
  },
];

export default function Calls() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px]">
      <div className="w-sectionMain mx-auto max-w-[800px] text-white text-center">
        <Reveal>
          <h1 className="text-heroHeading font-[700] mb-[14px]">
            {currentPath === "/en"
              ? "Weekly community calls"
              : "Ugentlige møder"}
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            {currentPath === "/en"
              ? "All people learn differently, so we have weekly community calls, so we can guarantee individual success to everyone."
              : "Da alle mennesker lærer på forskellige måder, har vi implementeret ugentlige opkald, hvor Benjamin og Sebastian deler deres mest værdifulde OCMA guldkorn"}
          </p>
        </Reveal>
        {currentPath === "/en" ? (
          <div className="grid grid-cols-2 gap-[30px] trustbadgesTwo:grid-cols-1">
            {englishCallsData.map((v) => (
              <CallsCard key={v} Obj={v} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-[30px] trustbadgesTwo:grid-cols-1">
            {callsData.map((v) => (
              <CallsCard key={v} Obj={v} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const CallsCard = (props: any) => {
  return (
    <Reveal>
      <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="text-white p-[20px] rounded-main border-[2px] border-blue-500">
        <div className="flex items-center">
          <Dot size={50} color="#ffff" />
          <h1 className="text-[18px] font-[700]">{props.Obj.callName}</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UserRound />
            {props.Obj.participants}
          </div>
          <div className="flex items-center">{props.Obj.date}</div>
          <div className="flex items-center">{props.Obj.time}</div>
        </div>
      </div>
    </Reveal>
  );
};