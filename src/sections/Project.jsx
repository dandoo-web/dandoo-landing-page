import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectHover from "../components/ProjectHover";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  return (
    <section
      className="mx-auto relative border-1 my-[10vh] border-zinc-800  w-[90%]"
      id="portfolio"
    >
      {/* plus symbols */}
      <>
        <div className="absolute z-20 left-0 -translate-x-1/2 top-0 w-5 h-5">
          <hr className="border border-white/60 w-full" />
          <hr className="border border-white/60 w-full rotate-90" />
        </div>
        <div className="absolute z-20 left-0 -translate-x-1/2 translate-y-full bottom-0 w-5 h-5">
          <hr className="border border-white/60 w-full" />
          <hr className="border border-white/60 w-full rotate-90" />
        </div>
        <div className="absolute z-20 right-0 translate-x-1/2 top-0 w-5 h-5">
          <hr className="border border-white/60 w-full" />
          <hr className="border border-white/60 w-full rotate-90" />
        </div>
        <div className="absolute z-20 right-0 translate-x-1/2 translate-y-full bottom-0 w-5 h-5">
          <hr className="border border-white/60 w-full" />
          <hr className="border border-white/60 w-full rotate-90" />
        </div>
      </>

      <div className="pb-20 pt-10 px-6 md:px-16 relative ">
        <p className="text-center font-medium uppercase">[ Project ]</p>
        <div
          className={
            "absolute inset-0 " +
            " [background-size:40px_40px] " +
            " [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] " +
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
