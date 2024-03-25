import { Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import Earth from "../public/Earth";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App

// import { useState, Suspense } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import Earth from "../public/Earth";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Canvas>
//       <ambientLight/>
//       {/* <OrbitControls/> */}
//       <Suspense fallback ={null}>
//         <Earth/>

//       </Suspense>
//     </Canvas>
//     </>
//   )
// }

// export default App

// import { Suspense } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { useGLTF } from '@react-three/drei'

// const Model = () => {
//   const { nodes, materials } = useGLTF('../Earth.gltf')
//   return <primitive object={nodes.mesh} material={materials.material} />
// }

// function App() {
//   return (
//     <Canvas>
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//     </Canvas>
//   )
// }

// export default App