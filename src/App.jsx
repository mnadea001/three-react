import "./App.css";
import { Canvas } from "@react-three/fiber";
import ExperienceComponent from "./ExperienceComponent";
function App() {
  return (
    <Canvas
    camera={
      {
        fov: 45,
        near: 0.1, 
        far: 200,
        position: [ 3, 2, 6]
      }
    }>
      <ExperienceComponent />
    </Canvas>
  );
}

export default App;
