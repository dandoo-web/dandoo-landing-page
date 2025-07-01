import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectHover from "../components/ProjectHover";

gsap.registerPlugin(ScrollTrigger);

// Starfield component
const Stars = () => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const star = {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        animationDelay: Math.random() * 4,
        animationDuration: Math.random() * 2 + 2,
      };
      stars.push(star);
    }
    return stars;
  };

  const generateGradients = () => {
    const gradients = [];
    for (let i = 0; i < 4; i++) {
      const gradient = {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 100 + 60, // 60-160px
        opacity: Math.random() * 0.03 + 0.01, // Very light
        animationDelay: Math.random() * 8,
        animationDuration: Math.random() * 6 + 4,
      };
      gradients.push(gradient);
    }
    return gradients;
  };

  const stars = generateStars();
  const gradients = generateGradients();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gradients */}
      {gradients.map((gradient) => (
        <div
          key={`gradient-${gradient.id}`}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${gradient.left}%`,
            top: `${gradient.top}%`,
            width: `${gradient.size}px`,
            height: `${gradient.size}px`,
            background: `radial-gradient(circle, rgba(255,255,255,${gradient.opacity}) 0%, transparent 70%)`,
            animationDelay: `${gradient.animationDelay}s`,
            animationDuration: `${gradient.animationDuration}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Project = () => {
  return (
    <section
      className="mx-auto relative border-1 my-[10vh] border-zinc-800  w-[90%]"
      id="portfolio"
    >
      {/* Stars background */}
      <Stars />

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
        <p className="text-center  font-medium uppercase">[ Project ]</p>
        <div
          className={
            "absolute inset-0 " +
            " [background-size:40px_40px] " +
            " [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] " +
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          }
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>

        <ProjectHover value={true} />
      </div>
    </section>
  );
};

export default Project;
