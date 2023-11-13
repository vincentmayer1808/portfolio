import React from "react";
import"animate.css"
import { Budget } from "./Budget";

export const Product = () => {
  return (
    <div className="flex justify-center align-center flex-wrap">
      <div className="flex-col  justify-center  border-4 border-amber-300 p-5 m-5 rounded-lg hover:shadow-2xl hover:shadow-amber-300 hover:bg-sky-900 hover:text-white hover:scale-105 animate__animated animate__fadeInLeft">
        <h3 className="font-medium text-lg text-amber-300">
          BUSINESS LANDING LEVEL
        </h3>
        <div className="grid grid-cols-3 border-2 border-cyan-300">
          <div className="border-b-2 border-r-2 border-cyan-300">
            <p className="">BONUS POINTS</p>
          </div>
          <div className="col-span-2 border-b-2 border-cyan-300 ">
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Single Web Page</li>
              <li>Contact Form</li>
              <li>Products Overview</li>
              <li>Business Information</li>
            </ul>
          </div>
          <div className="border-r-2 border-cyan-300">
            <p>SKLLS BOOST</p>
          </div>
          <div className="col-span-2 ">
            <p>
              At this level, your business gets a personal page where the world
              can see you and get in touch with you!
            </p>
          </div>
        </div>
        <Budget/> 
      </div>
      <div className="flex-col justify-center align-center border-4 border-amber-300 p-5 m-5 rounded-lg hover:bg-sky-900 hover:text-white hover:shadow-2xl hover:shadow-amber-300 hover:scale-105 animate__animated animate__fadeInRight">
        <h3 className="font-medium text-lg text-amber-300">MULTIPLE PAGES LEVEL</h3>
        <div className="grid grid-cols-3 border-2 border-cyan-300">
          <div className="border-b-2 border-r-2 border-cyan-300">
            <p>BONUS POINTS</p>
          </div>
          <div className="col-span-2 border-b-2 border-cyan-300">
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Full Catalogue</li>
              <li>Users Management</li>
              <li>Multiple Pages with Navegation Links</li>
              <li>Business Information and Contact Form</li>
            </ul>
          </div>
          <div className="border-r-2 border-cyan-300">
            <p>SKLLS BOOST</p>
          </div>
          <div className="col-span-2">
            <p>
              Mid-Level, your business will be able to reach more public by
              letting your clients see your full catalogue with user session and
              contact form!
            </p>
          </div>
        </div>
        <Budget/> 
      </div>
      <div className="flex-col justify-center align-center hover:text-white hover:bg-sky-900 border-4 border-amber-300 p-5 m-5 rounded-lg hover:shadow-2xl hover:shadow-amber-300 hover:scale-105 animate__animated animate__fadeInLeft">
        <h3 className="font-medium text-lg text-amber-300">E-COMMERCE LEVEL</h3>
        <div className="grid grid-cols-3 border-2 border-cyan-300">
          <div className="border-b-2 border-r-2 border-cyan-300">
            <p>BONUS POINTS</p>
          </div>
          <div className="col-span-2 border-b-2 border-cyan-300">
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Payment Management</li>
              <li>Clients Reviews</li>
              <li>Shopping Cart</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="border-r-2 border-cyan-300">
            <p>SKLLS BOOST</p>
          </div>
          <div className="col-span-2">
            <p>
              This Ultimate Level let your business positioned in search and let
              your clients see your products, buy them and let them leave their
              reviews!
            </p>
          </div>
        </div>
        <Budget/> 
      </div>
    </div>
  );
};
