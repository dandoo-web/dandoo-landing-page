// import React from 'react'
// import { useState } from 'react';

// const Alpha = () => {

//    const [matchedprojects,setmatchedprojects] = useState(null);
//    const [selected,setselected ] = useState(null);

//    const handleproject = (title) =>{
//     setselected(title);
//     const found = projects.find((p)=>p.title===title);
//     setmatchedprojects(found)
//    }

//   return (
//     <div className='flex justify-center min-h-screen pt-[5vh]'>

//      {/* //FOR MATCHING THE TITLES  */}
//       {matchedprojects && (
//         <div className='text-white text-6xl '>
//           selected:{matchedprojects.title};
//           <p>{matchedprojects.title}</p>
//         </div>
//       )}
//
//      </div>
//   )
// }

// export default Alpha

import { motion, useAnimation } from "framer-motion";

const Alpha = () => {
  return (
    <div className="min-h-screen bg-white bg-cover top-1">
      <div className=" min-h-screen  bg-white w-[90%] justify-center rounded-3xl  text-black flex flex-col text-center pt-[2vh]  mx-18 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ]">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center text-black  flex flex-col mt-[10vh] bg-gradient-to-b  w-full   calsans-font uppercase  items-center  text-8xl"
        >
          PROJECT ALPHA{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-6 text-lg md:text-2xl mb-8 text-black text-center"
        >
          Revolutionizing design with performance-first thinking.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="anton-font text-center   rounded-2xl  text-2xl px-23 py-24 "
        >
          Project Alpha is a high-performance, responsive web app crafted with
          modern development practices. Built using React and Tailwind CSS, it
          emphasizes smooth UI transitions and clean design. The project
          showcases advanced routing, component reuse, and interactive frontend
          techniques.
        </motion.p>
      </div>
    </div>
  );
};

export default Alpha;
