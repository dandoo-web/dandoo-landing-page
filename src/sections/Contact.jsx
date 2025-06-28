import React, { useState } from "react";
import { Canvas, useThree } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import Earth from '../components/Earth';

// Responsive Earth component
const ResponsiveEarth = ({ navigate, setMousePosition, setIsHovered }) => {
  const { viewport } = useThree();
  
  // Calculate responsive scale based on viewport (reduced sizes)
  const scale = viewport.width < 4 ? 1 : viewport.width < 6 ? 1.5 : viewport.width < 8 ? 2 : 2.5;

  console.log('ResponsiveEarth scale:', scale, 'viewport:', viewport.width);

  return (
    <Earth 
      scale={scale}
      position={[0, 0, 0]}
      onClick={() => navigate('/contact')}
      onPointerOver={(e) => {
        setIsHovered(true);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
      onPointerOut={() => {
        setIsHovered(false);
      }}
      onPointerMove={(e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
    />
  );
};

// Scene component
const Scene = ({ navigate, setMousePosition, setIsHovered }) => {
  const { camera, viewport } = useThree();
  
  React.useEffect(() => {
    // Adjust camera position based on viewport (adjusted for smaller Earth)
    const cameraZ = viewport.width < 4 ? 8 : viewport.width < 6 ? 7 : viewport.width < 8 ? 6 : 5;
    camera.position.set(0, 0, cameraZ);
    camera.lookAt(0, 0, 0);
  }, [camera, viewport]);

  return (
    <>
      {/* Orbit Controls - Rotation only */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        rotateSpeed={0.5}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        intensity={1} 
        position={[5, 5, 5]} 
        color={0xffffff} 
      />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      {/* Responsive Earth */}
      <ResponsiveEarth 
        navigate={navigate} 
        setMousePosition={setMousePosition}
        setIsHovered={setIsHovered}
      />
      
      {/* Stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={viewport.width < 6 ? 800 : 900} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5}
      />
    </>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ minHeight: '100vh' }}>
      <p className="text-center font-medium pb-5 relative z-10 text-white">[ CONTACT US ]</p>
      
      {/* Hover message following cursor */}
      {isHovered && (
        <div 
          className="fixed z-50 pointer-events-none bg-black bg-opacity-80 text-white px-3 py-2 rounded-lg text-sm font-medium transform -translate-x-1/2 -translate-y-full"
          style={{
            left: mousePosition.x + 'px',
            top: mousePosition.y - 10 + 'px',
          }}
        >
          Click to contact
        </div>
      )}
      
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 6000 }}
        style={{ background: '#000000' }}
      >
        <Scene 
          navigate={navigate} 
          setMousePosition={setMousePosition}
          setIsHovered={setIsHovered}
        />
      </Canvas>
    </div>
  );
};

export default Contact;