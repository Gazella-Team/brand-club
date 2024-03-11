import Slider from "react-infinite-logo-slider";
import { Reveal } from "./Animations/Reveal";
import Link from "next/link";

const featuresData = [
  {
    image: "/sn.png",
    link: "https://www.sn.dk/lyngby-taarbaek-kommune/efter-millioner-af-views-paa-tiktok-17-aarige-vil-hjaelpe-andre-unge-ivaerksaettere/",
  },
  {
    image: "/jyske.png",
    link: "https://jv.dk/haderslev/unge-ivaerksaettere-har-succes-med-at-lave-videoer-til-tiktok-har-droppet-fester-og-gaar-tidligt-i-seng-hver-aften?fbclid=IwAR1g4Cp6la6At-wmayf8PXfN-Lxmubv3kuVhmGbp1jx-PCV9tf-ToybLiJ0",
  },
  { image: "/ugeavisen.png", link: "/" },
  {
    image: "/gronne.png",
    link: "https://www.sn.dk/lyngby-taarbaek-kommune/efter-millioner-af-views-paa-tiktok-17-aarige-vil-hjaelpe-andre-unge-ivaerksaettere/",
  },
  {
    image: "/sn.png",
    link: "https://www.sn.dk/lyngby-taarbaek-kommune/efter-millioner-af-views-paa-tiktok-17-aarige-vil-hjaelpe-andre-unge-ivaerksaettere/",
  },
  {
    image: "/jyske.png",
    link: "https://jv.dk/haderslev/unge-ivaerksaettere-har-succes-med-at-lave-videoer-til-tiktok-har-droppet-fester-og-gaar-tidligt-i-seng-hver-aften?fbclid=IwAR1g4Cp6la6At-wmayf8PXfN-Lxmubv3kuVhmGbp1jx-PCV9tf-ToybLiJ0",
  },
  { image: "/ugeavisen.png", link: "/" },
  {
    image: "/gronne.png",
    link: "https://www.sn.dk/lyngby-taarbaek-kommune/efter-millioner-af-views-paa-tiktok-17-aarige-vil-hjaelpe-andre-unge-ivaerksaettere/",
  },
];

export default function FeaturesSlider() {
  return (
    <section className="py-[80px]">
      <div>
        <Slider
          width="160px"
          duration={20}
          pauseOnHover={false}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          {featuresData.map((v) => (
            <Slider.Slide key={v}>
              <Link
                href={v.link}
                className="bg-white shadow-navbar mr-[20px] p-[20px] rounded-main my-[30px]"
              >
                <img alt={v.image} className="w-[100px]" src={v.image}></img>
              </Link>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
}