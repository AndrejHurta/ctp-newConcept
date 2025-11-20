"use client";

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";

type GLTFResult = {
    nodes: {
        [name: string]: THREE.Mesh;
    };
     materials: {
          [name: string]: THREE.Material;
        }
};


export function FirstCTPModelSolar() {
  const { nodes, materials } = useGLTF('/models/ctp/CTP_Plzen_Solar.glb') as unknown as GLTFResult
  return (
    <group  dispose={null} scale={0.01}>
      <group position={[-4.525, 10.771, 52.084]} rotation={[1.569, 0.006, -1.565]}>
        <mesh
          geometry={nodes['Sklo_-_čiré_rychlé006'].geometry}
          material={materials['CTP_Sklo.001']}
        />
        <mesh
          geometry={nodes['Sklo_-_čiré_rychlé006_1'].geometry}
          material={materials['Kov - nerez ocel.001']}
        />
        <mesh
          geometry={nodes['Sklo_-_čiré_rychlé006_2'].geometry}
          material={materials['GDLM15_SolarWorld Blue.001']}
        />
      </group>
      <group position={[39.905, 10.771, 4.022]} rotation={[1.569, 0.006, -1.565]}>
        <mesh
          geometry={nodes['Sklo_-_čiré_rychlé002_1'].geometry}
          material={materials['CTP_Sklo.001']}
        />
        <mesh
          geometry={nodes['Sklo_-_čiré_rychlé002_2'].geometry}
          material={materials['Kov - nerez ocel.001']}
        />
        <mesh
          geometry={nodes['Sklo_-_čiré_rychlé002_3'].geometry}
          material={materials['GDLM15_SolarWorld Blue.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ctp/CTP_Plzen_Solar.glb')


