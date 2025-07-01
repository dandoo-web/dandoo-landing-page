import keyboard from "../assets/keyboard.png";
import model from "../assets/3dmodel.png";
import img1 from "../assets/section1.png";
import img2 from "../assets/section2.png";
import img3 from "../assets/section3.png";
import img4 from "../assets/section4.png";
import InfiniteScroll from "../components/InfiniteScroll";
import LazyImage from "../utils/LazyImage";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Services() {
  const modelImageRef = useRef(null);
  const starsContainerRef = useRef(null);

  useLayoutEffect(() => {
    if (modelImageRef.current) {
      // Create infinite rotation animation
      gsap.to(modelImageRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
      });
    }

    // Create animated stars
    if (starsContainerRef.current) {
      const stars = starsContainerRef.current.children;
      Array.from(stars).forEach((star, index) => {
        gsap.to(star, {
          y: `${gsap.utils.random(-20, 20)}px`,
          x: `${gsap.utils.random(-15, 15)}px`,
          opacity: gsap.utils.random(0.3, 1),
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2
        });
      });
    }
  }, []);

  // Generate star positions
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 20; i++) {
      stars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1
      });
    }
    return stars;
  };

  const stars = generateStars();

  return (
    <div className="w-[90%]  my-[10vh] relative mx-auto">
      {/* <div className="absolute"></div> */}
      <p className="text-center font-medium  text-white/50 uppercase pb-14">
        [ Services ]
      </p>

      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
        <div className="md:w-[35%] w-11/11 mx-auto md:h-[45vh] max-h-[30rem] bento-card  rounded-md p-5 pb-3">
          <div className="relative h-full">
            <h1 className="absolute text-xl top-0 left-0">Devloping Websites</h1>
            <LazyImage 
              src={keyboard} 
              className="w-3/3 md:w-2/3 mx-auto" 
              alt="Keyboard for web development"
              placeholder={
                <div className="w-3/3 md:w-2/3 mx-auto h-32 bg-white/10 animate-pulse rounded"></div>
              }
            />
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

      <div className="w-full mt-7 flex flex-col gap-4 md:gap-4 md:flex-row-reverse items-center justify-between">
        <div className="md:w-[35%] w-11/11 md:h-[45vh] max-h-[30rem] bento-card  rounded-md p-5 pb-3">
          <div className="relative h-full overflow-hidden">
            {/* Star Background */}
            <div 
              ref={starsContainerRef}
              className="absolute inset-0 pointer-events-none"
            >
              {stars.map((star) => (
                <div
                  key={star.id}
                  className="absolute bg-white rounded-full opacity-70"
                  style={{
                    top: star.top,
                    left: star.left,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
                  }}
                />
              ))}
            </div>
            <h1 className="absolute text-xl top-0 z-20 left-0">3D Magic</h1>
            {/* <img src={tetra} className="w-2/3 -translate-y-2/12 mx-auto" alt="" /> */}
            <div className="flex items-center justify-center h-full relative">
              <LazyImage 
              ref={modelImageRef}
              src={model} 
              className="w-3/3 md:w-2/3 mx-auto relative z-10" 
              alt="3D model representation"
              placeholder={
                <div className="w-3/3 md:w-2/3 mx-auto h-32 bg-white/10 animate-pulse rounded relative z-10"></div>
              }
            />
            </div>
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
  { content: <LazyImage src={img1} alt="Section 1 showcase" className="w-full h-full object-cover" /> },
  { content: <LazyImage src={img2} alt="Section 2 showcase" className="w-full h-full object-cover" /> },
  { content: <LazyImage src={img3} alt="Section 3 showcase" className="w-full h-full object-cover" /> },
  { content: <LazyImage src={img4} alt="Section 4 showcase" className="w-full h-full object-cover" /> },
];
