"use client";
import Image from "next/image";
import { Suspense, useEffect, useRef } from "react";
import VideoComponent from "./VideoComponent";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="" className="relative md:h-screen h-[500px] overflow-hidden">
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 13, 15, 0.86) 0%, rgba(12, 20, 42, 0.30) 23.14%, rgba(8, 27, 73, 0.15) 49.73%, rgba(4, 36, 106, 0.32) 76.92%, #002B87 100%)",
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute bottom-[15%] w-[90%] ml-[5vw] bg-transparent flex flex-col gap-[15px] md:gap-[30px]">
          <h1 className="text-[calc(20px_+_3vw)] text-white font-light">
            Lorem ipsum dolor
          </h1>
          <p className="text-[calc(8px_+_0.6vw)] text-white font-[300] max-w-[600px] w-[40vw]">
            Lorem ipsum dolor sit amet consectetur. Et ultrices auctor tempor
            urna lectus diam pretium.
          </p>
          <button className="text-[15px] md:text-[25px] w-fit group text-white flex items-center gap-[10px]">
            Discover More{" "}
            <div className="w-[25px] md:w-[35px] h-[25px] md:h-[35px] group-hover:ml-[10px] duration-300 transition-all flex items-center justify-center border rounded-full border-[#94D4FF]">
              <Image
                src={"/arrow.webp"}
                alt="arrow"
                width={100}
                height={100}
                className="w-auto h-[10px] md:h-[18px]"
              />
            </div>
          </button>
        </div>
        <Link href={"#about-us"}>
          <Image
            src={"/down.gif"}
            width={100}
            unoptimized
            loading={"lazy"}
            height={100}
            className="top-[85%] md:top-[89%] relative mx-auto"
          />
        </Link>
      </div>
    </div>
  );
}
