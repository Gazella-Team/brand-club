import { useRouter } from "next/router";
import { Reveal } from "../Animations/Reveal";

export default function BocContent() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section  className="py-[100px]">
      <div className="w-sectionMain mx-auto max-w-main text-white text-center">
        <Reveal>
          <h1 className="bg-transparent inline-block text-heroHeading font-[700] mb-[14px]">
            {currentPath === "/en" ? "Business" : "Danmarks førende fællesskab for ambitiøse brandejere"}{" "}
            <span className="text-green-600">
              {currentPath === "/en" ? "Recommendations" : ""}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            {currentPath === "/en"
              ? "What business owners say about us"
              : " Branchens mest komplette tøjbrand forløb, hvor hver stadie af din tøjbrands - rejse er samlet på en platform. En one-stop-destination, der frigør dig fra at opsøge yderligere viden, kompetencer, dyre bureauer, seminarer eller anden ekstern information. Den mest opdaterede indsigt i alle aspekter inden for skalering og drift af et succesfuldt tøjmærke. "}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="text-white p-6 flex flex-col gap-6 rounded-2xl text-left">
            <img className="rounded-2xl" src="/boc/contents/1.webp"></img>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Markedsføring hjælp fra eksperter</h1>
              <p>Direkte hjælp & viden fra dem der hjalp os med vores markedsføring. </p>
            </div>
          </div>
          <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="text-white p-6 flex flex-col gap-6 rounded-2xl text-left">
            <img className="rounded-2xl" src="/boc/contents/2.webp"></img>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Hjælp til skalering af dit brand</h1>
              <p>Trin for trin gennemgang fra professionelle webudviklere </p>
            </div>
          </div>
          <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="text-white p-6 flex flex-col gap-6 rounded-2xl text-left">
            <img className="rounded-2xl" src="/boc/contents/3.webp"></img>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Liste med eksklusive Leverandører</h1>
              <p>Modtag liste med eksklusive leverandører vi selv tager i brug hver dag</p>
            </div>
          </div>
          <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="text-white p-6 flex flex-col gap-6 rounded-2xl text-left">
            <img className="rounded-2xl" src="/boc/contents/4.webp"></img>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Opbyggelse af brand</h1>
              <p>Lær hvordan du finder din stil til dit brand og hvordan du brander det til millioner.</p>
            </div>
          </div>
          <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="text-white p-6 flex flex-col gap-6 rounded-2xl text-left">
            <img className="rounded-2xl" src="/boc/contents/5.webp"></img>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Danmarks førende fællesskab for brand ejere</h1>
              <p>Dette er Danmarks førende fællesskab for brandejere, hvor ambitiøse brandejere netværker og lader sig inspirere af hinanden.</p>
            </div>
          </div>
          <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="text-white p-6 flex flex-col gap-6 rounded-2xl text-left">
            <img className="rounded-2xl" src="/boc/contents/6.webp"></img>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Adgang til eksklusive events</h1>
              <p>Gennem brand owners club får du adgang til eksklusive FCFS Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialsCard = (props: any) => {
  return (
    <Reveal>
      <div className="rounded-main text-glow p-[14px] pb-[20px] text-left">
        <img
          alt={props.Obj.personImage}
          className="rounded-main h-[300px] w-full object-cover object-top mb-[20px]"
          src={props.Obj.personImage}
        ></img>
        <div className="p-[10px]">
          <h1 className="text-white font-[600] text-[22px]">
            {props.Obj.name}
          </h1>
          <p className="text-gray-200 mb-[30px]">{props.Obj.position}</p>
          <p className="text-white text-[18px] font-[600] italic w-[100%]">
          &quot;{props.Obj.words}&quot;
          </p>
        </div>
      </div>
    </Reveal>
  );
};