"use client";

import { Carousel } from "flowbite-react";
import { GitHubIcon } from "./Icons";
import Link from "next/link";
import { Levelup } from "./Levelup";
import Image from "next/image";

export const DefaultCarousel = () => {
  return (
    <div className="w-full h-screen bg-sky-950 text-center">
      <h3 className="text-center text-xl text-amber-300">My Productions</h3>
      <Carousel className="bg-sky-950">
        <div>
          <div className="bg-sky-950 flex flex-col gap-2 justify-center items-center p-3 bg-sky-900 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg w-1/2"
                src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1697993530/Kinesiologie_SM_p1eqtk.webp"
                alt="website shot"
                width={300}
                height={300}
              />
            </div>
            <h4 className=" text-2xl font-bold tracking-tight">
              Landing Page for Kinesiologie SM
            </h4>
            <p className="font-normal text-white">
              This Landing Page, made for Kinesiologie SM, is entirely made with Next.js and Firebase. Enjoy my first Web App in French, all the way from the home page to the services. Further on you&#8217;ll see appear a blog and a reservation system too!
            </p>
            <Link
              href="https://kinesiologiesm.com"
              target="_blank"
              className="hover:text-white"
            >
              kinesiologiesm.com
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-sky-950 flex flex-col gap-2 justify-center items-center p-3 bg-sky-900 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg w-1/2"
                src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1695472314/PsicologialosRios_zwhpcz.png"
                alt="website shot"
                width={300}
                height={300}
              />
            </div>
            <h4 className=" text-2xl font-bold tracking-tight">
              E-commerce for Psicología los Rios
            </h4>
            <p className="font-normal text-white">
              This E-commerce, made with React and Express, offers psychologie
              services letting you see the business profile with contact
              formularie, individual product pages and cart management with
              payment options.
            </p>
            <Link
              href="https://psicologialosrios.netlify.app/"
              target="_blank"
              className="hover:text-white"
            >
              psicologialosrios.netlify.app
            </Link>
            <Link
              href="https://github.com/vincentmayer1808/Proyecto-5"
              className="flex items-center p-2 w-auto font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300 hover:scale-105"
              target="_blank"
            >
              GitHub repositorie
              <div className="h-8 w-8">
                <GitHubIcon />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-sky-950 flex flex-col gap-2 justify-center items-center p-3 bg-sky-900 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg w-1/2"
                src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181480/pronosticoClima_mckw9l.webp"
                alt="website shot"
                width={300}
                height={300}
              />
            </div>
            <h4 className=" text-2xl font-bold tracking-tight">
              Clima App API dashboard
            </h4>
            <p className="font-normal text-white">
              A group project based on API REST reading and dashboard creating
              about clima on the wanted city.
            </p>
            <Link
              href="https://meteoproject-apidashboard.netlify.app"
              target="_blank"
              className="hover:text-white"
            >
              meteoproject-apidashboard.netlify.app
            </Link>
            <Link
              href="https://github.com/vincentmayer1808/proyecto-3"
              className="flex items-center p-2 w-auto font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300 hover:scale-105"
              target="_blank"
            >
              GitHub repositorie
              <div className="h-8 w-8">
                <GitHubIcon />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex bg-sky-950 flex-col gap-2 justify-center items-center p-3 bg-sky-900 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg w-1/2"
                src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181483/restaurantReactApp_ahtw1q.webp"
                alt="website shot"
                width={300}
                height={300}
              />
            </div>
            <h4 className=" text-2xl font-bold tracking-tight">
              Restaurant App
            </h4>
            <p className="font-normal text-white">
              A React.js and Firebase project of a restaurant application, with
              user management, reservations and contact formularies.
            </p>
            <Link
              href="https://reactxpressrestaurant.netlify.app/"
              target="_blank"
              className="hover:text-white"
            >
              reactxpressrestaurant.netlify.app
            </Link>
            <Link
              href="https://github.com/vincentmayer1808/proyecto-4"
              className="hover:scale-105 flex items-center p-2 w-auto font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300"
              target="_blank"
            >
              GitHub repositorie
              <div className="h-8 w-8">
                <GitHubIcon />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-sky-950 flex flex-col gap-2 justify-center items-center p-3 bg-sky-900 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg w-1/2"
                src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181484/yourRecipeApp_ac6qqh.webp"
                alt="website shot"
                width={300}
                height={300}
              />
            </div>
            <h4 className=" text-2xl font-bold tracking-tight">
              Recipe application
            </h4>
            <p className="font-normal text-white">
              A CRUD project with DOM management, it let you create read edit
              and delete a recipe
            </p>
            <Link
              href="https://your-recipe-app-crudproject.netlify.app/"
              target="_blank"
              className="hover:text-white"
            >
              your-recipe-app-crudproject.netlify.app
            </Link>
            <Link
              href="https://github.com/vincentmayer1808/CRUD-recipeApp-proyecto2"
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
        <div>
          <div className="bg-sky-950 flex flex-col gap-2 justify-center items-center p-3 bg-sky-900 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg w-1/2"
                src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696181471/aromeDivine_soj1s6.webp"
                alt="website shot"
                width={300}
                height={300}
              />
            </div>
            <h4 className=" text-2xl font-bold tracking-tight">
              Business Landing of Arome Divine
            </h4>
            <p className="font-normal text-white">
              This simple business landing page is my first website, it does not
              count with special features but let you see the business profile
              and some products with great style
            </p>
            <Link
              href="https://aromedivine-aceiteesencial.netlify.app/index.html"
              target="_blank"
              className="hover:text-white"
            >
              aromedivine-aceiteesencial.netlify.app
            </Link>
            <Link
              href="https://github.com/vincentmayer1808/Landing-De-Negocio"
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
      <div className="flex flex-col justify-center items-center bg-sky-950 p-2 pb-6">
        <p className="font-bold text-amber-300">Get something similar</p>
        <Levelup />
      </div>
    </div>
  );
};

// export default DefaultCarousel;
