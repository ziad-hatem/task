import Image from "next/image";

const Header = () => {
  return (
    <header className="w-[95%] mt-[50px] lg:mt-[150px] flex md:flex-row flex-col max-md:gap-[20px] justify-between items-end mx-auto">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[calc(30px_+_1.5vw)] font-[200]">Latest News</h1>
        <p className="text-[calc(8px_+_0.6vw)] max-w-[600px]">
          Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
          parturient phasellus aliquam. Gravida amet leo quis nam nibh.
        </p>
      </div>
      <button className="text-[calc(8px_+_1vw)] group text-black font-[500] flex items-center gap-[10px]">
        All News{" "}
        <div className="w-[35px] h-[35px] flex items-center relative duration-300 !transition-all justify-center border rounded-full border-[#002B87] group-hover:translate-x-[10px]">
          <Image
            src={"/arrow2.webp"}
            alt="arrow"
            width={100}
            height={100}
            className="w-auto h-[18px]"
          />
        </div>
      </button>
    </header>
  );
};

const Left = () => {
  return (
    <div className="flex-none md:w-1/2 w-full relative group overflow-hidden">
      <Image
        src={"/news.webp"}
        alt="news"
        width={100}
        unoptimized
        loading="lazy"
        height={100}
        className="w-full h-full object-cover xl:object-right rounded-2xl"
      />
      <div className="bg-[#0F0D0F] rounded-[15px] bg-opacity-70 group-hover:bg-opacity-80 transition-all duration-300 absolute top-0 left-0 w-full h-full" />
      <p className="text-[calc(10px_+_1vw)] absolute bottom-[10%] group-hover:bottom-[22%] transition-all duration-300 left-[5%] text-white max-w-[70%]">
        Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in ...
      </p>
      <p className="text-[calc(8px_+_0.6vw)] absolute bottom-[-0%] group-hover:bottom-[10%] transition-all opacity-0 !duration-300 group-hover:opacity-100  left-[5%] text-white max-w-[70%]">
        Lorem ipsum dolor sit amet consectetur. Libero velit tristique porta
        at...
      </p>
      <div className="flex items-center justify-center absolute top-[10%] left-[5%]">
        <Image
          src={"/clippath.webp"}
          alt="clippath"
          width={100}
          unoptimized
          loading="lazy"
          height={100}
          className="w-auto h-[25px] sm:h-[48px]"
        />
        <p className="text-[9px] sm:text-[18px] text-white absolute">
          09 May 2023
        </p>
      </div>
      <div className="max-md:w-[60px] max-md:h-[60px] h-[80px] w-[80px] flex items-center absolute top-[8%] transition-all duration-300 group-hover:right-[6%] right-[-20%] justify-center border-[2px] rounded-full border-[#94D4FF]">
        <Image
          src={"/arrow.webp"}
          alt="arrow"
          width={800}
          unoptimized
          height={800}
          className="!w-auto max-md:!h-[30px] !h-[40px]"
        />
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="flex-1 w-auto flex flex-col max-md:gap-[20px] justify-between">
      <NewBox />
      <NewBox />
      <NewBox />
    </div>
  );
};

const NewBox = () => {
  return (
    <div className="w-full min-h-fit overflow-hidden rounded-[16px] bg-[#F2F4F9] flex max-md:flex-col justify-between items-center max-md:py-[15px] max-md:px-[10px] md:p-[25px]">
      <div className="max-w-[700px] flex flex-col gap-1">
        <p className="!text-[#002B87] text-[calc(4px_+_0.6vw)] italic">
          09 May 2023
        </p>
        <p className="text-[calc(10px_+_0.8vw)] max-md:max-w-full max-w-[90%]">
          Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in ...
        </p>
      </div>
      <button className="text-[calc(8px_+_0.6vw)] transition-all ml-auto mr-[-30px] max-md:mt-[10px] group duration-300 flex-none w-auto hover:text-black text-[#002B87] font-[500] flex items-center gap-[5px]">
        <h1 className="group-hover:translate-x-[-40px] transition-all duration-300 group-hover:text-[calc(8px_+_1vw)]">
          Read More
        </h1>
        <div className="w-fit flex items-center justify-center ">
          <Image
            src={"/arrow2.webp"}
            alt="arrow"
            width={100}
            height={100}
            className="w-auto h-[14px] md:h-[18px] group-hover:translate-x-[-60px] duration-300 transition-all group-hover:opacity-0"
          />
        </div>

        <div className="w-[35px] h-[35px] translate-x-[60px] opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-x-[-40px] flex items-center transition-all justify-center border rounded-full border-[#002B87]">
          <Image
            src={"/arrow2.webp"}
            alt="arrow"
            width={100}
            height={100}
            className="!w-auto !h-[19px]"
          />
        </div>
      </button>
    </div>
  );
};

export default function News() {
  return (
    <div id="news">
      <Header />
      <div className="flex max-xl:flex-col mt-[20px] md:mt-[90px] gap-[20px] 2xl:gap-[40px] mx-[2.5%] lg:ml-[2.5%]">
        <Left />
        <Right />
      </div>
    </div>
  );
}
