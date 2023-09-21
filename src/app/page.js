import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import DefaultCarousel from "@/components/DefaultCarousel";
import Image from "next/image";
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="bg-sky-950 text-center">
        <div
          className="bg-scroll ..."
          // style={background-image : url(./images/cyberpunkBG.jpg) }
        >
          <section id="aboutMe" className="h-screen">
        
            <About />
          </section>
          <section id="projectCarousel">
            <DefaultCarousel />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
}
