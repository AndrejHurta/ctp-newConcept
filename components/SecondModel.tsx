import * as THREE from "three";
import { useGLTF, useMask } from '@react-three/drei'
import { ShirtType, TextureKey } from '@/lib/textures'
import { createMaterials } from "@/lib/material";
import { useShirtSectionTextures } from "@/lib/usedTextures"; 
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { shirtColors } from "@/lib/colors";
import _gsap from "gsap/gsap-core";
import { materialOpacity } from "three/tsl";

type GLTFResult = {
    nodes: {
        [name: string]: THREE.Mesh;
    };
};
export function SecondModel({shirtType} : {shirtType: ShirtType}) {
    const { nodes } = useGLTF('/models/ShirtScrolling.glb') as unknown as GLTFResult
    const stencil = useMask(1, true)
    const textures = useShirtSectionTextures(shirtType, "second", true);
    const mats = createMaterials(textures, stencil) as Record<TextureKey <typeof shirtType,"second">, THREE.MeshBasicMaterial> ;

    const marqueeText1Ref = useRef<THREE.Mesh>(null)
    const marqueeText1DupRef = useRef<THREE.Mesh>(null)
    const marqueeText2Ref = useRef<THREE.Mesh>(null)
    const marqueeText2DupRef = useRef<THREE.Mesh>(null)

    const groupRef = useRef<THREE.Group>(null);

    const getTextColor = () => shirtColors[shirtType]?.text ?? "black"

    const TOP_BOTTOM_TEXT_WIDTH = 5.7;
    const MIDDLE_TEXT_WIDTH = 6.2;
    const DURATION = 50;

    const textsMaterial = new THREE.MeshBasicMaterial({
      color: getTextColor(),
      transparent: true,
      opacity: 1,
      ...stencil
    })
    const marqueeMaterial = new THREE.MeshBasicMaterial({
      color: getTextColor(),
      transparent: true,
      opacity: 0,
      ...stencil
    })
    useGSAP(() => {
      if(!groupRef.current) return;
      gsap.timeline({
        scrollTrigger: {
          trigger: "#second-section",
          start: "top top",
          end: "600% top",
          scrub: 1,
          pin: true,
          markers: true
        }
      })
      .to(groupRef.current.rotation, { x: 0, duration: 0.2})
      .to(groupRef.current.position, { y: 0.7, duration: 0.8}, "<")
      .to(groupRef.current.rotation, {y: -Math.PI * 2, duration: 0.8}, "<")
      .to(groupRef.current.scale, {x: .8, y: .8, z: .8, duration: 0.1})
      .to(textsMaterial, {opacity: 0, duration: 0.5}, "<")
      .to(marqueeMaterial, {opacity:0.1, duration: 0.05}, "<")
      .to(groupRef.current.position, {y: 0.7 })
    }, [])
    //Marquee animation
    useGSAP(() => {
      if(
        !marqueeText1Ref.current ||
        !marqueeText1DupRef.current ||
        !marqueeText2Ref.current ||
        !marqueeText2DupRef.current
      )
      return;

      gsap.to(marqueeText1Ref.current.position, {
        x: `-=${TOP_BOTTOM_TEXT_WIDTH}`,
        duration: DURATION,
        ease: "none",
        repeat: -1
      })

      gsap.to(marqueeText1DupRef.current.position, {
        x: `-=${TOP_BOTTOM_TEXT_WIDTH}`,
        duration: DURATION,
        ease: "none",
        repeat: -1
      })

      gsap.to(marqueeText2Ref.current.position, {
        x: `+=${MIDDLE_TEXT_WIDTH}`,
        duration: DURATION,
        ease: "none",
        repeat: -1
      })
       gsap.to(marqueeText2DupRef.current.position, {
        x: `+=${MIDDLE_TEXT_WIDTH}`,
        duration: DURATION,
        ease: "none",
        repeat: -1
      })

    });

    return (
    <group 
      ref={groupRef} 
      dispose={null}
      rotation={[Math.PI / 8, Math.PI /3, 0]}
      position-y={0.65}
      scale={1.7}>
        <mesh geometry={nodes.Shirt.geometry} material={mats.shirt} />
        <mesh geometry={nodes.Sphere_ENV.geometry} material={mats.sphere} />
        {/* Since the text has too many object -> create Object.entries and filter it by each object 
        that consist the name of "texts" */}
        <group>
          {Object.entries(nodes).filter(([key]) => key.startsWith("Texts"))
          .map(([key, node]) => (
            <mesh key={key} geometry={node.geometry} material={textsMaterial} position={node.position}/>
          ))}
        </group>
      <mesh
        ref={marqueeText1Ref}
        geometry={nodes.Marquee_Top_Bottom.geometry}
        material={marqueeMaterial}
        position={[0, 0, 0]}
      />
        <mesh
        ref={marqueeText1DupRef}
        geometry={nodes.Marquee_Top_Bottom.geometry}
        material={marqueeMaterial}
        position={[TOP_BOTTOM_TEXT_WIDTH, 0, 0]}
      />
      <mesh
        ref={marqueeText2Ref}
        geometry={nodes.Marquee_Middle.geometry}
        material={marqueeMaterial}
        position={[0, 0, 0]}
      />
      <mesh
        ref={marqueeText2DupRef}
        geometry={nodes.Marquee_Middle.geometry}
        material={marqueeMaterial}
        position={[-MIDDLE_TEXT_WIDTH, 0, 0]}
      />
     
    </group>
  )
}

useGLTF.preload('/models/ShirtScrolling.glb')
