"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type GLTFResult = {
    nodes: {
        [name: string]: THREE.Mesh;
    };
     materials: {
          [name: string]: THREE.Material;
        }
};


export function FirstCTPModelBuildings2() {
  const { nodes, materials } = useGLTF('/models/ctp/CTP_Plzen_Buildings2glb.glb') as unknown as GLTFResult

  const groupRef = useRef<THREE.Group>(null);


  
  return (
    <group ref={groupRef} dispose={null} scale={0.01}>
      <group
        position={[-190.206, 0.018, -423.052]}
        rotation={[-3.114, 0.15, 3.138]}
        scale={[24.422, 0.048, 3.381]}>
        <mesh geometry={nodes.Cube033.geometry} material={materials['BC_Strecha_Dlazba.006']} />
        <mesh geometry={nodes.Cube033_1.geometry} material={materials['CTP_Sklo.001']} />
        <mesh geometry={nodes.Cube033_2.geometry} material={materials['CTP_Asphalt.001']} />
        <mesh geometry={nodes.Cube033_3.geometry} material={materials['CTP_Asphalt.003']} />
        <mesh geometry={nodes.Cube033_4.geometry} material={materials['CTP_Sklo.002']} />
        <mesh geometry={nodes.Cube033_5.geometry} material={materials['BC_Strecha_Dlazba.001']} />
        <mesh geometry={nodes.Cube033_6.geometry} material={materials['BC_Strecha_Dlazba.005']} />
        <mesh geometry={nodes.Cube033_7.geometry} material={materials['CTP_Fasada_2.006']} />
        <mesh geometry={nodes.Cube033_8.geometry} material={materials['CTP_Fasada_1.001']} />
        <mesh geometry={nodes.Cube033_9.geometry} material={materials['CTP_Fasada_2.007']} />
        <mesh geometry={nodes.Cube033_10.geometry} material={materials['CTP_Fasada_3.002']} />
        <mesh geometry={nodes.Cube033_11.geometry} material={materials['CTP_Fasada_2.008']} />
        <mesh geometry={nodes.Cube033_12.geometry} material={materials['CTP_Fasada_3.003']} />
        <mesh geometry={nodes.Cube033_13.geometry} material={materials['CTP_Fasada_2.009']} />
        <mesh geometry={nodes.Cube033_14.geometry} material={materials['CTP_Fasada_1.003']} />
        <mesh geometry={nodes.Cube033_15.geometry} material={materials['CTP_Fasada_2.010']} />
        <mesh geometry={nodes.Cube033_16.geometry} material={materials['CTP_Fasada_1.006']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ctp/CTP_Plzen_Buildings2glb.glb')
