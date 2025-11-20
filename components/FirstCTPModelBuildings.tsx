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

export function FirstCTPModelBuildings( ) {
  const { nodes, materials } = useGLTF('/models/ctp/CTP_Plzen_Buildings.glb') as unknown as GLTFResult;
  
  const groupRef = useRef<THREE.Group>(null);


  return (
    <group ref={groupRef} dispose={null} scale={0.01}>
      <group
        position={[-279.781, 0.018, -128.011]}
        rotation={[-0.193, 1.43, 0.191]}
        scale={[22.467, 0.048, 3.429]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['BC_Strecha_Dlazba.004']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['CTP_Asphalt.002']} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['CTP_Sklo.003']} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials['BC_Strecha_Dlazba.003']} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials['CTP_Fasada_2.002']} />
        <mesh geometry={nodes.Cube003_5.geometry} material={materials.CTP_Fasada_3} />
        <mesh geometry={nodes.Cube003_6.geometry} material={materials['CTP_Fasada_2.003']} />
        <mesh geometry={nodes.Cube003_7.geometry} material={materials['CTP_Fasada_1.002']} />
        <mesh geometry={nodes.Cube003_8.geometry} material={materials['CTP_Fasada_2.004']} />
        <mesh geometry={nodes.Cube003_9.geometry} material={materials['CTP_Fasada_1.004']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ctp/CTP_Plzen_Buildings.glb')