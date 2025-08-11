import keyboard from "../assets/keyboard.png";
import model from "../assets/3dmodel.png";
import img1 from "../assets/section1.png";
import img2 from "../assets/section2.png";
import img3 from "../assets/section3.png";
import img4 from "../assets/section4.png";
import InfiniteScroll from "../components/InfiniteScroll";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Stars Background Component
function Stars() {
  const starsRef = useRef();

  useEffect(() => {
    const stars = [];
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute bg-white rounded-full opacity-30';
      
      // Random sizes (very small stars)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random positions
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity for twinkling effect
      star.style.opacity = Math.random() * 0.8 + 0.2;
      
      starsRef.current.appendChild(star);
      stars.push(star);
    }

    // Animate stars with subtle twinkling
    gsap.to(stars, {
      opacity: 0.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 3,
        from: "random"
      }
    });

    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div 
      ref={starsRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
}

export default function Services() {
  const rotatingImageRef = useRef();

  useEffect(() => {
    if (rotatingImageRef.current) {
      gsap.to(rotatingImageRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
      });
    }
  }, []);

  return (
    <div className="w-[90%] my-[10vh] relative mx-auto">
      {/* <div className="absolute"></div> */}
      <p className="text-center font-medium text-white/50 uppercase pb-14">
        [ Services ]
      </p>

      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between relative z-10">
        <div className="md:w-[35%] w-11/11 mx-auto md:h-[45vh] max-h-[30rem] bento-card  rounded-md p-5 pb-3">
          <div className="relative h-full">
            <h1 className="absolute text-xl top-0 left-0">Devloping Websites</h1>
            <img src={keyboard} className="w-3/3 md:w-2/3  mx-auto" alt="" />
            <p className="absolute  bottom-0 left-0">
              No shortcuts. Just real tools and raw code.
            </p>
          </div>
        </div>
        <div className="md:w-[62%] w-11/11 md:h-[45vh] max-h-[30rem] pointer-events-none bento-card rounded-md p-5">
          <div className="relative w-full overflow-hidden h-[70vh]">
            <h1 className="absolute z-20 text-xl top-0 left-0">
              Beautiful, Functional, Effective
            </h1>
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection="right"
              autoplay={true}
              autoplaySpeed={3}
              itemMinHeight={"full"}
              autoplayDirection="down"
              pauseOnHover={false}
              negativeMargin="-45vh"
            />
          </div>
          <p className="absolute z-30 bottom-3 px-4 mx-2  justify-center bg-black/50 rounded-full left-0 md:left-5">
            Our websites not only look great but work great.
          </p>
        </div>
      </div>

      <div className="w-full mt-7 flex flex-col gap-4 md:gap-4 md:flex-row-reverse items-center justify-between relative z-10">
        <div className="md:w-[35%] w-11/11 md:h-[45vh] max-h-[30rem] bento-card  rounded-md p-5 pb-3">
          <div className="relative h-full">
            <Stars />
            <h1 className="absolute text-xl top-0 z-20 left-0">3D Magic</h1>
            {/* <img src={tetra} className="w-2/3 -translate-y-2/12 mx-auto" alt="" /> */}
            <img 
              ref={rotatingImageRef}
              src={model} 
              className="w-3/3 md:w-2/3 mx-auto relative z-10" 
              alt="" 
            />
            <p className="absolute bottom-0 left-0 z-20">
              Bringing your site to life with 3D magic.
            </p>
          </div>
        </div>

        <div className="md:w-[62%] w-11/11 md:h-[45vh] max-h-[30rem] pointer-events-none bento-card rounded-md p-5">
          <div className="relative w-full overflow-hidden flex items-center h-full">
            <h1 className="absolute  md:text-xl top-0 left-0">
              Built with What Others Are Still Googling.
            </h1>
            <div className="w-full">
              <div className="logo-div2 relative  py-5 h-full flex gap-10 items-center w-full overflow-hidden">
                <div className="bg-gradient-to-r from-black to-transparent absolute left-0 top-0 bottom-0 z-20 h-full  md:w-1/6"></div>
                <div className="bg-gradient-to-l from-black to-transparent absolute right-0 top-0 bottom-0 z-20 h-full  md:w-1/6"></div>
                <div className="logo-slide2  text-8xl items-center justify-center gap-4    md:gap-10 h-[11rem]  flex w-full">
                  <RiNextjsFill />
                  <FaReact />
                  <FaFigma />
                  <SiThreedotjs />
                  <RiTailwindCssFill />
                </div>
                <div className="logo-slide2  text-8xl items-center justify-center gap-4  md:gap-10 h-[11rem]  flex w-full">
                  <RiNextjsFill />
                  <FaReact />
                  <FaFigma />
                  <SiThreedotjs />
                  <RiTailwindCssFill />
                </div>
              </div>
            </div>
          </div>
          <p className="absolute z-30 bottom-3 bg-black/50 rounded-full mx-2 md:mx-0  left-0 px-4 md:left-4 md:right-4">
            We integrate latest designs and latest tech stacks for development.
          </p>
        </div>
      </div>
    </div>
  );
}
const items = [
  { content: <img src={img1} alt="" /> },
  { content: <img src={img2} alt="" /> },
  { content: <img src={img3} alt="" /> },
  { content: <img src={img4} alt="" /> },
];
