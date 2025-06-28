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
  });
  console.log(id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    const el = projects.find((el) => el.id === parseInt(id));
    console.log(el);

    setfirst(el);
  }, []);

  return (
    <section className="bg-white py-5">
      <div className=" min-h-screen border relative border-zinc-300 bg-white mx-auto w-[90%] justify-center text-black flex flex-col text-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] ]">
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

        {/* <div className=" min-h-screen border-1 border-zinc-300 bg-white mx-auto w-[90%] justify-center text-black flex flex-col text-center pt-[2vh] "> */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center text-black  flex flex-col mt-[10vh] bg-gradient-to-b  w-full   calsans-font uppercase  items-center  text-8xl"
        >
          {first.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-6 text-lg md:text-2xl mb-8 text-black text-center"
        >
          {first.description}
        </motion.p>
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-[90%] mx-auto border"
          src={first.image}
        />
      </div>
    </section>
  );
};

export default Project;
