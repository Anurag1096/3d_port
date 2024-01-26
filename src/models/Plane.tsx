import { useGLTF } from '@react-three/drei'
import React from 'react'
import PlaneObj from '../assets/3d/plane.glb'
type Props={
  position:number[];
  scale:number[];
  isRotating:boolean;
  rotation:number[];
}

const Plane = (props:Props) => {
const plane=useGLTF(PlaneObj)
    return (
    <mesh 
    {...props}
    // position={[-5,4,2]} scale={[0.003,0.003,0.003]}
    >

        <primitive object={plane.scene}/>
    </mesh>
  )
}

export default Plane