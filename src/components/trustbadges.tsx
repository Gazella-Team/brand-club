import { Lock, Clock, RefreshCcwDot, ShieldCheck } from "lucide-react";
import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";

export default function TrustBadges() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[50px] bg-transparent">
      <div className="w-sectionMain mx-auto max-w-main grid grid-cols-4 trustbadgesOne:grid-cols-2 trustbadgesOne:gap-[40px] trustbadgesTwo:grid-cols-1">
        <Reveal>
          <div className="flex items-center justify-center gap-[10px] text-blue-950 blinking-object">
            <Lock size={34} />
            <h1 className="text-[22px] font-[700]">
              {currentPath === "/en" ? "Secure payment" : "Sikker betaling"}
            </h1>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-center justify-center gap-[10px] text-blue-950 blinking-object">
            <Clock size={34} />
            <h1 className="text-[22px] font-[700]">
              {currentPath === "/en" ? "30+ modules" : "30+ moduler"}
            </h1>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-center justify-center gap-[10px] text-blue-950 blinking-object">
            <RefreshCcwDot size={34} />
            <h1 className="text-[22px] font-[700]">
              {currentPath === "/en"
                ? "Personal access 24/7"
                : "Personlig adgang 24/7"}
            </h1>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-center justify-center gap-[10px] text-blue-950 blinking-object">
            <ShieldCheck size={34} />
            <h1 className="text-[22px] font-[700]">
              {currentPath === "/en"
                ? "Refund guarantee"
                : "Refunderings garanti"}
            </h1>
          </div>
        </Reveal>
      </div>
    </section>
  );
}