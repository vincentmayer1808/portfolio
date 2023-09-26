import { Product } from "@/components/Product";
import React from "react";

const page = () => {
  return (
    <div className="text-center text-cyan-300 bg-sky-950">
      <div className="p-3">
      <h2 className="font-medium text-lg text-amber-300">Get more XP with a personal website!</h2>
      <p>
        From a simple landing page to a complex e-commerce, get the XP you need
        and Level Up!
      </p>
      <span>Note: that these features are only referencial. Ask me what you need and we will make things come true!</span>
      </div>
      <section>
<Product/>
      </section>
    </div>
  );
};

export default page;
