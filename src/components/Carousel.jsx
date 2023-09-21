import React from "react";
import { GitHubIcon } from "./Icons";

export const Carousel = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data_carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className=" duration-700 ease-in-out" data_carousel_item>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <a href="#">
              <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This is what you need to know about this project
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GitHub repositorie
                  <GitHubIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        {/* <!-- Item 2 --> */}
        <div className=" duration-700 ease-in-out" data_carousel_item>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <a href="#">
              <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project 2
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This is what you need to know about this project
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GitHub repositorie
                  <GitHubIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        {/* <!-- Item 3 --> */}
        <div className=" duration-700 ease-in-out" data_carousel_item>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <a href="#">
              <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project 3
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This is what you need to know about this project
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GitHub repositorie
                  <GitHubIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        {/* <!-- Item 4 --> */}
        <div className=" duration-700 ease-in-out" data_carousel_item>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <a href="#">
              <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project 4
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This is what you need to know about this project
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GitHub repositorie
                  <GitHubIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        {/* <!-- Item 5 --> */}
        <div className="duration-700 ease-in-out" data_carousel_item>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <a href="#">
              <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project 5
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This is what you need to know about this project
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GitHub repositorie
                  <GitHubIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria_current="true"
          aria_label="Slide 1"
          data_carousel_slide_to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria_current="false"
          aria_label="Slide 2"
          data_carousel_slide_to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria_current="false"
          aria_label="Slide 3"
          data_carousel_slide_to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria_current="false"
          aria_label="Slide 4"
          data_carousel_slide_to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria_current="false"
          aria_label="Slide 5"
          data_carousel_slide_to="4"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data_carousel_prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria_hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke_linecap="round"
              stroke_linejoin="round"
              stroke_width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="text-white">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data_carousel_next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria_hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke_linecap="round"
              stroke_linejoin="round"
              stroke_width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="text-white">Next</span>
        </span>
      </button>
    </div>
  );
};
