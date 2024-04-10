
import { useRef } from "react"
import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject'

extend({ OrbitControls })

export default function ExperienceComponent() {

    const {camera, gl} = useThree()

    const cubeRef = useRef()

    useFrame((state, delta)=> {

        cubeRef.current.rotation.y += delta   

})

return <>
<orbitControls args={[ camera, gl.domElement]}/>

<directionalLight position={[ 1, 2, 3]} intensity={ 4.5}/>
<ambientLight intensity={ 1.5}/>


  <mesh position-x={-2} rotation-x={Math.PI * 0.23}>
    <sphereGeometry scale={1.5}/>
    <meshStandardMaterial color="orange" />
  </mesh>

  <mesh ref={ cubeRef } scale={1.5} position-x={2} rotation-y={Math.PI * 0.25}>
    <boxGeometry scale={1.5}/>
    <meshStandardMaterial color="mediumpurple" />
  </mesh>

  <mesh scale={10} position-y={-1} rotation-x={- Math.PI * 0.5}>
    <planeGeometry/>
    <meshStandardMaterial color="greenyellow" />
  </mesh>


<CustomObject/>
</>
}