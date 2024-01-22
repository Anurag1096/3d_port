import React from 'react'
import BirdObj from '../assets/3d/bird.glb';
import { useGLTF } from '@react-three/drei';
const Bird = () => {
    const bird= useGLTF(BirdObj)
  return (
    <mesh position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
        <primitive object={bird.scene}/>
    </mesh>
  )
}

export default Bird