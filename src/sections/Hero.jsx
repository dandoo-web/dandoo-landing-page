import Scene1 from "../components/Scene1";

const Hero = () => {
  return (
    <section className="flex justify-center border min-h-screen items-center">
      <div className="relative border-1 border-zinc-800 w-[90%]">
        <div className="absolute z-20 left-0 -translate-x-1/2 top-0 w-5 h-5">
          <hr className="border w-full" />
          <hr className="border w-full rotate-90" />
        </div>
        <div className="absolute z-20 left-0 -translate-x-1/2 translate-y-full bottom-0 w-5 h-5">
          <hr className="border w-full" />
          <hr className="border w-full rotate-90" />
        </div>
        <div className="absolute z-20 right-0 translate-x-1/2 top-0 w-5 h-5">
          <hr className="border w-full" />
          <hr className="border w-full rotate-90" />
        </div>
        <div className="absolute z-20 right-0 translate-x-1/2 translate-y-full bottom-0 w-5 h-5">
          <hr className="border w-full" />
          <hr className="border w-full rotate-90" />
        </div>

        <div className="w-full relative">
          <Scene1 />
        </div>
        {/* <div className="flex justify-between py-3 items-center w-[95%] mx-auto">
          <h1 className="text-left calsans-font text-7xl">
            Let's Make the Internet <br /> Jealous Of Your Brand.
          </h1>
          <button className="bg-white/90 py-3 px-8 font-semibold rounded-full text-black">
            Let's Talk
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
