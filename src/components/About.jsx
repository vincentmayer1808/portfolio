import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <>
      <div className="text-center">
        {/* <img src='' alt='cyberpunk computer'/> */}
        <h1 className="text-5xl text-amber-300 font-bold">
          Elevate your business to the Web level!
        </h1>
        <h2 className="text-amber-300">Hey there, I am Vincent!</h2>
        <p>
          Time to get a personal website for your business? From a simple
          landing page to a complex e-commerce, I will make your dreams come
          true!
        </p>
        <div className="flex gap-2">
        <Link href="/products" className="bg-fuchsia-600 rounded p-2 hover:shadow-fuchsia-600">
          Take a look at what I can do
        </Link>
        <Link href="/presentation" className="bg-fuchsia-600 rounded p-2 hover:shadow-fuchsia-600">
          Take a look at my profile
        </Link>
        </div>
      </div>
    </>
  );
};
