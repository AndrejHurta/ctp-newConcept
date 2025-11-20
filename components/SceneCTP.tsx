"use client";

import * as THREE from "three";
import { OrbitControls, Environment, View } from "@react-three/drei";
import { FirstCTPModelSur } from "./FirstCTPModelSur";
import { FirstCTPModelArea } from "./FirstCTPModelArea";
import { FirstCTPModelBuildings } from "./FirstCTPModelBuildings";
import { FirstCTPModelBuildings2 } from "./FirstCTPModelBuildings2";
import { ScrollTrigger } from 'gsap/all';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { scale } from "maath/dist/declarations/src/vector2";



export default function SceneCTP() {



gsap.registerPlugin(ScrollTrigger)

const scaleAnimation = 0.015;
const scaleAnimationTime = 0.2;

  return ( 
      <main className='min-h-screen'>
          <section id='first-section' className=' h-screen'>
            <View className='w-dvw h-dvh'>
              <group  position={[0, -2, 0]} rotation={[0, -Math.PI/2, 0]} >
                  <ambientLight intensity={1} />
                  <directionalLight/>
                  <FirstCTPModelBuildings/>
                  <FirstCTPModelSur/>
                  <FirstCTPModelArea/>

                  
                  <FirstCTPModelBuildings2/>
                  
                  <Environment preset="city" /> 
                </group>
            </View>
          </section>
          {/* <section id="second-section" className="h-screen"></section> */}
      </main>
      
  );
}