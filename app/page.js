import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Services from "./components/Services";
import News from "./components/News";
import Compliance from "./components/Compliance";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="h-fit !w-full overflow-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <News />
      <Compliance />
      <Contact />
    </div>
  );
}
