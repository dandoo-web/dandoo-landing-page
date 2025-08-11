import Hero from "../sections/Hero";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import MovText from "../sections/MovText";
import About from "../sections/About";
import Services from "../sections/Services";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
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
      <Project />

      {/* <Contact /> */}
      {/* Create a relative container for the overlay effect */}
      <div className="relative">
        <div className="relative z-20 bg-black">
          <Testimonials />
        </div>
        {/* Footer with overlay effect - appears from behind testimonials */}
        <div className="relative z-10 -mt-32">
          <Footer />
        </div>
      </div>
      {/* Add some bottom padding to ensure footer is fully visible */}
      <div className="h-20 bg-transparent"></div>
    </div>
  );
};

export default Home;
