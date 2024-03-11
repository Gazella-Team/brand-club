import { useState } from "react";
import { Reveal } from "./Animations/Reveal";

export default function SectionStarter(props: any) {
  const [isDark, setIsDark] = useState(props.mode);
  return isDark ? (
    <Reveal>
      <div className="text-center bg-transparent">
        <div className="text-white inline-block p-[4px] px-[16px] rounded-[100px] border-[2px] border-white mb-[30px] font-[600]">
          <p>{props.section}</p>
        </div>
      </div>
    </Reveal>
  ) : (
    <Reveal>
      <div className="text-center bg-transparent">
        <div className="text-blue-950 inline-block p-[4px] px-[16px] rounded-[100px] border-[2px] border-blue-950 mb-[30px] font-[600]">
          <p>{props.section}</p>
        </div>
      </div>
    </Reveal>
  );
}