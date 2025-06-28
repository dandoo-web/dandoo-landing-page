import Hero from "../sections/Hero";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import MovText from "../sections/MovText";
import About from "../sections/About";
import Services from "../sections/Services";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={40} color="white" />
      </motion.div>
      <MovText postion={"top"} />
      <About />
      <MovText postion={"bottom"} />
      <Services />
      {/* <MovText postion={"bottom"} /> */}
      <Project />
      <Contact />
      <Testimonials />
    </div>
  );
};

export default Home;
