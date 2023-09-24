import Link from "next/link";
import React from "react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Image from "next/image";

export const About = () => {
  return (
    <>
        <h1 className=" mb-2 text-5xl text-center text-amber-300 font-bold">
          Elevate your business to the Web level!
        </h1>
      <div className="text-center max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div className="sm:flex items-center justify-center border-4 border-amber-300 shadow-xl shadow-amber-300 m-6 p-2 text-cyan-300 rounded-br-2xl">
          <div className="sm:shrink-0">

          <img src="./images/cyberpunkDeveloper.jpg" alt="card image" className="h-48 w-auto md:h-full md:w-48"/>
          {/* <Image src={"https://res.cloudinary.com/dvowvfxfi/image/upload/v1695472313/cyberpunkDeveloper_tzhuas.jpg"} alt="cyberpunk developer" width={100px} height={100px}/> */}
          </div>
          <div className="flex-col items-center justify-center" >
            <div>
              <h2 className="text-4xl font-bold">Vincent Mayer</h2>
              <p>Web Developer - Full Stack</p>
              <p>Helping small businesses taking their services to the Web!</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Link
                href="/products"
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:shadow-lg hover:shadow-fuchsia-600"
              >
                What I can do
              </Link>
              <Link
                href="/presentation"
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:shadow-lg hover:shadow-fuchsia-600"
              >
                My profile
              </Link>
              <a href="https://linkedin.com/in/vincent-mayer" className="w-8">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/vincentmayer1808" className="w-8">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
