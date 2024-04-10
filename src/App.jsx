import "./App.css";
import { Canvas } from "@react-three/fiber";
import ExperienceComponent from "./ExperienceComponent";
import * as THREE from 'three'
function App() {
  return (
    <Canvas
    // dpr={ [1, 2]}
      // flat
      gl={
        {
          antialias: true,
          // toneMapping: THREE.CineonToneMapping
          toneMapping: THREE.ACESFilmicToneMapping,
          // outputColorSpace: THREE.SRGBColorSpace
        }
      }
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <ExperienceComponent />
    </Canvas>
  );
}

export default App;
