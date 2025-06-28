import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import projects from "../info/projectinfo.js";

gsap.registerPlugin(ScrollTrigger);

const ProjectHover = () => {
  const containerRef = useRef(null);
  const titlesRef = useRef([]);
  const imageRef = useRef(null); // Add ref for floating image
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    titlesRef.current.forEach((title) => {
      gsap.fromTo(
        title,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: title,
            start: "top 100%",
            end: "bottom 80%", // This changes makes the scroll vetter
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // Smoothly animate floating image position
  useEffect(() => {
    if (!hoveredProject) return;
    let animFrame;
    let lastPos = { x: mousePosition.x, y: mousePosition.y };

    const animate = () => {
      if (imageRef.current) {
        // Smoothly interpolate position
        lastPos.x += (mousePosition.x - lastPos.x) * 0.18;
        lastPos.y += (mousePosition.y - lastPos.y) * 0.18;
        gsap.to(imageRef.current, {
          x: lastPos.x + 20,
          y: lastPos.y - 150,
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
      animFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animFrame);
  }, [hoveredProject, mousePosition.x, mousePosition.y]);

  return (
    <div className="relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-black -z-10" />

      {/* Scrolling Content */}
      <div ref={containerRef} className="relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.title || index}
            className="h-[90vh] flex items-center justify-center relative"
          >
            <Link to={`/projects/${project.id}`}>
              <h2
                ref={(el) => (titlesRef.current[index] = el)}
                className="text-6xl [text-shadow:5px_5px_10px_black] md:text-8xl lg:text-9xl font-bold text-white/80 cursor-pointer transition-all duration-300 hover:text-gray-300 hover:tracking-wider"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleproject(projects.title)}
              >
                {project.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>

      {/* Floating Image on Hover */}
      {hoveredProject && (
        <div
          ref={imageRef}
          className="fixed pointer-events-none z-20 transition-all duration-300 ease-out"
          style={{
            left: 0,
            top: 0,
            transform: "translate(0, 0)",
          }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-80 h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">
                {hoveredProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectHover;
