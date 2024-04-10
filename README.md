# React + Vite

npm create vite@latest [nom de votre projet]

npm install

npm run dev


# Librairies

npm install three@0.158 @react-three/fiber@8.15



# Code examples


We can change the constructor parameters by providing an array to the args attribute and follow the parameters order (radius, widthSegments, heightSegments):


<mesh scale={[3, 2, 1]}>
    <sphereGeometry args={[1.5, 32, 32]}/>
    <meshBasicMaterial color="mediumpurple" wireframe />
</mesh>

<mesh scale={2} position={[2, 0, 0]}>
    <sphereGeometry args={[1.5, 32, 32]}/>
    <meshBasicMaterial color="mediumpurple" wireframe />
</mesh>


<mesh scale={2} position-x={2}>
    <sphereGeometry args={[1.5, 32, 32]}/>
    <meshBasicMaterial color="mediumpurple" wireframe />
</mesh>


<mesh scale={1.5} position-x={2} rotation-y={Math.PI * 0.23}>
    <boxGeometry/>
    <meshBasicMaterial color="mediumpurple" wireframe />
</mesh>