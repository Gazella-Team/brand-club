import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";

export default function StudentTests() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const testimonialsData = [
    {
      personImage: "/la.jpg",
      name: "Victor Roenholt",
      position: "Student - OCMA Masterclass",
      companyImage: "/meta.png",
      words:
        "Fantastisk kursus og fantastiske fyre! Jeg lukkede min første kunde inden for en uge. Er kommet op på et beløb som jeg selv synes virker helt surrealistisk. Efter 2 måneder kan jeg stolt sige at jeg er kommet op på 50.000kr/måneden",
    },
    {
      personImage: "/ra.jpg",
      name: "Marcus Offersen",
      position: "Student - OCMA Masterclass",
      companyImage: "/meta.png",
      words:
        "6 ugers OCMA masterclass! Har allerede fået 47000kr's / månedlige indtægt i mit organiske bureau alene. Kurset er praktisk og resultatorienteret. Min plan er at ramme + 100.000kr indsamlet / måned inden den 1. juli (3 måneder fra nu)",
    },
  ];
  const englishTestimonialsData = [
    {
      personImage: "/la.jpg",
      name: "Victor Roenholt",
      position: "Student - OCMA Masterclass",
      companyImage: "/meta.png",
      words:
        "Great course and great guys! I closed my first client within a week. I've reached an amount that seems surreal to me. After 2 months I can proudly say that I have reached 50.000kr/month",
    },
    {
      personImage: "/ra.jpg",
      name: "Marcus Offersen",
      position: "Student - OCMA Masterclass",
      companyImage: "/meta.png",
      words:
        "6 weeks OCMA masterclass! I Have already gained 7000$/monthly revenue in my organic agency alone. The course is practical and result-oriented. My plan is to hit +15000$ collected/month by July 1st (3 months from now)",
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