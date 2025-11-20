"use client"
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, View } from "@react-three/drei"
import Rig from "./Rig"
import { useEffect, useRef, useState } from "react"


//To set the location of the camera in real-life
function CameraDebugger() {
  const { camera } = useThree()

  useFrame(() => {
    console.log('Camera position:', camera.position)
    console.log('Camera rotation:', camera.rotation)
  })

  return null
}



const ViewCanvas = () => {
  const [eventSource, setEventSource] = 
  useState<HTMLElement | null>(null);
  useEffect(() => {
    setEventSource(document.body);
  })

  const [animationComplete, setAnimationComplete] = useState(false);
  return (
    <Canvas 

        style={{
            position: "fixed", inset: 0, overflow: "hidden"
        }}
        camera={{
          position: [0, 12, 0],
          rotation: [0, Math.PI / 2, 0],
          fov: 35
        }}
        eventSource={eventSource ?? undefined}
        eventPrefix="client"
        gl={{stencil: true}}
        >
            <View.Port/>
            <OrbitControls  enabled={false}/> 
            {/* <Rig/>  */}

            
        </Canvas>    
  )
}
export default ViewCanvas