import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../info/projectinfo.js";

const Project = () => {
  const { id } = useParams();
  const [first, setfirst] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    video: "",
    githubUrl: "",
    liveUrl: "",
  });
  console.log(id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    const el = projects.find((el) => el.id === parseInt(id));
    console.log(el);

    setfirst(el);
  }, [id]);

  return (
    <section className="bg-white py-5">
      <div className="min-h-screen border relative border-zinc-300 bg-white mx-auto w-[90%] text-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]">
        {/* Corner decorations */}
        <>
          <div className="absolute z-20 left-0 -translate-x-1/2 top-0 w-5 h-5">
            <hr className="border border-black/60 w-full" />
            <hr className="border border-black/60 w-full rotate-90" />
          </div>
          <div className="absolute z-20 left-0 -translate-x-1/2 translate-y-full bottom-0 w-5 h-5">
            <hr className="border border-black/60 w-full" />
            <hr className="border border-black/60 w-full rotate-90" />
          </div>
          <div className="absolute z-20 right-0 translate-x-1/2 top-0 w-5 h-5">
            <hr className="border border-black/60 w-full" />
            <hr className="border border-black/60 w-full rotate-90" />
          </div>
          <div className="absolute z-20 right-0 translate-x-1/2 translate-y-full bottom-0 w-5 h-5">
            <hr className="border border-black/60 w-full" />
            <hr className="border border-black/60 w-full rotate-90" />
          </div>
        </>

        <div className="p-8 md:p-12">
          {/* Project Title - Centered at Top */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center text-black calsans-font uppercase text-4xl md:text-6xl lg:text-7xl mb-12"
          >
            {first.title}
          </motion.h1>

          {/* Main Content - Video on Left, Description on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Left Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              className="flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
                Demo Video
              </h3>
              <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300">
                {first.video ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster={first.image}
                  >
                    <source src={first.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <img
                      src={first.image}
                      alt={first.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
                Project Details
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {first.description}
              </p>
            </motion.div>
          </div>

          {/* Bottom Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={first.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-black bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
            
            <a
              href={first.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-black border-2 border-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
