import {
  PivotControls,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import { useRef } from "react";

export default function ExperienceComponent() {
  const cube = useRef();

  return (
    <>
      <OrbitControls
        makeDefault
        // enableDamping={false}
      />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
      anchor={[0,0,0]}
      depthTest={false}
      lineWidth={1}
      axisColors={['pink', 'red', 'green']}
      scale={100}
      fixed={true}
      >
        <mesh position-x={-2} rotation-x={Math.PI * 0.23}>
          <sphereGeometry scale={1.5} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>

      <mesh ref={cube} position-x={2} scale={1.5} rotation-y={Math.PI * 0.25}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <TransformControls
        object={cube}
        // mode="scale"
        // mode="rotate"
        mode="translate"
      />

      <mesh scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
