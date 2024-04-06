import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";

export default function StudentTests() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const testimonialsData = [
    {
      personImage: "/testimonials/oskar.webp",
      name: "Oskar",
      position: "Student - OCMA Masterclass",
      companyImage: "/meta.png",
      words:
        "Ekstrem god masterclass om den nye OCMA  forretningsmodel. Du lærer alt fra hvordan man bygger en kæmpe forretning op omkring det (som ejerne selv har gjort) til hvordan man performer for sine kunder. Virkelig et produkt, der er veludført, og hvor der er tænkt på hver evig lille detalje. Kan kun anbefales :)",
    },
  ];
  const englishTestimonialsData = [
    {
      personImage: "/testimonials/oskar.webp",
      name: "Oskar",
      position: "Student - OCMA Masterclass",
      companyImage: "/meta.png",
      words:
        "Really good program about organic agency. You learn everything from how to build a huge business around it (as the owner has done) to how to perform for your customers. Truly a product that is well-executed, and where every little detail has been thought of. Can only be recommended.",
    },
  ];
  return (
    <section  className="py-[100px]">
      <div className="w-sectionMain mx-auto max-w-[1000px] text-white text-center">
        <Reveal>
          <h1 className="bg-transparent inline-block text-heroHeading font-[700] mb-[14px]">
            {currentPath === "/en" ? "What our" : "Hvad vores"}{" "}
            <span className="text-blue-500">
              {currentPath === "/en" ? "students say" : "elever siger"}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            {currentPath === "/en"
              ? "What students say about us and our expertise"
              : "Hvad elever siger om os og vores expertise"}
          </p>
        </Reveal>
        {currentPath === "/en" ? (
          <div className="grid grid-cols-2 gap-[30px] heroOne:grid-cols-1 heroOne:max-w-[400px] heroOne:mx-auto">
            {englishTestimonialsData.map((v, index) => (
              <TestimonialsCard key={index} Obj={v} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-[30px] heroOne:grid-cols-1 heroOne:max-w-[400px] heroOne:mx-auto">
            {testimonialsData.map((v, index) => (
              <TestimonialsCard key={index} Obj={v} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const TestimonialsCard = (props: any) => {
  return (
    <Reveal>
      <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="rounded-main text-glow  p-[14px] pb-[20px] text-left">
        <img
          alt={props.Obj.personImage}
          className="rounded-main h-[300px] w-full object-cover mb-[20px]"
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