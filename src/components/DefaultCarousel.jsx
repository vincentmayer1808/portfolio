"use client";

import { Carousel } from "flowbite-react";
import { GitHubIcon } from "./Icons";
import Link from "next/link";

const DefaultCarousel = () => {
  return (
    <div className="w-full h-screen">
      <h3 className="text-center text-xl text-amber-300">My Productions</h3>
      <Carousel >
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/PsicologialosRios.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
              E-commerce for Psicología los Rios
            </h5>
            <p className="font-normal ">
              This is a regular E-commerce made with React and Express
            </p>
            <Link href="https://psicologialosrios.netlify.app/" target="_blank" className="hover:text-white">
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
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
              Restaurant App
            </h5>
            <p className="font-normal ">
              A React.js and Firebase project of a restaurant application, with user management, reservations and contact formularies.
            </p>
            <Link href="https://psicologialosrios.netlify.app/" target="_blank" className="hover:text-white">
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
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
             Recipe application
            </h5>
            <p className="font-normal ">
              A CRUD project with DOM management, let you create read edit and delete a recipe
            </p>
            <Link href="https://.netlify.app/" target="_blank" className="hover:text-white">
             
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
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/PsicologialosRios.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
              E-commerce for Psicología los Rios
            </h5>
            <p className="font-normal ">
              This is a regular E-commerce made with React and Express
            </p>
            <Link href="https://psicologialosrios.netlify.app/" target="_blank" className="hover:text-white">
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
      
      </Carousel>
    </div>
  );
};

export default DefaultCarousel;
