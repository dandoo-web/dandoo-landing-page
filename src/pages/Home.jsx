import Hero from "../sections/Hero";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import LazyComponent from "../utils/LazyComponent";

// Lazy load heavy sections
const MovText = () => import("../sections/MovText");
const About = () => import("../sections/About");
const Services = () => import("../sections/Services");
const Project = () => import("../sections/Project");
const Contact = () => import("../sections/Contact");
const Testimonials = () => import("../sections/Testimonials");
const Footer = () => import("../sections/Footer");

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
      
      <LazyComponent 
        importFunc={MovText} 
        children={{ postion: "top" }}
        fallback={<div className="h-16 bg-white/10 animate-pulse"></div>}
      />
      
      <LazyComponent 
        importFunc={About}
        fallback={<div className="h-96 bg-black/20 animate-pulse"></div>}
      />
      
      <LazyComponent 
        importFunc={MovText} 
        children={{ postion: "bottom" }}
        fallback={<div className="h-16 bg-white/10 animate-pulse"></div>}
      />
      
      <LazyComponent 
        importFunc={Services}
        fallback={<div className="h-96 bg-black/20 animate-pulse"></div>}
      />
      
      <LazyComponent 
        importFunc={Project}
        fallback={<div className="h-96 bg-black/20 animate-pulse"></div>}
      />
      
      <LazyComponent 
        importFunc={Contact}
        fallback={<div className="h-96 bg-black/20 animate-pulse"></div>}
      />
      
      <LazyComponent 
        importFunc={Testimonials}
        fallback={<div className="h-96 bg-black/20 animate-pulse"></div>}
      />
      
      {/* <LazyComponent 
        importFunc={Footer}
        fallback={<div className="h-32 bg-black/20 animate-pulse"></div>}
      /> */}
    </div>
  );
};

export default Home;
