import { Product } from "@/components/Product";
import React from "react";

const page = () => {
  return (
    <div className="text-center text-cyan-300 bg-sky-950">
      <h2>Get more XP with a personal website!</h2>
      <p>
        From a simple landing page to a complex e-commerce, get the XP you need
        and Level Up!
      </p>
      <section>
<Product/>
      </section>
    </div>
  );
};

export default page;
