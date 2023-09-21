import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <button
        datadrawertarget="logo-sidebar"
        datadrawertoggle="logo-sidebar"
        aria_controls="logo-sidebar"
        type="button"
        className="fixed inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm_hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria_hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip_rule="evenodd"
            fill_rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria_label="Sidebar"
      >
        <div className="flex-col h-full px-3 py-4 overflow-y-auto bg-gray-500 dark:bg-gray-800">
          <div className="pb-3 border-b mb-2">
            <Link href="/" className="pl-2.5 mb-5 ">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white dark:hover:text-lime-500">
                Vincent Mayer
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <ul className=" space-y-5 font-medium ">
              <li>
                <a
                  href="/#aboutMe"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-lime-500 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria_hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3">About Me</span>
                </a>
              </li>
              <li>
                <a
                  href="/#projectCarousel"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition duration-75 hover:bg-gray-100 dark:hover:bg-lime-500 group"
                >
                  <svg
                    aria_hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition duration-75 hover:bg-lime-500 dark:hover:bg-lime-500 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria_hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};
