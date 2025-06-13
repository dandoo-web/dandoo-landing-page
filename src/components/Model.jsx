import { useControls } from "leva";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = ({ position, shape, cubeRef }) => {
  const tetraMaterialProps = {
    thickness: 1.55,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.65,
    backside: true,
  };
  const cubeMaterialProps = {
    thickness: 3,
    roughness: 0,
    transmission: 1,
    ior: 1.3,
    chromaticAberration: 0.86,
    backside: false,
  };
  // const testmaterialProps = useControls({
  //   thickness: { value: 0.5, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // });
  useFrame(() => {
    cubeRef.current.rotation.y += 0.005;
    cubeRef.current.rotation.x += 0.005;
  });
  if (shape === "tetrahedron") {
    return (
      <mesh ref={cubeRef} position={position}>
        <tetrahedronGeometry args={[1.8]} />
        <MeshTransmissionMaterial {...tetraMaterialProps} />
      </mesh>
    );
  }
  if (shape === "cube") {
    return (
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[2, 2, 2]} />
        <MeshTransmissionMaterial {...cubeMaterialProps} />
      </mesh>
    );
  }
  if (shape === "oct") {
    return (
      <mesh ref={cubeRef} position={position}>
        <octahedronGeometry args={[1.5]} />
        <MeshTransmissionMaterial {...cubeMaterialProps} />
      </mesh>
    );
  }
};

export default Model;
