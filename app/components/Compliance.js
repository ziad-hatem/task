import Link from "next/link";
import { links } from "../data/compliance";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center max-md:mx-[2.5%] mx-[2.5%] justify-center w-full md:pt-[120px] pt-[60px] max-md:flex-col max-md:ml-[2.5%] gap-[20px] md:gap-[100px]">
      <div>
        <h1 className="text-[calc(30px_+_2vw)] mb-[20px] md:mb-[30px] max-w-[550px] font-extralight text-white">
          Our Compliance and Regulatory
        </h1>
        <p className="text-[calc(10px_+_0.6vw)] max-md:max-w-[95vw] max-w-[500px] text-white">
          Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
          parturient phasellus aliquam. Gravida amet leo quis nam nibh.
        </p>
      </div>
      <Links />
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-6 md:w-[800px] w-full">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={"/"}
            className="h-[40px] md:h-[70px] w-fit px-[10px] md:px-[25px] text-[calc(8px_+_0.6vw)] md:text-[35px] items-center justify-center flex max-md:flex-wrap gap-[30px] text-white rounded-[10px] bg-white bg-opacity-10"
          >
            {link.name}{" "}
            <Image
              src={"/link.webp"}
              alt="arrow"
              width={100}
              height={100}
              className="h-[15px] md:h-[35px] w-[15px] md:w-[35px]"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default function Compliance() {
  return (
    <section
      id="careers"
      className="mt-[50px] xl:h-[130vh] min-h-[120vh] max-md:pb-[50px] md:mt-[100px]"
      style={{
        background: "url(/section4.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="flex flex-col justify-center items-center mt-[80px] md:mt-[15%]">
        <Image
          src={"/badge.webp"}
          unoptimized
          alt="badge"
          width={100}
          height={100}
          className="h-[80px] md:h-[100px] w-auto"
        />
        <h1 className="text-[calc(25px_+_1.5vw)] max-w-[1100px] max-md:max-w-[95vw] text-center text-white">
          Lorem ipsum dolor sit amet consectetur. Iaculis et eget nulla in at
          vulputate pellentesque a vel.
        </h1>
      </div>
    </section>
  );
}
