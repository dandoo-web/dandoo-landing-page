import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectHover from "../components/ProjectHover";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  return (
    <section
      className="w-full bg-black text-white"
      id="portfolio"
    >
      <div className="py-20 px-6 md:px-16 relative ">
        <p className="text-center font-medium uppercase pb-14">[ Project ]</p>
        <div
        className={
          "absolute inset-0 " +
          "[background-size:40px_40px] " +
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] " +
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        }
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
        <ProjectHover />
      </div>
    </section>
  );
};

export default Project;

