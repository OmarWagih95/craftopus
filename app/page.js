import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import About from "./_components/About";
import LatestProjects from "./_components/LatestProjects";
import Feedback from "./_components/Feedback";

export default function Home() {
  return (
   <div className="overflow-x-hidden"><Hero/>
   <ProductSection/>
   <LatestProjects/>
   <About/>
   <Feedback/>
   </div>
  );
}
