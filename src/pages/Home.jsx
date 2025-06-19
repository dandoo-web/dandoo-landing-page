import Hero from "../sections/Hero";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import MovText from "../sections/MovText";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      {/* <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={40} color="white" />
      </motion.div> */}
      <MovText />
    </div>
  );
};

export default Home;
