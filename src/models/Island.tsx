
import { useRef, useEffect } from "react";
import {a , Globals} from "@react-spring/three";
import { useGLTF, } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import IslandScene from "../assets/3d/island.glb";

type Props = {
    scale: number[];
    position: number[];
    rotation: number[];
};

const Island = (props:Props) => {
    const IslandRef = useRef();
    
  const { nodes, materials } = useGLTF(IslandScene);

  return (
    <a.group  ref={IslandRef} {...props} >
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
