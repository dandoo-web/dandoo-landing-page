import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerRef = useRef(null);
  
  // Track when footer comes into view
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });
  
  // Footer will slide up from behind as it comes into view
  const footerY = useTransform(scrollYProgress, [0, 0.8, 1], [200, 0, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const footerScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 1]);
  
  return (
    <motion.div 
      ref={footerRef}
      className='bg-white w-full py-10 text-black text-center shadow-2xl'
      style={{ 
        y: footerY,
        opacity: footerOpacity,
        scale: footerScale
      }}
      initial={{ y: 200, opacity: 0, scale: 0.9 }}
    >
        <motion.p 
          className='font-medium'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          [find us online]
        </motion.p>
        <motion.p 
          className='anton-font text-6xl md:text-7xl lg:text-8xl'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          @DANDOO
        </motion.p>
        <div className='flex'>
          <div className='flex w-full py-2 justify-evenly'>
            <motion.div 
              className='flex flex-row py-2 gap-2 scale-100 md:scale-150'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <FaLinkedin className='cursor-pointer' />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <FaInstagram className='cursor-pointer' />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <FaSquareXTwitter className='cursor-pointer' />
              </motion.div>
            </motion.div>
            <motion.div 
              className='flex flex-row'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className='text-base md:text-xl font-bold'> Terms | Policy | 2025 </p>
            </motion.div>
          </div>
        </div>
    </motion.div>
  )
}

export default Footer
