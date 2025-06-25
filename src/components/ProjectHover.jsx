import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project Alpha",
    description: "A cutting-edge mobile app for e-commerce.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  },
  {
    title: "Beta Build",
    description: "A responsive website for a fintech startup.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Gamma Grid",
    description: "An interactive portfolio for a photographer.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
  },
];

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
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
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
            key={index}
            className="h-screen flex items-center justify-center relative"
          >
            <h2
              ref={(el) => (titlesRef.current[index] = el)}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white cursor-pointer transition-all duration-300 hover:text-gray-300 hover:tracking-wider"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.title}
            </h2>
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
