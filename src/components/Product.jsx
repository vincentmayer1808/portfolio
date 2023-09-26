import React from "react";

export const Product = () => {
  return (
    <div className="flex justify-center align-center flex-wrap">
      <div className="flex-col  justify-center  border-4 border-amber-300 p-5 m-5 rounded-lg hover:shadow-2xl hover:shadow-amber-300 hover:bg-sky-900 hover:text-white">
        <h3 className="font-medium text-lg text-amber-300">
          BUSINESS LANDING XP
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
              At this level, your business get a personal page where the world
              can see you and get in touch with you!
            </p>
          </div>
        </div>
        <button className="px-3 py-2 mt-2 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300">
          Level Up!
        </button>
      </div>
      <div className="flex-col justify-center align-center border-4 border-amber-300 p-5 m-5 rounded-lg hover:bg-sky-900 hover:text-white hover:shadow-2xl hover:shadow-amber-300">
        <h3 className="font-medium text-lg text-amber-300">MULTIPLE PAGES XP</h3>
        <div className="grid grid-cols-3 border-2 border-cyan-300">
          <div className="border-b-2 border-r-2 border-cyan-300">
            <p>BONUS POINTS</p>
          </div>
          <div className="col-span-2 border-b-2 border-cyan-300">
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Multiple Pages with Navegation Links</li>
              <li>Full Catalogue</li>
              <li>Users Management</li>
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
        <button className="px-3 py-2 mt-2 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300">
          Level Up!
        </button>
      </div>
      <div className="flex-col justify-center align-center hover:text-white hover:bg-sky-900 border-4 border-amber-300 p-5 m-5 rounded-lg hover:shadow-2xl hover:shadow-amber-300">
        <h3 className="font-medium text-lg text-amber-300">E-COMMERCE XP</h3>
        <div className="grid grid-cols-3 border-2 border-cyan-300">
          <div className="border-b-2 border-r-2 border-cyan-300">
            <p>BONUS POINTS</p>
          </div>
          <div className="col-span-2 border-b-2 border-cyan-300">
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li >Individual Product Pages</li>
              <li>Payment Management</li>
              <li>Client Commentaries</li>
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
        <button className="px-3 py-2 mt-2 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300">
          Level Up!
        </button>
      </div>
    </div>
  );
};
