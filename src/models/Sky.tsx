import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import SkyScene from '../assets/3d/sky.glb';
import { useFrame } from '@react-three/fiber';

type Props={
  isRotating:boolean
}
const Sky = (props:Props) => {
     const {isRotating}= {...props}
     const skyRef=useRef();
     
    const sky = useGLTF(SkyScene);
   useFrame((_, delta)=>{
    if(isRotating){
      skyRef.current.rotation.y += 0.25 * delta;
    }
   })
  
    return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky