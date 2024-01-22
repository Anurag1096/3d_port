import { useGLTF } from '@react-three/drei'
import React from 'react'
import PlaneObj from '../assets/3d/plane.glb'
const Plane = () => {
const plane=useGLTF(PlaneObj)

    return (
    <mesh 
    // position={[-5,4,2]} scale={[0.003,0.003,0.003]}
    >

        <primitive object={plane.scene}/>
    </mesh>
  )
}

export default Plane