"use client";
import Link from "next/link";
import React from "react";
import "animate.css";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Image from "next/image";

export const Presentation = () => {
  return (
    <div className="bg-sky-950 p-5 text-cyan-300">
      <div className="flex-col justify-center align-center p-3 rounded-lg ring-2 ring-amber-300 hover:shadow-xl hover:shadow-amber-300 hover:ring-4 animate__animated animate__flipInY">
        <h2 className="font-bold text-xl text-center text-amber-300">My XP</h2>
        <p className="text-left mb-2">
          As a recently graduated Wed Developer Full Stack, I discovered a
          personal passion for coding that motivates me to learn more about
          programming web applications. I like to design special features and
          otpimized personal utilies so the application is reliable and easy to
          use.
        </p>
        <div className="flex items-center mb-2 ">
          <div className="w-1/3 flex justify-center items-center shrink-0">
            <Image
              src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181472/fotopersonal_kq9txx.jpg"
              alt="photo of me"
              className="max-h-48 w-auto "
              width={160}
              height={190}
            />
          </div>
          <p className="text-right w-2/3">
            Originary from Québec, Canada, I crossed the whole American
            Continent before studying in Chile what makes me a perfect French,
            English and Spanish speaker. I am a proactive person that believes
            that you need to make things happens and that communication is the
            key to make it right.
          </p>
        </div>
        <p className="text-left mb-2">
          I know everything is posible and I&#8217;m ready to prove it. If I don&#8217;t
          know, I learn it and if it looks like a far away dream, I make it
          reality! You want to take your business at the next Web Level? I&#8217;m
          here to help!
        </p>
        <div className="flex gap-2 justify-center">
          <Link
            href="/products"
            className="flex items-center justify-center p-2 mb-2 w-40 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300 hover:scale-105"
          >
            Web Levels list
          </Link>
          <Link
            className="flex items-center justify-center p-2 mb-2 w-40 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300 hover:scale-105"
            href="/assets/docs/CVVincentMayer(en).pdf"
            download={true}
            target="_blank"
          >
            Download CV
          </Link>
        </div>
      </div>
      <div className="p-2 text-center">
        <h3 className=" my-2 font-bold text-xl text-amber-300">SKILLS</h3>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <div>
            <p>Languages : HTML 5, CSS 3, JavaScript</p>
            <div className="flex justify-center items-center flex-wrap gap-4">
              <div className="w-24 h-32 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181471/html_pxzoge.webp"
                  alt="html"
                  width={160}
                  height={190}
                />
              </div>
              <div className="w-24 h-32 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181470/css_ekwf2i.webp"
                  alt="css"
                  width={160}
                  height={190}
                />
              </div>
              <div className="w-24 h-32 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181476/js_pq0azh.webp"
                  alt="js"
                  width={160}
                  height={190}
                />
              </div>
            </div>
          </div>
          <div>
            <p>Platforms : Node.js, Firebase</p>
            <div className="flex justify-center items-center flex-wrap gap-4">
              <div className="w-24 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181479/node_bhfte2.webp"
                  alt="node"
                  width={160}
                  height={190}
                />
              </div>
              <div className="w-24  flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181470/firebase_ldvsw0.webp"
                  alt="firebase"
                  width={160}
                  height={190}
                />
              </div>
            </div>
          </div>
          <div>
            <p>
              Frameworks and Libraries : React.js, Next.js, Express.js,
              Bootstrap, TailwindCSS
            </p>
            <div className="flex justify-center items-center flex-wrap gap-4">
              <div className="w-24 h-28 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181470/bootstrap_brtiam.webp"
                  alt="bootstrap"
                  width={160}
                  height={190}
                />
              </div>
              <div className="w-24 h-28 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181481/react_afulxe.webp"
                  alt="react"
                  width={160}
                  height={190}
                />
              </div>
              <div className="w-24 h-28 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181478/next_luvnm8.webp"
                  alt="next"
                  width={160}
                  height={190}
                />
              </div>
              <div className="w-24 h-28 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181470/express_ha965h.webp"
                  alt="express"
                  width={160}
                  height={190}
                />
              </div>
              <div className="w-24 h-28 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181484/tailwind_jorogn.webp"
                  alt="tailwind"
                  width={160}
                  height={190}
                />
              </div>
            </div>
          </div>
          <div>
            <p>Database : MongoDB</p>
            <div className="flex justify-center items-center flex-wrap gap-4">
              <div className="w-24 h-28 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181478/mongodb_v1sl9e.webp"
                  alt="mongodb"
                  width={160}
                  height={190}
                />
              </div>
            </div>
          </div>
          <div>
            <p>Project Management : Github</p>
            <div className="flex justify-center items-center flex-wrap gap-4">
              <div className="w-24 h-28 flex justify-center items-center overflow-hidden bg-slate-200 shadow shadow-slate-200 rounded-lg hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181471/github_utdt2b.webp"
                  alt="github"
                  width={160}
                  height={190}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3">
        <h3 className="my-3 font-bold text-xl text-center text-amber-300">
          CERTIFICATIONS
        </h3>
        <ul className="flex flex-wrap justify-center items-center gap-2">
          <li className="flex hover:scale-125 justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181481/react-js-firebase-restaurant-app-sobresaliente_hd5jm7.webp"
              alt=" react badge"
              width={100}
              height={100}
            />
            <div className="flex-col ">
              <h4 className="text-lg underline decoration-amber-300">
                React.js/Firebase Restaurant App
              </h4>
              <p>Certified by : Universidad Del Desarrollo</p>
              <Link
                target="_blank"
                className="hover:text-white hover:font-semibold"
                href="https://www.credly.com/badges/53c8fb7f-da97-44c4-a210-fe3bfddcc869/public_url"
              >
                See Badge
              </Link>
            </div>
          </li>
          <li className="flex justify-center items-center hover:scale-125">
            <Image
              src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181470/api-react-js-dashboard-sobresaliente_qs3d0t.webp"
              alt="API badge"
              width={100}
              height={100}
            />
            <div className="flex-col ">
              <h4 className="text-lg underline decoration-amber-300">
                API/React.js Dashboard
              </h4>
              <p>Certified by : Universidad Del Desarrollo</p>
              <Link
                target="_blank"
                className="hover:text-white hover:font-semibold"
                href="https://www.credly.com/badges/810ae231-912d-499a-9eb7-18404d9bad8b/public_url"
              >
                See Badge
              </Link>
            </div>
          </li>
          <li className="flex justify-center items-center hover:scale-125">
            <Image
              src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181471/crud-dom-web-app-sobresaliente_ya5txr.webp"
              alt="DOM badge"
              width={100}
              height={100}
            />
            <div className="flex-col ">
              <h4 className="text-lg underline decoration-amber-300">
                CRUD/DOM Web App
              </h4>
              <p>Certified by : Universidad Del Desarrollo</p>
              <Link
                target="_blank"
                className="hover:text-white hover:font-semibold"
                href="https://www.credly.com/badges/c826ac85-8ad1-4b7e-9f79-22a18659e415/public_url"
              >
                See Badge
              </Link>
            </div>
          </li>
          <li className="flex justify-center items-center hover:scale-125">
            <Image
              src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181471/html-css-landing-page-sobresaliente_wyqxre.webp"
              alt="html/css badge"
              width={100}
              height={100}
            />
            <div className="flex-col ">
              <h4 className="text-lg underline decoration-amber-300">
                HTML/CSS Landing Page
              </h4>
              <p>Certified by : Universidad Del Desarrollo</p>
              <Link
                target="_blank"
                className="hover:text-white hover:font-semibold"
                href="https://www.credly.com/badges/6e8b245d-32 f-40c0-a51d-6698e5f02d0a/public_url"
              >
                See Badge
              </Link>
              
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className=" my-2 font-bold text-xl text-amber-300">MY CONTACT</h3>
        <p>Email : vincent.mayer.1808@gmail.com</p>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <Link
            href="https://linkedin.com/in/vincent-mayer"
            target="_blank"
            className="w-8 hover:scale-110"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/vincentmayer1808"
            target="_blank"
            className="w-8 hover:scale-110"
          >
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
