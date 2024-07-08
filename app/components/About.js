"use client";
import Image from "next/image";
import { about } from "../data/about";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Component = ({ bg, bgColor, title, paragraph }) => {
  return (
    <div
      className="w-[100%] h-[450px] relative flex flex-col justify-end items-center"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundColor: bgColor,
        }}
      />
      <div className="w-[90%] h-[18%] md:h-[25%] lg:h-[30%]">
        <h1 className="text-[calc(18px_+_1vw)] !text-start relative z-10 text-white">
          {title}
        </h1>
        <p className="text-[calc(8px_+_0.6vw)] !text-start relative z-10 text-white">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <div>
      <section
        id="about-us"
        className="overflow-visible h-[500px] lg:h-[100vh] relative flex flex-col"
        style={{
          background: "url(/aboutusImg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bottom-[35%] left-[5vw] md:left-[10vw] bg-transparent flex flex-col gap-[30px]">
          <h1 className="text-[calc(20px_+_2vw)] text-white font-extralight">
            About Duroub Logistics
          </h1>
          <p className="text-[calc(8px_+_0.6vw)] text-white font-thin max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh. Sed
            urna commodo urna bibendum nulla cras tellus. Sit lacus dictum
            porttitor tellus sed fames arcu velit. Quam leo proin ipsum
            molestie. Nibh magna porttitor ac ipsum blandit eget vestibulum.
          </p>
          <button className="text-[25px] text-white flex group items-center gap-[10px]">
            Explore More{" "}
            <div className="w-[35px] h-[35px] flex items-center group-hover:ml-[10px] duration-300 transition-all justify-center border rounded-full border-[#94D4FF]">
              <Image
                src={"/arrow.webp"}
                alt="arrow"
                width={100}
                height={100}
                className="w-auto h-[18px]"
              />
            </div>
          </button>
        </div>
      </section>
      <div className="flex w-full md:w-fit ml-auto h-auto mt-[-20%] lg:mt-[-10%] max-md:flex-col">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={0}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper2 !w-full md:!w-fit !flex md:!items-start !relative !ml-[5%] md:!mr-auto md:!ml-0 !z-10 rounded-tl-[10px] rounded-bl-[10px]"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: "auto",
            },
          }}
        >
          {about.map((e, i) => {
            return (
              <SwiperSlide
                key={i}
                className="!flex flex-col !w-screen md:!w-[400px]"
              >
                <Component key={i} {...e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
