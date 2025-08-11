import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "../pages/ContactForm";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);
  const containerRef = useRef(null);

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for different elements
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.8, 0.3]
  );
  const scaleTransform = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  // Create floating particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 4,
  }));

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      quote:
        "Dandoo transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations. The website they delivered was not just beautiful but also incredibly functional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "DesignStudio Pro",
      role: "Creative Director",
      quote:
        "Working with Dandoo was an absolute pleasure. They understood our vision perfectly and brought it to life with stunning animations and seamless user experience. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "EcoGreen Solutions",
      role: "Marketing Manager",
      quote:
        "The team at Dandoo delivered beyond our wildest dreams. Our new website increased conversions by 300% in just two months. Their expertise in modern web development is unmatched.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      company: "FinanceFirst",
      role: "Founder",
      quote:
        "Professional, creative, and reliable. Dandoo built us a website that perfectly represents our brand. The project was completed on time and within budget. Exceptional service!",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "InnovateLab",
      role: "Product Manager",
      quote:
        "Dandoo's innovative approach to web design helped us stand out in a competitive market. The website is fast, beautiful, and exactly what we needed to showcase our products.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-rotation effect
  useEffect(() => {
    const startAutoRotation = () => {
      intervalRef.current = setInterval(() => {
        if (!isHoveredRef.current) {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }
      }, 8000);
    };

    startAutoRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  // Handle mouse events to pause auto-rotation
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  // Handle contact form
  const handleStartProject = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 justify-center">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-base sm:text-lg ${
              index < rating ? "text-white" : "text-white/30"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black py-12 md:py-20 overflow-hidden"
      style={{
        y: yTransform,
        opacity: opacityTransform,
        scale: scaleTransform,
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-center font-medium  text-white uppercase">
            [ Testimonials ]
          </p>
        </motion.div>
        {/* Main Testimonial Display */}
        <motion.div
          className="max-w-4xl mx-auto mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden h-80 sm:h-96 md:h-[28rem] flex flex-col"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={currentTestimonial}
              initial={{ opacity: 0, rotateY: 10 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Quote */}
                <div className="flex-1 mb-4 md:mb-6 flex flex-col">
                  <span className="text-white/40 text-3xl md:text-5xl leading-none font-serif self-start">
                    "
                  </span>
                  <div className="flex-1 flex items-center">
                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light px-2 md:px-4 text-center overflow-hidden">
                      {testimonials[currentTestimonial].quote}
                    </p>
                  </div>
                  <span className="text-white/40 text-3xl md:text-5xl leading-none font-serif self-end">
                    "
                  </span>
                </div>

                {/* Rating */}
                <div className="mb-3 md:mb-4">
                  <StarRating rating={testimonials[currentTestimonial].rating} />
                </div>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-auto">
                  {/* Client Details */}
                  <div className="flex-1 text-center">
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className="text-lg sm:text-xl">
                        {testimonials[currentTestimonial].companyLogo}
                      </span>
                      <span className="text-white/60 text-xs">
                        {testimonials[currentTestimonial].company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 -translate-x-full w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-20"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform">
                ←
              </span>
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 translate-x-full w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-20"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform">
                →
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          className="flex justify-center gap-2 sm:gap-3 mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 md:mt-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-3 md:mb-4 calsans-font leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Join Our Success Stories?
            </motion.h3>
            <motion.p
              className="text-white/70 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Let's create something amazing together and make your project the next
              success story.
            </motion.p>
            <motion.button
              onClick={handleStartProject}
              className="bg-white text-black
               px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              // className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm} />

      {/* Spacer to create scroll trigger for footer */}
      <div className="h-20"></div>
    </motion.div>
  );
};

export default Testimonials;
