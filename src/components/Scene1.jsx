import { Fluid, useConfig } from "@whatisjery/react-fluid-distortion";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import Model from "./Model";
import { useRef, useState } from "react";
import ShaderPlane from "./ShaderPlane";
import { EffectComposer } from "@react-three/postprocessing";

const Scene1 = () => {
  // const config = useConfig();
  const [shape, setshape] = useState("cube");
  const cubeRef = useRef();

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / innerWidth;
    const y = (e.clientY - innerHeight / 2) / innerHeight;

    cubeRef.current.rotation.y = x * Math.PI; // Horizontal tilt
    cubeRef.current.rotation.x = y * Math.PI; // Vertical tilt
  };

  const handleClick = () => {
    setshape((prev) => {
      if (shape === "cube") {
        return "tetrahedron";
      }
      if (shape === "tetrahedron") {
        return "oct";
      }
      if (shape === "oct") {
        return "cube";
      }
    });
  };

  return (
    <Canvas
      style={{
        width: "100%",
        height: "75vh",
      }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <ambientLight intensity={5} />
      {/* <Model shape={"tetrahedron"} position={[0, 0, 1]} /> */}
      <Model shape={shape} cubeRef={cubeRef} position={[0, 0, 1]} />
      {/* <OrbitControls /> */}
      <ShaderPlane />
      {/* <EffectComposer>
        <Fluid {...config} />
      </EffectComposer> */}
    </Canvas>
  );
};

export default Scene1;
