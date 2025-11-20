"use client"
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Cube } from "./cube";
import React from "react";

const Test = () => {
  return (
    <Canvas style={{position:"fixed"}}>
      <Environment preset="night"></Environment>
      <OrbitControls />
        <Cube/>
    </Canvas>
  )
}

export default Test