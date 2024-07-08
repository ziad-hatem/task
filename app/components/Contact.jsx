import Image from "next/image";
import Link from "next/link";

const GetinTouch = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[calc(30px_+_2vw)] font-extralight lg:mb-[20px]">
        Get in Touch
      </h1>
      <p className="text-[calc(10px_+_0.6vw)] max-w-[700px] max-md:mb-[40px] mb-[60px]">
        Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
        parturient phasellus aliquam. Gravida amet leo quis nam nibh.
      </p>
      <div className="flex flex-wrap gap-11 max-w-[600px]">
        <Link
          href="tel:+966581680000"
          className="flex gap-[10px] items-center "
        >
          <Image
            src={"/Call.webp"}
            width={100}
            height={100}
            className="w-[35px] h-auto"
            unoptimized
          />
          +966 58 168 0000
        </Link>
        <Link
          href={"mailto:Customercare@duroub.com"}
          className="flex gap-[10px] items-center "
        >
          <Image
            src={"/email.webp"}
            width={100}
            height={100}
            className="w-[30px] h-auto"
            unoptimized
          />
          Customercare@duroub.com
        </Link>
        <p className="flex gap-[10px] items-center ">
          <Image
            src={"/At.webp"}
            width={100}
            height={100}
            className="w-[40px] h-auto"
            unoptimized
          />
          Business park, near to Jamjoom center, Al Hamrah dist. P.O. box: 8960,
          KSA. Jeddah 21492
        </p>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <form className="bg-[#F2F4F9] w-full md:w-[55%] md:min-h-[563px] rounded-[20px] flex flex-col gap-[24px] p-[30px] md:p-[60px]">
      <input
        type="text"
        placeholder="Full name"
        className="bg-transparent border-transparent border outline-none ring-offset-0 pb-7 text-[#002B87] !border-b-[#002B87] w-full"
      />
      <input
        type="text"
        placeholder="Email"
        className="bg-transparent border-transparent border outline-none ring-offset-0 pb-7 text-[#002B87] !border-b-[#002B87] w-full"
      />
      <input
        type="text"
        placeholder="Subject"
        className="bg-transparent border-transparent border outline-none ring-offset-0 pb-7 text-[#002B87] !border-b-[#002B87] w-full"
      />
      <input
        type="text"
        placeholder="Your message ..."
        className="bg-transparent border-transparent border outline-none ring-offset-0 pb-20 text-[#002B87] !border-b-[#002B87] w-full"
      />
      <button className="text-[25px] group mt-[20px] text-black flex items-center font-semibold gap-[10px]">
        Send{" "}
        <div className="w-[35px] h-[35px] flex group-hover:translate-x-[10px] duration-300 transition-all items-center justify-center border rounded-full border-[#002B87]">
          <Image
            src={"/arrow2.webp"}
            alt="arrow"
            width={100}
            height={100}
            className="w-auto h-[18px]"
          />
        </div>
      </button>
    </form>
  );
};

export default function Contact() {
  return (
    <div
      id="contact-us"
      className="mt-[50px] lg:mt-[100px] mx-auto flex md:flex-row flex-col gap-16 ml-[2.5%]"
    >
      <GetinTouch />
      <Form />
    </div>
  );
}
