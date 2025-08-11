import Scene1 from "../components/Scene1";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start({
        height: "90vh", // or whatever the target height is
        transition: { duration: 0.5 },
      });
      await controls.start({
        width: "90%", // or whatever the target width is
        transition: { duration: 0.5 },
      });
    }

    sequence();
  }, [controls]);
  return (
    <section className="flex justify-center  min-h-screen pt-[5vh]">
      {/* canvas wrapping div */}
      <motion.div
        // onAnimationStart={() => window.scrollTo({ top: 0 })}
        initial={{ height: 0, width: 0 }}
        animate={controls}
        className="relative border-1 border-zinc-800 w-[90%]"
      >
        <div className="absolute z-20  left-0 -translate-x-1/2 top-0 w-5 h-5">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-full h-full"
        >
          <div className="w-full h-full hidden md:block ">
            <Scene1 />
          </div>
          <div className="flex md:hidden flex-col gap-5 w-full h-full items-center justify-center">
            <h1 className="calsans-font text-5xl text-center font-medium w-[95%]">
              We Don't Do Pretty. We Do Legendary.
            </h1>
            <button className="bg-white py-3 font-semibold rounded-full px-10 text-black">
              Let's Talk
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-0 text-zinc-300 translate-y-full left-0">
          <p className="pl-3 pt-2">© 2025 Dandoo.</p>
        </div>
        <div className="absolute bottom-0 text-zinc-300 translate-y-full right-0">
          <p className="pr-3 pt-2">All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
