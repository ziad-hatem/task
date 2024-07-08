"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Up() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setScroll(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScroll(0);
  };

  return (
    <div
      className="w-[35px] fixed bottom-[5%] cursor-pointer mb-0 left-[86%] md:left-[96%] h-[35px] z-[999] flex items-center justify-center rounded-full"
      onClick={handleClick}
    >
      <svg className="absolute w-full h-full" viewBox="0 0 36 36">
        <path
          className="text-[#94D4FF]"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-[#3D81D3]"
          strokeWidth="2"
          strokeDasharray={`${scroll}, 100`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <Image
        src={"/arrow.webp"}
        alt="arrow"
        width={100}
        height={100}
        className="w-auto rotate-[-90deg] h-[18px]"
      />
    </div>
  );
}
