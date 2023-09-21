"use client";

import { Sidebar } from "flowbite-react";
import {
  HiGlobeAlt,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
// fushia : #c026d3 => fuchsia-600
// bg : #082f49 => sky-950
// cyan-300 => #67e8f9
// amber-300 => #fcd34d
const Sidenavbar = () => {
  return (
    <Sidebar aria-label="Navegation Sidebar"  className="fixed left-0 w-64 border-r h-screen transition-transform -translate-x-full sm:translate-x-0">
      <Sidebar.Logo
        href="/"
        className="border-b dark:hover:text-fuchsia-600"
        //   img="/favicon.svg"
        //   imgAlt="Flowbite logo"
      >
        <p>Vincent Mayer</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse label="Home Page" icon={HiUser}>
            <Sidebar.Item href="/#aboutMe" icon={HiChartPie}>
              <p>About Me</p>
            </Sidebar.Item>
            <Sidebar.Item href="/#projectCarousel" icon={HiViewBoards}>
              <p>My realizations</p>
            </Sidebar.Item>
            <Sidebar.Item href="/#contact" icon={HiInbox}>
              <p>Contact Me</p>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item icon={HiGlobeAlt} href="/presentation">
           <p>Get to know me better</p> 
          </Sidebar.Item>
          <Sidebar.Item icon={HiGlobeAlt} href="/products">
           <p>Get your Own Web Site</p> 
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Sidenavbar;
