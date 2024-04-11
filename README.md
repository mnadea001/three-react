# React + Vite

```
npm create vite@latest [nom de votre projet]

npm install

npm run dev

```

# Librairies

```
npm install three@0.158 @react-three/fiber@8.15
npm install @react-three/drei@9.88
npm install @react-three/drei@latest


```

### Documentation

The documentation is very complete and easy to use https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
Paul Henschel  made a great tutorial that will guide you in creating an “Awwwards-type” website with R3F https://twitter.com/0xca0a/status/1445409346305892353
The PMNDRS’ Discord is full of awesome people that will be glad to help you if you need them to: https://discord.com/invite/poimandres

Hazem (@HazemOIbrahim) recreated some of the Three.js Journey lessons with R3F https://journey.pmnd.rs/

https://github.com/pmndrs/drei

### Font converters

https://transfonter.org/
https://www.fontsquirrel.com/tools/webfont-generator


## google-webfonts-helper
https://gwfh.mranftl.com/fonts

-----
## DevOps

```
docker build -t react-three . 
docker run -dit -p 8080:5173 react-three 

gcloud config set project projet-menu-420008

gcloud auth login

gcloud builds submit --tag gcr.io/id_de_votre_projet/nom_de_votre_image . 

gcloud builds submit --tag gcr.io/projet-menu-420008/projet-mnu .

```

 https://projet-mnu-react-three-xvnt6bylea-uc.a.run.app
--------------------------------------------------------------------------

## Code examples


We can change the constructor parameters by providing an array to the args attribute and follow the parameters order (radius, widthSegments, heightSegments):

```
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

```

With OrbitControl you modify zoom / scene's depth with scroll *
