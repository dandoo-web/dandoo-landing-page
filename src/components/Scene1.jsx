import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { OrbitControls, Text } from "@react-three/drei";
import { RoundedBox } from "@react-three/drei";
import { useState, useEffect } from "react";

const Scene1 = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  // Responsive values
  const titleFontSize = isMobile ? 0.4 : isTablet ? 1.0 : 1.0;
  const titlePosition1 = isMobile ? [0, 0.8, 0] : isTablet ? [0, 0.9, 0] : [0, 1, 0];
  const titlePosition2 = isMobile ? [0, 0.1, 0] : isTablet ? [0, -0.1, 0] : [0, -0.2, 0];
  
  const buttonWidth = isMobile ? 2.3 : isTablet ? 2.8 : 2.3;
  const buttonHeight = isMobile ? 0.6 : isTablet ? 0.6 : 0.6;
  const buttonPosition = isMobile ? [0, -1.2, 0] : isTablet ? [0, -1.35, 0] : [0, -1.5, 0];
  const buttonTextPosition = isMobile ? [0, -1.2, 0.1] : isTablet ? [0, -1.35, 0.1] : [0, -1.5, 0.1];
  const buttonFontSize = isMobile ? 0.2 : isTablet ? 0.22 : 0.25;

  // Camera settings for different screen sizes
  const cameraFov = isMobile ? 85 : isTablet ? 75 : 75;
  const cameraPosition = isMobile ? [0, 0, 4] : isTablet ? [0, 0, 3.5] : [0, 0, 3];

  const config1 = {
    intensity: 0,
    force: isMobile ? 3.0 : isTablet ? 3.6 : 4.3,
    distortion: isMobile ? 0.3 : isTablet ? 0.4 : 0.5,
    curl: isMobile ? 1.5 : isTablet ? 1.7 : 1.9,
    swirl: isMobile ? 5 : isTablet ? 6 : 7,
    blend: isMobile ? 8 : isTablet ? 9 : 10,
    rainbow: true,
    backgroundColor: "#000000",
  };

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
      camera={{
        fov: cameraFov,
        position: cameraPosition,
      }}
      dpr={2} // Lower pixel ratio on mobile for better performance
    >
      <ambientLight intensity={5} />

      <Text 
        position={titlePosition1}
        font="/fonts/Cal_Sans/cal-sans.ttf"
        fontSize={titleFontSize}
        color="white"
        anchorX="center"
        
        >
        We Don't Do Pretty.
      </Text>

      <Text
        position={titlePosition2} 
        font="/fonts/Cal_Sans/cal-sans.ttf"
        fontSize={titleFontSize}
        color="white"
        anchorX="center"
      >
        We Do Legendary.
      </Text>
      {/* <mesh position={[0, -1.4, 0]}>
        <planeGeometry args={[3, 0.7]} />
      </mesh> */}

      <RoundedBox
        args={[buttonWidth, buttonHeight, 0]} 
        radius={0.3} 
        smoothness={10} 
        rotation={[-0.3, 0, 0]}
        position={buttonPosition}
      >
        <meshStandardMaterial color="white" />
      </RoundedBox>
      <Text
        position={buttonTextPosition} 
        // font="/fonts/Cal_Sans.ttf"
        font="/fonts/Cal_Sans/cal-sans.ttf"
        fontSize={buttonFontSize}
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
