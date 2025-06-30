import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-white py-10   text-black text-center '>
        <p className='font-medium '>[find us online]</p>
      <p className='anton-font text-8xl '>@DANDOO</p>
      <div className='flex '>

      <div className='flex  w-full    py-2  justify-evenly  '>
        <div className='flex flex-row py-2 gap-2 scale-150  '>
         <FaLinkedin className='cursor-pointer' />
         <FaInstagram className='cursor-pointer' />
         <FaSquareXTwitter className='cursor-pointer' />
        </div>
        <div className='flex flex-row '>
            <p className='text-xl font-bold'> Terms | Policy | 2025 </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
