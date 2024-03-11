import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function CoolCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Link
            href={
              "https://jv.dk/haderslev/unge-ivaerksaettere-har-succes-med-at-lave-videoer-til-tiktok-har-droppet-fester-og-gaar-tidligt-i-seng-hver-aften?fbclid=IwAR1g4Cp6la6At-wmayf8PXfN-Lxmubv3kuVhmGbp1jx-PCV9tf-ToybLiJ0"
            }
          >
            <img
              alt="article"
              className="w-full aspect-w-1 aspect-h-1"
              src="/1.png"
            ></img>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={
              "https://www.sn.dk/lyngby-taarbaek-kommune/efter-millioner-af-views-paa-tiktok-17-aarige-vil-hjaelpe-andre-unge-ivaerksaettere/"
            }
          >
            <img
              alt="article"
              className="h-full aspect-w-1 aspect-h-1"
              src="/2.png"
            ></img>
            <p>Lyngby</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={
              "https://www.e-pages.dk/haderslevugeavis/718/html5/?fbclid=IwAR2ISDGaZa_zsVSIzBhZshwpNru0C5GxYzjdF4xI0znC_NQ7HnGgQtbbIss"
            }
          >
            <img
              alt="article"
              className="h-full w-full object-cover aspect-w-1 aspect-h-1"
              src="/3.png"
            ></img>
            <p>Lyngby</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}