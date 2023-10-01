import { About } from "@/components/About";
import DefaultCarousel from "@/components/DefaultCarousel";
import Image from "next/image";
// import Image from 'next/image'

export default function Home() {
  return (
    <>
    
            <About id="aboutMe"/>
            <DefaultCarousel id="projectCarousel" />
           
       
    </>
  );
}
