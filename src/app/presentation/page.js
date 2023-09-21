import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex">
        <img src="" alt="Personal image" />
        <div>
          <h2>Vincent Mayer</h2>
          <p>Web Developer - Full Stack</p>
          <div>
            <a href="/">
              <LinkedInIcon />
            </a>
            <a href="/">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <h3>Want to know more about me?</h3>
      <p></p>
    </div>
  );
};

export default page;
