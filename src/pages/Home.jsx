import Hero from "../sections/Hero";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid, useConfig } from "@whatisjery/react-fluid-distortion";

const Home = () => {
  const config = useConfig();

  return (
    <div>
      <Hero />
      <div className="h-[100vh] bg-amber-500 flex justify-center items-center">
        <h1 className="text-5xl">Hello World</h1>
      </div>
    </div>
  );
};

export default Home;
