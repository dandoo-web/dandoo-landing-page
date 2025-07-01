import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-white py-10 w-full text-black text-center relative shadow-2xl backdrop-blur-sm border-t border-gray-200'>
      <p className='font-medium'>[find us online]</p>
      <p className='anton-font text-6xl md:text-7xl lg:text-8xl'>@DANDOO</p>
      <div className='flex'>
        <div className='flex w-full py-2 justify-evenly'>
          <div className='flex flex-row py-2 gap-2 scale-100 md:scale-150'>
            <FaLinkedin className='cursor-pointer hover:text-blue-600 transition-colors duration-300' />
            <FaInstagram className='cursor-pointer hover:text-pink-600 transition-colors duration-300' />
            <FaSquareXTwitter className='cursor-pointer hover:text-gray-800 transition-colors duration-300' />
          </div>
          <div className='flex flex-row'>
            <p className='text-base md:text-xl font-bold'>Terms | Policy | 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
