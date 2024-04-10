import {
  PivotControls,
  OrbitControls,
  TransformControls,
  Html,
  Text,
  Float,
} from "@react-three/drei";
import { useRef } from "react";

export default function ExperienceComponent() {
  const cube = useRef();
  const sphere = useRef();
  return (
    <>
      <OrbitControls
        makeDefault
        // enableDamping={false}
      />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={1}
        axisColors={["pink", "red", "green"]}
        scale={100}
        fixed={true}
      >
        <mesh ref={sphere} position-x={-2} rotation-x={Math.PI * 0.23}>
          <sphereGeometry scale={1.5} />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphere, cube]}
          >
            There is a sphere 👍
          </Html>
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

      {/* <Html>
        Test
      </Html> */}

      <Float
        // speed={5}
        // floatIntensity={5 }
        // rotationIntensity={5}
        
      >
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I Love Jah
          {/* <meshNormalMaterial/> */}
        </Text>
      </Float>
    </>
  );
}
