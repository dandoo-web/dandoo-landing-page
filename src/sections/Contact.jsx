import React, { useEffect, useRef } from "react";
import * as THREE from 'three';

const Contact = () => {
  const mountRef = useRef(null);
  const textMeshesRef = useRef([]);

  useEffect(() => {
    if (!mountRef.current) return;
    
    const mountElement = mountRef.current;

    // Get container dimensions for responsive sizing
    const getContainerSize = () => ({
      width: mountElement.clientWidth,
      height: mountElement.clientHeight
    });

    const { width, height } = getContainerSize();

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    mountElement.appendChild(renderer.domElement);

    // Create Saturn sphere - responsive sizing
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    
    const sphereRadius = isMobile ? 2 : isTablet ? 2.5 : 3;
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xdddddd,
      shininess: 100,
      specular: 0x222222
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create text ring - responsive sizing
    const textMeshes = [];
    const baseText = "LET'S ROCK! ★ ";
    const repetitions = isMobile ? 2 : 3;
    const text = baseText.repeat(repetitions);
    const ringRadius = isMobile ? 4 : isTablet ? 5 : 5.5; // Reduced from 7
    const totalLetters = text.length;

    // Helper function to calculate position
    const calculatePosition = (angle) => ({
      x: Math.cos(angle) * ringRadius,
      y: Math.sin(angle) * ringRadius * 0.3, // Flattened for ring effect
      z: Math.sin(angle) * ringRadius
    });

    // Create canvas for text texture - responsive sizing
    const createTextTexture = (char) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 128;
      canvas.height = 128;
      
      context.fillStyle = '#C0C0C0';
      const fontSize = isMobile ? 60 : 80;
      context.font = `bold ${fontSize}px Arial`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(char, 64, 64);
      
      return new THREE.CanvasTexture(canvas);
    };

    for (let i = 0; i < totalLetters; i++) {
      const char = text[i];
      if (char === ' ') continue;
      
      const angle = (i / totalLetters) * Math.PI * 2;
      
      // Create text mesh - responsive sizing
      const textSize = isMobile ? 0.8 : isTablet ? 1 : 1.2;
      const textGeometry = new THREE.PlaneGeometry(textSize, textSize);
      const textTexture = createTextTexture(char);
      const textMaterial = new THREE.MeshBasicMaterial({
        map: textTexture,
        transparent: true,
        side: THREE.DoubleSide
      });
      
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      
      // Position in ring formation with tilt
      const position = calculatePosition(angle);
      textMesh.position.set(position.x, position.y, position.z);
      textMesh.lookAt(0, 0, 0); // Face the center
      
      scene.add(textMesh);
      textMeshes.push({ mesh: textMesh, angle: angle });
    }
    
    textMeshesRef.current = textMeshes;

    // Position camera - responsive positioning
    const cameraZ = isMobile ? 10 : isTablet ? 9 : 8;
    const cameraY = isMobile ? 1 : 2;
    camera.position.set(0, cameraY, cameraZ);
    camera.lookAt(0, 0, 0);

    // Stars background - responsive count
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = isMobile ? 100 : 200;
    const starsPositions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i++) {
      starsPositions[i] = (Math.random() - 0.5) * 200;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the entire text ring
      textMeshesRef.current.forEach((textObj) => {
        const time = Date.now() * 0.001;
        const newAngle = textObj.angle + time * 0.5;
        
        const position = calculatePosition(newAngle);
        textObj.mesh.position.set(position.x, position.y, position.z);
        textObj.mesh.lookAt(0, 0, 0);
      });
      
      // Gentle sphere rotation
      sphere.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      const newSize = getContainerSize();
      camera.aspect = newSize.width / newSize.height;
      camera.updateProjectionMatrix();
      renderer.setSize(newSize.width, newSize.height);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-screen relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    />
  );
};

export default Contact;