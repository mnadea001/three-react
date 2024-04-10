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


With OrbitControl you modify zoom / scene's depth with scroll*



### Documentation

The documentation is very complete and easy to use https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
Paul Henschel  made a great tutorial that will guide you in creating an “Awwwards-type” website with R3F https://twitter.com/0xca0a/status/1445409346305892353
The PMNDRS’ Discord is full of awesome people that will be glad to help you if you need them to: https://discord.com/invite/poimandres
Hazem (@HazemOIbrahim) recreated some of the Three.js Journey lessons with R3F https://journey.pmnd.rs/