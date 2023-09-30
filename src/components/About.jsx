import Link from "next/link";
import React from "react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Image from "next/image";

export const About = () => {
  return (
    <>
    <div className="h-screen">
        <h1 className=" m-2 text-5xl text-center text-amber-300 font-bold">
          Elevate your business to the Web Level!
        </h1>
      <div className="p-6 text-center max-w-md m-auto overflow-hidden md:max-w-2xl">
        <div className="md:flex-row flex flex-col items-center justify-center rounded-lg border-2 border-amber-300 hover:shadow-2xl hover:shadow-amber-300 p-2 text-cyan-300">
          <div className="sm:shrink-0">
          <img src="../assets/images/cyberpunkDeveloper.jpg" alt="card image" className="h-48 w-auto md:h-full md:w-48"/>
          {/* <Image src={"https://res.cloudinary.com/dvowvfxfi/image/upload/v1695472313/cyberpunkDeveloper_tzhuas.jpg"} alt="cyberpunk developer" width={100px} height={100px}/> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2" >
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-4xl font-bold">Vincent Mayer</h2>
              <p>Web Developer - Full Stack</p>
              <p>Taking small businesses to the Web Level!</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Link
                href="/presentation"
                className="flex items-center px-3 py-2 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:shadow-amber-300 hover:ring-2 hover:ring-amber-300 hover:shadow-xl hover:scale-105"
              >
                My profile
              </Link>
              <a href="https://linkedin.com/in/vincent-mayer" target="_blank" className="w-8 hover:scale-110">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/vincentmayer1808" target="_blank" className="w-8 hover:scale-110">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
