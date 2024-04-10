export default function ExperienceComponent() {
return <>

<mesh position-x={-2} rotation-x={Math.PI * 0.23}>
    <sphereGeometry scale={1.5}/>
    <meshBasicMaterial color="orange" />
  </mesh>

  <mesh scale={1.5} position-x={2} rotation-y={Math.PI * 0.25}>
    <boxGeometry scale={1.5}/>
    <meshBasicMaterial color="mediumpurple" />
  </mesh>

  <mesh scale={10} position-y={-1} rotation-x={- Math.PI * 0.5}>
    <planeGeometry/>
    <meshBasicMaterial color="greenyellow" />
  </mesh>
</>
}