// import React, { useState,useRef,useEffect } from "react";
// import { Canvas, useThree } from '@react-three/fiber';
// import { Stars, OrbitControls } from '@react-three/drei';
// import { useNavigate } from 'react-router-dom';

// const Contact = () => {
//   const mountRef = useRef(null);
//   const textMeshesRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!mountRef.current) return;
    
//     const mountElement = mountRef.current;

//     // Get container dimensions for responsive sizing
//     const getContainerSize = () => ({
//       width: mountElement.clientWidth,
//       height: mountElement.clientHeight
//     });

//     const { width, height } = getContainerSize();

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x000000, 1);
//     mountElement.appendChild(renderer.domElement);

//     // Create Saturn sphere - responsive sizing
//     const isMobile = width < 768;
//     const isTablet = width >= 768 && width < 1024;
    
//     const sphereRadius = isMobile ? 2 : isTablet ? 2.5 : 3;
//     const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
//     const sphereMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0xdddddd,
//       shininess: 100,
//       specular: 0x222222
//     });
//     const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     scene.add(sphere);

//     // Mouse interaction setup
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     let isHovering = false;
//     const originalColor = 0xdddddd;
//     const hoverColor = 0xFFFFF0; // Golden yellow

//     // Mouse event handlers
//     const onMouseMove = (event) => {
//       const rect = mountElement.getBoundingClientRect();
//       mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//       mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObject(sphere);

//       if (intersects.length > 0) {
//         if (!isHovering) {
//           isHovering = true;
//           sphere.material.color.setHex(hoverColor);
//           mountElement.style.cursor = 'pointer';
//         }
//       } else {
//         if (isHovering) {
//           isHovering = false;
//           sphere.material.color.setHex(originalColor);
//           mountElement.style.cursor = 'default';
//         }
//       }
//     };

//     const onClick = (event) => {
//       const rect = mountElement.getBoundingClientRect();
//       mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//       mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObject(sphere);

//       if (intersects.length > 0) {
//         navigate('/contact');
//       }
//     };

//     // Add event listeners
//     mountElement.addEventListener('mousemove', onMouseMove);
//     mountElement.addEventListener('click', onClick);

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
//     scene.add(ambientLight);
    
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     // Create text ring - responsive sizing
//     const textMeshes = [];
//     const baseText = "LET'S ROCK! ★ ";
//     const repetitions = isMobile ? 2 : 3;
//     const text = baseText.repeat(repetitions);
//     const ringRadius = isMobile ? 4 : isTablet ? 5 : 5.5; // Reduced from 7
//     const totalLetters = text.length;

//     // Helper function to calculate position
//     const calculatePosition = (angle) => ({
//       x: Math.cos(angle) * ringRadius,
//       y: Math.sin(angle) * ringRadius * 0.3, // Flattened for ring effect
//       z: Math.sin(angle) * ringRadius
//     });

//     // Create canvas for text texture - responsive sizing
//     const createTextTexture = (char) => {
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');
//       canvas.width = 128;
//       canvas.height = 128;
      
//       context.fillStyle = '#C0C0C0';
//       const fontSize = isMobile ? 60 : 80;
//       context.font = `bold ${fontSize}px Arial`;
//       context.textAlign = 'center';
//       context.textBaseline = 'middle';
//       context.fillText(char, 64, 64);
      
//       return new THREE.CanvasTexture(canvas);
//     };

//     for (let i = 0; i < totalLetters; i++) {
//       const char = text[i];
//       if (char === ' ') continue;
      
//       const angle = (i / totalLetters) * Math.PI * 2;
      
//       // Create text mesh - responsive sizing
//       const textSize = isMobile ? 0.8 : isTablet ? 1 : 1.2;
//       const textGeometry = new THREE.PlaneGeometry(textSize, textSize);
//       const textTexture = createTextTexture(char);
//       const textMaterial = new THREE.MeshBasicMaterial({
//         map: textTexture,
//         transparent: true,
//         side: THREE.DoubleSide
//       });
      
//       const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      
//       // Position in ring formation with tilt
//       const position = calculatePosition(angle);
//       textMesh.position.set(position.x, position.y, position.z);
//       textMesh.lookAt(0, 0, 0); // Face the center
      
//       scene.add(textMesh);
//       textMeshes.push({ mesh: textMesh, angle: angle });
//     }
    
//     textMeshesRef.current = textMeshes;

//     // Position camera - responsive positioning
//     const cameraZ = isMobile ? 10 : isTablet ? 9 : 8;
//     const cameraY = isMobile ? 1 : 2;
//     camera.position.set(0, cameraY, cameraZ);
//     camera.lookAt(0, 0, 0);
//   }, [camera, viewport]);

//   return (
//     <>
//       {/* Orbit Controls - Rotation only */}
//       <OrbitControls 
//         enablePan={false}
//         enableZoom={false}
//         enableRotate={true}
//         rotateSpeed={0.5}
//       />
      
//       {/* Lighting */}
//       <ambientLight intensity={0.6} />
//       <directionalLight 
//         intensity={1} 
//         position={[5, 5, 5]} 
//         color={0xffffff} 
//       />
//       <pointLight position={[10, 10, 10]} intensity={0.5} />
      
//       {/* Responsive Earth */}
//       <ResponsiveEarth 
//         navigate={navigate} 
//         setMousePosition={setMousePosition}
//         setIsHovered={setIsHovered}
//       />
      
//       {/* Stars background */}
//       <Stars 
//         radius={100} 
//         depth={50} 
//         count={viewport.width < 6 ? 800 : 900} 
//         factor={4} 
//         saturation={0} 
//         fade 
//         speed={0.5}
//       />
//     </>
//   );
// };

// export default Contact;
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