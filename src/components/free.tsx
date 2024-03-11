import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { ArrowRight } from "lucide-react";

const freeData = [
  {
    description:
      "Struggling with outreach? Try this approach and see results in the way you reach out to potential clients. Download now",
    image: "/value.webp",
  },
  {
    description:
      "Struggling with outreach? Try this approach and see results in the way you reach out to potential clients. Download now",
    image: "/value.webp",
  },
  {
    description:
      "Struggling with outreach? Try this approach and see results in the way you reach out to potential clients. Download now",
    image: "/value.webp",
  },
];

export default function Free() {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(42,117,241,1) 8%, rgba(33,107,231,1) 13%, rgba(23,89,201,1) 24%, rgba(24,78,173,1) 34%, rgba(22,64,143,1) 50%, rgba(23,37,84,1) 100%)",
      }}
      className="py-[100px]"
    >
      <SectionStarter section="materiale" mode={true} />
      <div className="w-sectionMain mx-auto max-w-main text-white text-center">
        <Reveal>
          <h1 className="text-heroHeading font-[700] mb-[14px]">
            Værdi gratis <span className="text-blue-500">til dig</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            Læs anmeldelser fra nogle af de største nationale og internationale
            e-commerce iværksættere
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-[30px] heroOne:grid-cols-1 heroOne:max-w-[400px] heroOne:mx-auto">
          {freeData.map((v, index) => (
            <FreeCard key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FreeCard = (props: any) => {
  return (
    <div className="border-[1px] border-white p-[20px] rounded-main text-left">
      <Reveal>
        <img className="mx-auto mb-[60px]" src={props.Obj.image}></img>
      </Reveal>
      <Reveal>
        <div className="p-[16px]">
          <p className="mb-[40px]">{props.Obj.description}</p>
          <Link
            className="bg-blue-500 text-white p-[30px] py-[10px] rounded-main flex items-center gap-[10px]"
            href={"/"}
          >
            Få den nu
            <span>
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
};