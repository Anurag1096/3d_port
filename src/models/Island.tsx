/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef, useEffect } from "react";
import { a, Globals } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import IslandScene from "../assets/3d/island.glb";
import { raf } from "@react-spring/shared";
type Props = {
  scale: number[];
  position: number[];
  rotation: number[];
  isRotating: boolean;
  setIsRotating: (a: boolean) => void;
};

const Island = (props: Props) => {
  const IslandRef = useRef();

  const { nodes, materials } = useGLTF(IslandScene);
  const { gl, viewport } = useThree();
  const last_x = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
// Functions for handeling mouse touch events
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    last_x.current = clientX;
  };
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.setIsRotating(false);
   
  };
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (props.isRotating) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - last_x.current) / viewport.width;
    IslandRef.current.rotation.y += delta * 0.01 * Math.PI;
    last_x.current = clientX;
    rotationSpeed.current += delta * 0.01 * Math.PI;
    }
  };

 const handleKeyDown=(e)=>{
  if(e.key === "ArrowLeft"){
    if(!props.isRotating) props.setIsRotating(true);
    IslandRef.current.rotation.y += 0.01 * Math.PI;
  }else if( e.key === "ArrowRight"){
    if(!props.isRotating) props.setIsRotating(true);
    IslandRef.current.rotation.y -= 0.01 * Math.PI;
  }
 }
 const handleKeyUp =(e)=>{
  if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
    props.setIsRotating(false);
  }
 }

  useEffect(() => {
    const canvas=gl.domElement;
     canvas.addEventListener('pointerdown',handlePointerDown);
     canvas.addEventListener("pointerup",handlePointerUp);
     canvas.addEventListener("pointermove", handlePointerMove)
     document.addEventListener("keydown",handleKeyDown);
     document.addEventListener("keyup", handleKeyUp);
    return () => {
     canvas.removeEventListener("pointerdown",handlePointerDown);
     canvas.removeEventListener('pointerup',handlePointerUp);
     canvas.removeEventListener('pointermove',handlePointerMove);
     document.removeEventListener("keydown",handleKeyDown);
     document.removeEventListener("keyup",handleKeyUp);
    };
  }, [gl,handlePointerDown,handlePointerMove,handlePointerUp]);


  useFrame(()=>{
    if(!props.isRotating){
      rotationSpeed.current *= dampingFactor;
      if(Math.abs(rotationSpeed.current) < 0.001){
        rotationSpeed.current=0;

      }

      IslandRef.current.rotation.y += rotationSpeed.current;
    }else {

      const rotation = IslandRef.current.rotation.y;
      
      
      
      const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      
      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
            case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
              setCurrentStage(1);
              break;
              default:
                setCurrentStage(null);
              }
            }
            })
            
  
  return (
    <a.group ref={IslandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
