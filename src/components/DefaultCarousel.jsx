"use client";

import { Carousel } from "flowbite-react";
import { GitHubIcon } from "./Icons";
import Link from "next/link";

const DefaultCarousel = () => {
  return (
    <div className="w-full relative">
      <h3 className="text-center text-xl text-amber-300">My Productions</h3>
      <Carousel className="relative" >
        <div className="flex h-full items-center justify-center bg-sky-950 m-2">
          <div className="p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {/* shadow-[35px_35px_35px_35px_rgb(192,38,211)] shadow-2xl shadow-fuchsia-600*/}

            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/PsicologialosRios.png"
                alt="website shot"
              />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              E-commerce for Psicología los Rios
            </h5>
            <p className="mb-3 font-normal ">
              This is a regular E-commerce made with React and Express
            </p>
            <Link href="https://psicologialosrios.netlify.app/" target="_blank">
              psicologialosrios.netlify.app
            </Link>
            <Link
              href="https://github.com/vincentmayer1808"
              className="flex items-center p-2 w-auto font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300"
              target="_blank"
            >
              GitHub repositorie
              <div className="h-8 w-8">
                <GitHubIcon />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-sky-950 my-2">
          slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-sky-950 my-2">
          slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-sky-950 my-2">
          slide 4
        </div>
      </Carousel>
    </div>
  );
};

export default DefaultCarousel;
