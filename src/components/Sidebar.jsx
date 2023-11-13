"use client";


import { HiGlobeAlt, HiHome, HiUser } from "react-icons/hi";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Budget } from "./Budget";

export const Sidenavbar = () => {

  const showSidebar = (e) => {
    e.preventDefault()
    const aside = document.getElementById("asideBar")
    aside.classList.remove("hidden")
  }
  const removeSidebar = (e) => {
    e.preventDefault()
    const aside = document.getElementById("asideBar")
    aside.classList.add("hidden")
  }

  return (
    <>
      <button
        type="button"
        className="fixed inline-flex items-center z-40 p-2 mt-2 ml-3 text-sm text-amber-300 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        onClick={showSidebar}
      >
        <svg
          className="w-6 h-6"
          aria_hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="asideBar"
        className="bg-sky-950 fixed z-40 left-0 w-64 border-r-2 border-amber-300 h-screen text-cyan-300 hidden sm:block"
      >
        <div
          className=" bg-sky-950 border-b-2 border-amber-300 text-cyan-300 flex justify-center"
        >
          <h1 className="hover:text-fuchsia-600 mb-2 text-xl text-center p-2 hidden sm:block">VINCENT MAYER</h1>
          <button onClick={removeSidebar} className="hover:text-fuchsia-600 mb-2 text-xl text-center p-2 sm:hidden">CLOSE</button>
        </div>
        <ul className=" py-10 border-b-2 border-amber-300 text-cyan-300 flex flex-col gap-5 text-lg">
          <a href="/" className="flex items-center justify-evenly hover:text-fuchsia-600">
            <HiHome/>
            <li>
              Home
            </li>
          </a>
          <a href="/presentation" className="flex items-center justify-evenly hover:text-fuchsia-600">
            <HiUser/>
            <li>
              Know me Better
            </li>
          </a>
          <a href="/products" className="flex items-center justify-evenly hover:text-fuchsia-600">
            <HiGlobeAlt />
            <li>
              Get your own website
            </li>
          </a>
        </ul>
        <div className="py-5 flex flex-col gap-5">
          <Contact />
          <Budget />
        </div>
      </aside>
    
      <Footer />
    </>
  );
};
