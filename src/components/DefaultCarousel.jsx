"use client";

import { Carousel } from "flowbite-react";
import { GitHubIcon } from "./Icons";

const DefaultCarousel = () => {
  return (
    <div className="w-full h-96">
      <h3 className="text-center text-xl text-amber-300">My Productions</h3>
      <Carousel className="h-screen">
        <div className="flex h-full items-center justify-center bg-sky-950">
          <div className="border-4 rounded-lg border-amber-300 shadow-2xl shadow-amber-300 absolute block w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {/* shadow-[35px_35px_35px_35px_rgb(192,38,211)] shadow-2xl shadow-fuchsia-600*/}
            <div className="flex-col p-5 bg-sky-950">
              <div className="flex justify-center">
                <img
                  className="rounded-t-lg w-1/2"
                  src="./images/PsicologialosRios.png"
                  alt="website shot"
                />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-300">
                E-commerce for Psicología los Rios
              </h5>

              <p className="mb-3 font-normal text-cyan-300">
                This is a regular E-commerce made with React and Express
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:shadow-xl hover:shadow-fuchsia-600"
                >
                  GitHub repositorie
                  <GitHubIcon />
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:shadow-xl hover:shadow-fuchsia-600"
                >
                  Deployed site
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria_hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke_linecap="round"
                      stroke_linejoin="round"
                      stroke_width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-sky-950">
          slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-sky-950">
          slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-sky-950">
          slide 4
        </div>
      </Carousel>
    </div>
  );
};

export default DefaultCarousel;
