import { Product } from "@/components/Product";
import React from "react";

const page = () => {
  return (
    <div className="text-center text-cyan-300 bg-sky-950">
      <div className="p-3">
        <h2 className="font-semibold text-xl text-amber-300">
          Get to the LEVEL you need with a personal website!
        </h2>
        <p>
          From a simple landing page to a complex e-commerce, get the XP you
          need and Level Up!
        </p>
        <p>
          <span className="font-medium text-amber-300">Note : </span> these
          features are only referencial. Tell me what you need and I will make
          things come true!
        </p>
      </div>
      <section>
        <Product />
      </section>
      <div className="pb-3">
        <p className="font-semibold text-lg text-amber-300 text-center">
          Remember, everything is possible! Let&#8217;s just talk about it!
        </p>
      </div>
    </div>
  );
};

export default page;
