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