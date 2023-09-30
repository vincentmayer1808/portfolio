"use client";
import "./sidebar.css"
import { Sidebar } from "flowbite-react";
import {
  HiGlobeAlt,
  HiChartPie,
  HiInbox,
  HiHome,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Contact } from "../Contact";
// fushia : #c026d3 => fuchsia-600
// bg : #082f49 => sky-950
// cyan-300 => #67e8f9
// amber-300 => #fcd34d
const Sidenavbar = () => {
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
  
    <Sidebar id="logo-sidebar" aria-label="logo-sidebar" className="bg-sky-950 fixed z-40 left-0 w-64 border-r-2 border-amber-300 h-screen text-cyan-300 transition-transform -translate-x-full sm:translate-x-0 ">
      <Sidebar.Logo
        href="/"
        className=" bg-sky-950 border-b-2 border-amber-300 text-cyan-300"
      >
        <p className="hover:text-fuchsia-600 mb-2">Vincent Mayer</p>
      </Sidebar.Logo>
      <Sidebar.Items >
        <Sidebar.ItemGroup className="bg-sky-950 text-cyan-300">
          <Sidebar.Collapse label="Home Page" icon={HiHome} className="hover:bg-fuchsia-600 text-cyan-300">
            <Sidebar.Item href="#aboutMe" icon={HiChartPie} className="hover:bg-fuchsia-600">
              <p className="text-cyan-300">About Me</p>
            </Sidebar.Item>
            <Sidebar.Item href="#projectCarousel" icon={HiViewBoards} className="hover:bg-fuchsia-600">
              <p className="text-cyan-300">My Productions</p>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item className="hover:bg-fuchsia-600" icon={HiUser} href="/presentation">
           <p className="text-cyan-300">Know me better</p> 
          </Sidebar.Item>
          <Sidebar.Item icon={HiGlobeAlt} href="/products" className="hover:bg-fuchsia-600">
           <p className="text-cyan-300">Get your Own Web Site</p> 
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="border-amber-300">
          
          <Contact/>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
  );
};

export default Sidenavbar;
