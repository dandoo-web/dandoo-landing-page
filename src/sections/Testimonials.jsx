import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactForm from "../pages/ContactForm";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);

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
      }, 3000);
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
    <div className="relative w-full min-h-screen bg-black py-12 md:py-20 overflow-hidden">
      {/* Background Radial Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-48 h-48 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-40 h-40 md:w-80 md:h-80 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[600px] md:h-[600px] bg-white/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 px-4">
          <p className="text-center font-medium  text-white uppercase">[ Services ]</p>
        </div>
        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-4">
          <div className="relative">
            {/* Testimonial Card */}
            <div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden h-80 sm:h-96 md:h-[28rem] flex flex-col"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 -translate-x-full w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-20"
            >
              <span className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform">
                ←
              </span>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 translate-x-full w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-20"
            >
              <span className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12 md:mb-16 px-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20 px-4">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-3 md:mb-4 calsans-font leading-tight">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/70 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
              Let's create something amazing together and make your project the next
              success story.
            </p>
            <button
              onClick={handleStartProject}
              className="bg-white text-black
               px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm} />
    </div>
  );
};

export default Testimonials;
