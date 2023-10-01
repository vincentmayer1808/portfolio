"use client";

import { Carousel } from "flowbite-react";
import { GitHubIcon } from "./Icons";
import Link from "next/link";

const DefaultCarousel = () => {
  return (
    <div className="w-full h-screen bg-sky-950 text-center">
      <h3 className="text-center text-xl text-amber-300">My Productions</h3>
      <Carousel>
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
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/pronosticoClima.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
              ClimaApp API dashboard
            </h5>
            <p className="font-normal ">
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
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/restaurantReactApp.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
              Restaurant App
            </h5>
            <p className="font-normal ">
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
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/yourRecipeApp.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
              Recipe application
            </h5>
            <p className="font-normal ">
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
        <div className=" h-full bg-sky-950 ">
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-sky-950 text-cyan-300 rounded-lg border-2 border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="../assets/images/aromeDivine.png"
                alt="website shot"
              />
            </div>
            <h5 className=" text-2xl font-bold tracking-tight">
              Business Landing of Arome Divine
            </h5>
            <p className="font-normal ">
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
    </div>
  );
};

export default DefaultCarousel;
