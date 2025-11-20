"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type GLTFResult = {
    nodes: {
        [name: string]: THREE.Mesh;
    };
     materials: {
          [name: string]: THREE.Material;
        }
};

export function FirstCTPModelSur() {
  const { nodes, materials } = useGLTF('/models/ctp/CTP_Plzen_Surrounding.glb') as unknown as GLTFResult;

  const groupRefSur = useRef<THREE.Group>(null);

  const areaMaterial = new THREE.MeshBasicMaterial({
        color: "red",
        transparent: true,
        opacity: 0,
      })



  return (
    <group ref={groupRefSur} dispose={null} scale={0.01}>
      <mesh
        geometry={nodes['89877415'].geometry}
        material={materials['Material_1.001']}
        material-color="#7C7C7C"
        position={[409.9, 0, 460.819]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Material_2}
        material-color="black"
        position={[409.9, 0, 460.819]}
      />
    </group>
  )
}

useGLTF.preload('/models/ctp/CTP_Plzen_Surrounding.glb')
