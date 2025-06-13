import Scene1 from "./components/Scene1";

function App() {
  return (
    <div className="w-full min-h-screen max-w-screen-2xl text-white bg-black ">
      <div className="flex justify-center items-center">
        <div className="pt-[5vh] relative border-1 pb-5 border-zinc-800 mt-[10vh] w-[90%]">
          <div className="flex justify-between items-center mb-8 w-11/12 mx-auto">
            <h1 className="text-left calsans-font text-7xl">
              Let's Make the <br /> Internet Jealous.
            </h1>
            <button className="bg-white/90 py-3 px-8 font-semibold rounded-full text-black">
              Let's Talk
            </button>
          </div>
          <div className="absolute left-0 -translate-x-1/2 top-0 w-5 h-5">
            <hr className="border w-full" />
            <hr className="border w-full rotate-90" />
          </div>
          <div className="absolute right-0 translate-x-1/2 top-0 w-5 h-5">
            <hr className="border w-full" />
            <hr className="border w-full rotate-90" />
          </div>
          <div className="w-full">
            <Scene1 />
          </div>
        </div>
      </div>
      <div className="h-screen">hello how are you doing?</div>
    </div>
  );
}

export default App;
