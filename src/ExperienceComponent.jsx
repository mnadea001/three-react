import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
export default function ExperienceComponent() {

    const cubeRef = useRef()

    useFrame((state, delta)=> {
cubeRef.current.rotation.y += delta   
})
return <>

<mesh position-x={-2} rotation-x={Math.PI * 0.23}>
    <sphereGeometry scale={1.5}/>
    <meshBasicMaterial color="orange" />
  </mesh>

  <mesh ref={ cubeRef } scale={1.5} position-x={2} rotation-y={Math.PI * 0.25}>
    <boxGeometry scale={1.5}/>
    <meshBasicMaterial color="mediumpurple" />
  </mesh>

  <mesh scale={10} position-y={-1} rotation-x={- Math.PI * 0.5}>
    <planeGeometry/>
    <meshBasicMaterial color="greenyellow" />
  </mesh>
</>
}