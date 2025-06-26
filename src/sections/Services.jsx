import keyboard from "../assets/keyboard.png";
import tetra from "../assets/tetra.png";
import img1 from "../assets/section1.png";
import img2 from "../assets/section2.png";
import img3 from "../assets/section3.png";
import img4 from "../assets/section4.png";
import InfiniteScroll from "../components/InfiniteScroll";

export default function Services() {
  return (
    <div className="w-[90%] my-[10vh] relative mx-auto">
      {/* <div className="absolute"></div> */}
      <p className="text-center font-medium  text-white/50 uppercase pb-14">
        [ Services ]
      </p>

      <div className="w-full flex items-center justify-between">
        <div className="w-[35%] h-[45vh] max-h-[30rem] bento-card  rounded-md p-5 pb-3">
          <div className="relative h-full">
            <h1 className="absolute text-xl top-0 left-0">Devloping Websites</h1>
            <img src={keyboard} className="w-2/3 mx-auto" alt="" />
            <p className="absolute bottom-0 left-0">
              No shortcuts. Just real tools and raw code.
            </p>
          </div>
        </div>
        <div className="w-[62%] h-[45vh] max-h-[30rem] pointer-events-none bento-card rounded-md p-5">
          <div className="relative w-full overflow-hidden h-[70vh]">
            <h1 className="absolute text-xl top-0 left-0">
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
          <p className="absolute z-30 bottom-3 bg-black/50 rounded-full left-5">
            Our websites not only look great but work great.
          </p>
        </div>
      </div>

      <div className="w-full mt-7 flex flex-row-reverse items-center justify-between">
        <div className="w-[35%] h-[45vh] max-h-[30rem] bento-card  rounded-md p-5 pb-3">
          <div className="relative h-full">
            <h1 className="absolute text-xl top-0 left-0">3D Magic</h1>
            <img src={tetra} className="w-2/3 mx-auto" alt="" />
            <p className="absolute bottom-0 left-0">
              Bringing your site to life with 3D magic.
            </p>
          </div>
        </div>
        <div className="w-[62%] h-[45vh] max-h-[30rem] pointer-events-none bento-card rounded-md p-5">
          <div className="relative w-full overflow-hidden h-[70vh]">
            <h1 className="absolute text-xl top-0 left-0">
              Built with What Others Are Still Googling.
            </h1>
          </div>
          <p className="absolute z-30 bottom-3 bg-black/50 rounded-full left-5">
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
