import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";

export default function Testimonials() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const testimonialsData = [
    {
      personImage: "/thomastheil.png",
      name: "Thomas Theil",
      position: "Ejer - Cinnamon Coffee",
      companyImage: "/meta.png",
      words:
        "Dybt overrasket over deres vidunderlige tilgang til tingene. Man kan mærke det er et ungt team der har styr på deres ting, og deres moderne tilgang til tingene slår bare igennem!",
    },
    {
      personImage: "/case2.png",
      name: "Victor Aaroe",
      position: "Forretningsejer",
      companyImage: "/meta.png",
      words:
        "Min beslutning om at gå med deres team har ændret min virksomheds ståstand. De hjalp mig fra start til nu med 180.000 kr på bundlinjen indenfor 1,5 måneds samarbejde.",
    },
    {
      personImage: "/emilstrande.png",
      name: "Emil Strande",
      position: "Ejer - Letzsneak",
      companyImage: "/meta.png",
      words:
        "De hjalp os med at producere ugc videoer. Vi fik hurtigt mange følgere. Teamet bag er unge og entusiastiske og går op i at levere et produkt som du er tilfreds med.",
    },
    {
      personImage: "/madsreview.jpg",
      name: "Mads",
      position: "Elev - Organic Masterclass",
      companyImage: "/meta.png",
      words:
        "Fantastiske gutter samt et fantastisk gennemført og detaljeret kursus! Var ikke igang mere end 1 uge, før min første kunde var lukket. Jeg har nu flere på vej og ser kun frem til flere aftaler fremadrettet, grundet deres enorme viden og hjælpsomhed. Drengene er helt nede på jorden og man får en fornemmelse under deres samarbejde, at hver enkelt kursist succes, er deres succes. Deres 1:1 hjælp er derfor enormt brugbart og fungerer helt i top! Kæææmpe anbefaling herfra!",
    },
    {
      personImage: "/oskarreview.jpg",
      name: "Oskar",
      position: "Elev - Organic Masterclass",
      companyImage: "/meta.png",
      words:
        "Ekstrem god masterclass om den nye “organic agency” forretningsmodel. Du lærer alt fra hvordan man bygger en kæmpe forretning op omkring det (som ejerne selv har gjort) til hvordan man performer for sine kunder. Virkelig et produkt, der er veludført, og hvor der er tænkt på hver evig lille detalje. Kan kun anbefales :)",
    },
    {
      personImage: "/collegehubreview.jpg",
      name: "Tobias",
      position: "Collegehub",
      companyImage: "/meta.png",
      words:
        "Vi stødte ind i Benjamin i vores butik på Strøget, hvor Benjamin klargjorde vækstmulighederne gennem TikTok markedsføring med engagerende videoer. Vi var i gang med opsætning af vores online webshop, og derfor var Benjamin og hans team som faldt fra himlen. På under 2 uger gik vi fra en helt ny TikTok med 0 følgere, til mere end 10k. Vi fik en fantastisk launch, og dette kunne vi ikke have opnået uden VateMedia. Drengene er engagerede, seriøse og pisse dygtige til online formidling i øjenhøjde med det unge segment. At de både har en strategisk og logisk tilgang, sammen med fingeren på pulsen, gør VateMedia til en super samarbejdspartner. Kæmpe anbefaling herfra!",
    },
  ];
  const englishTestimonialsData = [
    {
      personImage: "/thomastheil.png",
      name: "Thomas Theil",
      position: "Owner - Cinnamon & coffee",
      companyImage: "/meta.png",
      words:
        "Deeply surprised by their wonderful approach to things. You can tell it's a young team that has their stuff under control, and their modern approach to things just shines through! They are in the process of revolutionizing the way marketing is done. - big recommendation from here!c",
    },
    {
      personImage: "/case2.png",
      name: "Victor Aaroe",
      position: "Business Owner",
      companyImage: "/meta.png",
      words:
        "My decision to go with their team has changed the face of my business. They helped me from start to now with DKK 180,000 on the bottom line within 1.5 months of collaboration.",
    },
    {
      personImage: "/emilstrande.png",
      name: "Emil Strande",
      position: "Founder - Letzsneak",
      companyImage: "/meta.png",
      words:
        "They helped us produce ugc videos. We quickly gained many followers. The team behind it is young and enthusiastic and is committed to delivering a product that you're satisfied with.",
    },
    {
      personImage: "/madsreview.jpg",
      name: "Mads",
      position: "Student - Organic Masterclass",
      companyImage: "/meta.png",
      words:
        "Great guys as well as a great completed and detailed course! Wasn't running more than 1 week before my first customer was closed. I now have more on the way and can only look forward to more agreements in the future, due to their enormous knowledge and helpfulness. The boys are down to earth and you get the feeling during their collaboration that the success of each individual student is their success. Their 1:1 help is therefore enormously useful and works perfectly! Huge recommendation from here!",
    },
    {
      personImage: "/oskarreview.jpg",
      name: "Oskar",
      position: "Student - Organic Masterclass",
      companyImage: "/meta.png",
      words:
        "Really good program about organic agency. You learn everything from how to build a huge business around it (as the owner has done) to how to perform for your customers. Truly a product that is well-executed, and where every little detail has been thought of. Can only be recommended.",
    },
    {
      //
      personImage: "/collegehubreview.jpg",
      name: "Tobias",
      position: "Collegehub",
      companyImage: "/meta.png",
      words:
        "Vi stødte ind i Benjamin i vores butik på Strøget, hvor Benjamin klargjorde vækstmulighederne gennem TikTok markedsføring med engagerende videoer. Vi var i gang med opsætning af vores online webshop, og derfor var Benjamin og hans team som faldt fra himlen. På under 2 uger gik vi fra en helt ny TikTok med 0 følgere, til mere end 10k. Vi fik en fantastisk launch, og dette kunne vi ikke have opnået uden VateMedia. Drengene er engagerede, seriøse og pisse dygtige til online formidling i øjenhøjde med det unge segment. At de både har en strategisk og logisk tilgang, sammen med fingeren på pulsen, gør VateMedia til en super samarbejdspartner. Kæmpe anbefaling herfra!",
    },
  ];
  return (
    <section  className="py-[100px]">
      <div className="w-sectionMain mx-auto max-w-main text-white text-center">
        <Reveal>
          <h1 className="bg-transparent inline-block text-heroHeading font-[700] mb-[14px]">
            {currentPath === "/en" ? "Business" : "Erhvervs"}{" "}
            <span className="text-blue-500">
              {currentPath === "/en" ? "Reviews" : "Anbefalinger"}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            {currentPath === "/en"
              ? "What business owners think about us and our expertise"
              : "Hvad elever & forretningsejere siger om os og vores expertise "}
          </p>
        </Reveal>
        {currentPath === "/en" ? (
          <div className="grid grid-cols-3 gap-[30px] heroOne:grid-cols-1 heroOne:max-w-[400px] heroOne:mx-auto">
            {englishTestimonialsData.map((v, index) => (
              <TestimonialsCard key={index} Obj={v} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-[30px] heroOne:grid-cols-1 heroOne:max-w-[400px] heroOne:mx-auto">
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
      <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="rounded-main  p-[14px] pb-[20px] text-left">
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