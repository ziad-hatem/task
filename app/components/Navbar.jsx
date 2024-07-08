"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Lang from "./Lang";
import { langs } from "../data/langs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ Links }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`grid grid-cols-8 items-center w-full grid-rows-1 max-lg:w-[95%] max-lg:mx-[2.5%] mx-auto lg:top-10 top-6 z-20 absolute transition-colors duration-300 ${
        isScrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="logo w-fit col-span-4 md:col-span-2 ml-[2.5vw] md:ml-[5vw]">
        <Image
          src={"/logo-white.svg"}
          alt="logo-white"
          width={100}
          height={100}
          unoptimized
          className="w-auto h-[calc(35px_+_3vw)] sm:h-[80px]"
        />
      </div>
      <div className="hidden lg:flex gap-[30px] justify-center col-span-4">
        {Links.map((link, index) => {
          return (
            <Link
              href={`#${link.link}`}
              key={index}
              className="text-white group text-[22px] font-extralight"
            >
              {link.name}
              <div className="w-0 group-hover:w-[50%] transition-all duration-300 h-0.5 bg-[#94D4FF]" />
            </Link>
          );
        })}
      </div>
      <div className="lang w-fit flex gap-4 items-center justify-end col-start-5 max-sm:ml-[4vw] md:col-start-8">
        <Lang langs={langs} />
        <GiHamburgerMenu
          className="max-lg:block hidden cursor-pointer"
          color="white"
          size={"28"}
        />
      </div>
    </div>
  );
}
