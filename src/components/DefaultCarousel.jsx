"use client";

import { Carousel } from "flowbite-react";
import { GitHubIcon } from "./Icons";
import Link from "next/link";

const DefaultCarousel = () => {
  return (
    <div className="w-full h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          slide 4
        </div>
        <div className="flex h-full items-center justify-center bg-sky-950 dark:bg-sky-950 dark:text-cyan-300">
          <div className="max-w-sm bg-white border border-fuchsia-600 rounded-lg shadow-fuchsia-600 dark:bg-sky-950 dark:border-fuchsia-600 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img className="rounded-t-lg" src="" alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold shadow-cyan-300 tracking-tight text-cyan-300 dark:text-cyan-300">
                E-commerce for Psicología los Rios
              </h5>

              <p className="mb-3 font-normal text-cyan-400 dark:text-cyan-300">
                This is a regular E-commerce made with React and Express
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-300 rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-300 dark:hover:bg-cyan-4000 dark:focus:ring-fuchsia-600 dark:focus:shadow-cyan-300"
                >
                  GitHub repositorie
                  <GitHubIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-600 dark:focus:ring-cyan-300"
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
          <p>slide 5</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DefaultCarousel;
