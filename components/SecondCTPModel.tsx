"use client";

import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

export default function SecondCTPModel() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <Text fontSize={.1} position={[0, 0, 0]}>
          Second CTP Model
        </Text>
      </Canvas>
    </div>
  );
}