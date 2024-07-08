"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { regions, services } from "../data/services";
import Link from "next/link";
const Header = () => {
  return (
    <header className="md:w-[95%] mt-[50px] lg:mt-[150px] flex md:flex-row flex-col max-md:gap-[20px] justify-between items-end mx-[2.5%] md:mx-auto">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[calc(30px_+_1.5vw)] font-[200]">
          Duroub Services
        </h1>
        <p className="text-[calc(6px_+_0.6vw)] max-w-[600px]">
          Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
          parturient phasellus aliquam. Gravida amet leo quis nam nibh.
        </p>
      </div>
      <button className="text-[calc(8px_+_1vw)] text-black group font-[500] w-fit flex items-center gap-[10px]">
        All Services{" "}
        <div className="w-[35px] h-[35px] flex items-center relative duration-300 !transition-all justify-center border rounded-full border-[#002B87] group-hover:translate-x-[10px]">
          <Image
            src={"/arrow2.webp"}
            alt="arrow"
            width={100}
            height={100}
            className="!w-auto !h-[19px]"
          />
        </div>
      </button>
    </header>
  );
};

const SwiperComponent = ({ services }) => {
  return (
    <div className="mt-[30px] md:mt-[95px] flex w-full h-auto max-md:flex-col">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={22}
        className="mySwiper !w-full max-md:!mr-[2.5%] !ml-[2.5%]"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: "auto",
          },
        }}
      >
        {" "}
        {services.map((service, index) => {
          return (
            <SwiperSlide
              key={index}
              className="!flex flex-col group !h-[100%] !w-[100%] md:!w-[500px] relative overflow-hidden md:!h-[500px]"
            >
              <Image
                src={service.img}
                alt="swiper img"
                width={100}
                height={100}
                loading="lazy"
                className="!w-full !h-full object-cover rounded-xl"
                unoptimized
              />
              <div className="bg-[#0F0D0F] bg-opacity-60 group-hover:bg-opacity-70 transition-all absolute rounded-xl top-0 left-0 w-full h-full" />
              <h1 className="text-white text-[calc(15px_+_1vw)] text-start absolute left-[5%] font-[200] max-w-[80%] bottom-[5%]">
                {service.text}
              </h1>
              <div className="max-md:w-[60px] max-md:h-[60px] h-[80px] w-[80px] flex items-center absolute top-[8%] transition-all duration-300 group-hover:right-[8%] right-[-20%] justify-center border-[2px] rounded-full border-[#94D4FF]">
                <Image
                  src={"/arrow.webp"}
                  alt="arrow"
                  width={800}
                  unoptimized
                  height={800}
                  className="!w-auto max-md:!h-[30px] !h-[40px]"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default function Services() {
  return (
    <div id="services">
      <Header />
      <SwiperComponent services={services} />
      <section
        className="relative lg:h-[150vh] min-h-[100vh] pb-[10vh] mt-[-13%]"
        style={{
          background: "url(/map.webp)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:mt-[25%] mt-[100px] flex flex-col gap-[18px] max-w-[90vw] absolute ml-[5vw]">
          <h1 className="text-[calc(20px_+_2vw)] text-[#94D4FF]">
            {regions.length} Regions
          </h1>
          <p className="text-[calc(20px_+_2vw)] font-extralight text-white">
            of the kingdom fall under our coverage
          </p>
          <p className="text-[calc(8px_+_0.6vw)] text-white">
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh.
          </p>
          <div className="w-[310px] gap-[25px] mt-[20px] md:mt-[40px] flex flex-wrap">
            {regions.map((region, index) => {
              return (
                <Link
                  key={index}
                  href={"/"}
                  className="w-fit px-[21px] h-[70px] bg-white bg-opacity-10 text-white rounded-[10px] items-center justify-center flex"
                >
                  {region.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
