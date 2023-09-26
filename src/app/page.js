import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import DefaultCarousel from "@/components/DefaultCarousel";
import Image from "next/image";
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="bg-sky-950 text-center">
    
          <section id="aboutMe" className="p-2">
            <About />
          </section>
          <section id="projectCarousel" className="p-2">
            <DefaultCarousel />
          </section>
          <section id="contact" className="p-2">
            <Contact />
          </section>
       
      </main>
    </>
  );
}
