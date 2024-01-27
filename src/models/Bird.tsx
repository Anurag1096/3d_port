import React, { useEffect, useRef } from 'react'
import BirdObj from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const Bird = () => {
  const birdRef = useRef()

    const bird= useGLTF(BirdObj)
    const {actions} = useAnimations(bird.animations,birdRef)
    useEffect(()=>{
      actions["Take 001"]?.play()
    })
    useFrame(({clock,camera})=>{
      // Update the y position to simulate a bird like motion using sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 +1;
      
      // Check if the bird reach a certain end point using camera
      if(birdRef.current.position.x > camera.position.x + 10){
        //change the direction backwards and rotate the bird  180 degree
        birdRef.current.rotation.y = Math.PI;
      }else if( birdRef.current.position.x < camera.position.x - 7){
        // chagne direction to forward and reset the position
        birdRef.current.rotation.y = 0;
      }
      // Update the Z and X position based on direction
      if(birdRef.current.rotation.y === 0){
        //Moving froward
        birdRef.current.position.x += 0.1;
        birdRef.current.position.z -= 0.1;
      }else{
        // Moving backward
        birdRef.current.position.x -= 0.1;
        birdRef.current.position.z += 0.1;
      }
    })
  return (
    <mesh ref={birdRef} position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
        <primitive object={bird.scene}/>
    </mesh>
  )
}

export default Bird