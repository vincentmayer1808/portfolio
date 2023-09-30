import { About } from "@/components/About";
import DefaultCarousel from "@/components/DefaultCarousel";
import Image from "next/image";
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="bg-sky-950 text-center">
    
            <About id="aboutMe"/>
            <DefaultCarousel id="projectCarousel" />
           
       
      </div>
    </>
  );
}
