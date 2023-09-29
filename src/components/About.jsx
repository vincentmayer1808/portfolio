import Link from "next/link";
import React from "react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Image from "next/image";

export const About = () => {
  return (
    <>
        <h1 className=" m-2 text-5xl text-center text-amber-300 font-bold">
          Elevate your business to the Web Level!
        </h1>
      <div className="text-center max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div className="sm:flex items-center align-center justify-center rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 m-6 p-2 text-cyan-300 rounded-br-2xl">
          <div className="sm:shrink-0">
          <img src="../assets/images/cyberpunkDeveloper.jpg" alt="card image" className="h-48 w-auto md:h-full md:w-48"/>
          {/* <Image src={"https://res.cloudinary.com/dvowvfxfi/image/upload/v1695472313/cyberpunkDeveloper_tzhuas.jpg"} alt="cyberpunk developer" width={100px} height={100px}/> */}
          </div>
          <div className="flex-col items-center justify-center" >
            <div>
              <h2 className="text-4xl font-bold">Vincent Mayer</h2>
              <p>Web Developer - Full Stack</p>
              <p>Taking small businesses to the Web Level!</p>
            </div>

            <div className="flex items-center justify-center">
             
              <Link
                href="/presentation"
                className="flex items-center px-3 py-2 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:text-amber-300 hover:border-2 hover:border-amber-300 hover:shadow-[0_02px#fff,inset_0_02px#fff,0_05px#fcd34d,0_015px#fcd34d,0_030px#fcd34d]"
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
