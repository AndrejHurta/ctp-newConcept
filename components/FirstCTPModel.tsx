"use client";

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";

type GLTFResult = {
    nodes: {
        [name: string]: THREE.Mesh;
    };
};


export function FirstCTPModel() {
  const { nodes, materials } = useGLTF("/models/ctp/CTP_Plzen.glb") as unknown as GLTFResult;

  return (
      <group dispose={null} scale={0.01}>
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials['BC_Strecha_Dlazba.004']}
        position={[10.934, 10.177, 11.393]}
        rotation={[-0.027, 0.012, 0.001]}
        scale={[15.362, 0.048, 2.987]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials['BC_Strecha_Dlazba.004']}
        position={[-33.21, 10.177, 59.339]}
        rotation={[-0.027, 0.012, 0.001]}
        scale={[22.467, 0.048, 3.429]}
      />
      <group
        position={[41.587, 0.009, -37.317]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.02, 0.017, 0.02]}>
        <mesh geometry={nodes.BezierCurve012.geometry} material={materials['CTP_Fasada_2.004']} />
        <mesh geometry={nodes.BezierCurve012_1.geometry} material={materials['CTP_Fasada_1.004']} />
      </group>
      <group
        position={[41.585, 0, 11.462]}
        rotation={[0, -1.57, 1.571]}
        scale={[0.02, 0.018, 0.02]}>
        <mesh geometry={nodes.BezierCurve011_1.geometry} material={materials['CTP_Fasada_2.004']} />
        <mesh geometry={nodes.BezierCurve011_2.geometry} material={materials['CTP_Fasada_1.004']} />
      </group>
      <group
        position={[11.595, 0.009, 11.457]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[0.02, 0.018, 0.02]}>
        <mesh geometry={nodes.BezierCurve010_1.geometry} material={materials['CTP_Fasada_2.004']} />
        <mesh geometry={nodes.BezierCurve010_2.geometry} material={materials['CTP_Fasada_1.004']} />
      </group>
      <group
        position={[11.674, 0, 59.443]}
        rotation={[0, -1.569, 1.571]}
        scale={[0.02, 0.018, 0.02]}>
        <mesh geometry={nodes.BezierCurve009_1.geometry} material={materials['CTP_Fasada_2.004']} />
        <mesh geometry={nodes.BezierCurve009_2.geometry} material={materials['CTP_Fasada_1.004']} />
      </group>
      <group
        position={[-34.026, 0, 59.443]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[0.02, 0.017, 0.02]}>
        <mesh geometry={nodes.BezierCurve008_1.geometry} material={materials['CTP_Fasada_2.004']} />
        <mesh geometry={nodes.BezierCurve008_2.geometry} material={materials['CTP_Fasada_1.004']} />
      </group>
      <group
        position={[-34.209, -0.009, -37.371]}
        rotation={[3.142, 1.569, -1.571]}
        scale={[0.02, 0.018, 0.02]}>
        <mesh geometry={nodes.BezierCurve007_1.geometry} material={materials['CTP_Fasada_2.004']} />
        <mesh geometry={nodes.BezierCurve007_2.geometry} material={materials['CTP_Fasada_1.004']} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ctp/CTP_Plzen.glb");

