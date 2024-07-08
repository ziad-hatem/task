import Image from "next/image";
import Link from "next/link";
import { links } from "../data/footer";

export default function Footer() {
  return (
    <footer
      className="min-h-[505px] pb-4 w-full max-md:pt-8 mt-[-6%]"
      style={{
        background: "linear-gradient(358deg, #002B87 1.81%, #0B44AA 98.86%)",
      }}
    >
      <div className="flex w-full md:flex-row flex-col max-md:justify-start max-md:items-start md:pr-[calc(2vw)] max-md:pl-[calc(5vw)]  gap-4">
        <div className="pt-[5%] md:ml-[2.5%] flex-none w-auto">
          <Image
            src={"/logo-white.svg"}
            alt="logo"
            width={100}
            height={100}
            unoptimized
            className="w-auto h-[100px] max-md:h-[20%] object-contain"
          />
          <p className="max-w-[410px] max-md:text-start font-[200] text-[20px] mt-[27px] text-white">
            Lorem ipsum dolor sit amet consectetur. Quis suspendisse congue id
            ac mi pretium.
          </p>
        </div>
        <div className="w-fit mt-[10%] max-md:mt-[5%] md:ml-[18%]">
          <div className="flex flex-col w-auto flex-wrap gap-[15px]">
            <h1 className="text-[22px] text-[#94D4FF] font-[200]">Company</h1>
            <div className="flex flex-wrap max-md:flex-col max-md:ml-3 gap-[30px]">
              {links.map((link, index) => {
                return (
                  <Link
                    href={`#${link.href}`}
                    key={index}
                    className="text-[20px] group font-[200] w-fitc text-white"
                  >
                    {link.text}
                    <div className="w-0 group-hover:w-[50%] transition-all duration-300 h-0.5 bg-[#94D4FF]" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex mt-[35px] gap-[30px]">
            <h1 className="text-[22px] text-[#94D4FF] font-[200]">Follow Us</h1>
            <div className="flex gap-[30px] items-center">
              <Image
                src={"/facebook.webp"}
                width={100}
                height={100}
                className="w-full cursor-pointer h-[15px]"
              />
              <Image
                src={"/x.webp"}
                width={100}
                height={100}
                className="w-full cursor-pointer h-[15px]"
              />
              <Image
                src={"/insta.webp"}
                width={100}
                height={100}
                className="w-full cursor-pointer h-[15px]"
              />
              <Image
                src={"/linkedin.webp"}
                width={100}
                height={100}
                className="w-full cursor-pointer h-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/footer.webp"}
        width={100}
        height={100}
        unoptimized
        className="w-full h-auto my-[20px]"
      />
      <div className="w-[95%] flex gap-3 justify-between mx-auto mt-[60px] text-white">
        <p className="text-[calc(8px_+_0.3vw)] leading-4 tracking-[2px] font-[200]">
          Copyright @ 2023 Duroub Logistics. All Rights Reserved
        </p>
        <p className="text-[calc(8px_+_0.2vw)] leading-4 tracking-[2px] font-[200]">
          Developed by Ziad Hatem
        </p>
      </div>
    </footer>
  );
}
