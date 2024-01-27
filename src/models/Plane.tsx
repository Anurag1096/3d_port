import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import PlaneObj from '../assets/3d/plane.glb'
type Props={
  position:number[];
  scale:number[];
  isRotating:boolean;
  rotation:number[];
}

const Plane = (props:Props) => {
  const ref=useRef()
const plane=useGLTF(PlaneObj)
const {actions} = useAnimations(plane.animations,ref)

useEffect(()=>{
  console.log(props.isRotating)
if(props.isRotating){
 
  actions['Take 001']?.play();

}else{
  actions['Take 001']?.stop();
}
},[actions,props.isRotating ])
    return (
    <mesh 
    {...props}
    ref={ref}
    // position={[-5,4,2]} scale={[0.003,0.003,0.003]}
    >

        <primitive object={plane.scene}/>
    </mesh>
  )
}

export default Plane