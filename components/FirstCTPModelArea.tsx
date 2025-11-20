"use client";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type GLTFResult = {
    nodes: {
        [name: string]: THREE.Mesh;
    };
};


export function FirstCTPModelArea() {
  const { nodes } = useGLTF('/models/ctp/CTP_Plzen_Area.glb')  as unknown as GLTFResult;

  const groupRef = useRef<THREE.Group>(null);

  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  console.log(animationComplete)

  const areaMaterial = new THREE.MeshBasicMaterial({
        color: "red",
        transparent: true,
        opacity: 0,
      })

    useGSAP(() => {
      if(!groupRef.current) return;
      gsap.timeline({
        scrollTrigger: {
          trigger: "#first-section",
          start: "top top",
          end: "600% top",
          scrub: 1,
          pin: true,
          markers: false
        }
      })
  
      .to(areaMaterial, { opacity: .2, duration: 0.5})
      .to(areaMaterial, { opacity: 0, duration: 0.5})
      
      .call(() => {
      
      setControlsEnabled(true); // <--- THIS is your state change
      setAnimationComplete(true); // <--- THIS is your state change
    });
      
    }, [setControlsEnabled, setAnimationComplete ])

  return (
    <group dispose={null} ref={groupRef}  scale={0.01}>
      <group position={[154.439, 0, 659.076]} rotation={[0, -0.158, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_1.geometry}
          material={areaMaterial}
          position={[-503.303, -11, -818.404]}
          
        />
        <OrbitControls enabled={controlsEnabled}/>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ctp/CTP_Plzen_Area.glb')
