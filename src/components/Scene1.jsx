import { Fluid, useConfig } from "@whatisjery/react-fluid-distortion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { OrbitControls, Text } from "@react-three/drei";
import { RoundedBox } from "@react-three/drei";

const Scene1 = () => {
  const config1 = {
    intensity: 0,
    force: 4.3,
    distortion: 0.5,
    curl: 1.9,
    swirl: 7,
    blend: 10,
    rainbow: true,
    backgroundColor: "#000000",
  };

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
      
    >
      <ambientLight intensity={5} />
      <Text 
        position={[0, 1, 0]}
        font="/fonts/Cal_Sans/cal-sans.ttf"
        fontSize={1.2}
        color="white"
        anchorX="center"
        
      >
        We Don't Do Pretty.
      </Text>
      <Text
        position={[0, -0.2, 0]} // adjust Y position to place it below
        font="/fonts/Cal_Sans/cal-sans.ttf"
        fontSize={1.2}
        color="white"
        anchorX="center"
      >
        We Do Legendary.
      </Text>
      {/* <mesh position={[0, -1.4, 0]}>
        <planeGeometry args={[3, 0.7]} />
      </mesh> */}

      <RoundedBox
        args={[3, 0.7, 0]} // width, height, depth (make depth tiny)
        radius={0.3} // corner radius
        smoothness={10} // curve smoothness
        rotation={[-0.3, 0, 0]}
        position={[0, -1.5, 0]}
      >
        <meshStandardMaterial color="white" />
      </RoundedBox>
      <Text
        position={[0, -1.5, 0.1]} // just in front of the box face
        // font="/fonts/Cal_Sans.ttf"
        font="/fonts/Cal_Sans/cal-sans.ttf"
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Let's Talk
      </Text>

      {/* <OrbitControls /> */}
      <EffectComposer>
        <Fluid {...config1} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene1;
