import * as THREE from "three"
import { ShirtType, TextureKey } from '@/lib/textures'
import { useShirtEnvCube, useShirtSectionTextures, useShirtVideoTexture } from '@/lib/usedTextures'
import { Environment, MeshReflectorMaterial, Text, useCubeTexture, useMask } from "@react-three/drei"
import { shirtColors } from "@/lib/colors"
import { Masking } from "./Masking"
import { useRef } from "react"

const ThirdModel = ({shirtType} : {shirtType: ShirtType}) => {

    const stencil = useMask(1)
    const maskRef = useRef<THREE.Mesh>(null)

    const textures = useShirtSectionTextures(shirtType, "third", false) as Record<TextureKey<typeof shirtType, "third">,THREE.Texture>
    
    const envMap = useShirtEnvCube(shirtType);
    const video = useShirtVideoTexture(shirtType)

    const getTextColor = () => shirtColors[shirtType]?.text ?? "black"
    const getWallColor = () => shirtColors[shirtType]?.wall ?? "white"

    return (
    <group>
        <Masking ref={maskRef}></Masking>
        <group>
            <mesh scale={0.1} rotation-y={-Math.PI / 6} position={[0.2, 0.65, 0]}>
                <planeGeometry args={[16,9]}/>
                <meshBasicMaterial map={video} {...stencil}/>
            </mesh>
            <mesh position-y={0.2} rotation-x={-Math.PI/2}>
                <planeGeometry args={[10,3]}/>
                <MeshReflectorMaterial
                    envMap={envMap}
                    normalMap={textures.normal}
                    map={textures.overlay}
                    blur={[300,30]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={0.8}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    metalness={0}
                    {...stencil}
                />
            </mesh>
            {/* wall */}
            <mesh position={[0,5,-1.3]}>
                <planeGeometry args={[10, 10]}/>
                <meshBasicMaterial color={getWallColor()} map={textures.overlay} {...stencil}/>
            </mesh>
            {/* HTML content in 3D */}
            <group position={[-0.8, 0.7, 0]}>
                <mesh position={[0, 0.1, 0]}>
                <planeGeometry args={[0.5, 0.2]}/>
                <meshBasicMaterial color={getTextColor()} map={textures.icon} {...stencil} transparent/>
            </mesh>
            </group>
            {/* button */}
            <group>
                <mesh>
                    <boxGeometry args={[0.5, 0.12, 0.02]}/>
                    <meshBasicMaterial color={getTextColor()} {...stencil}/>
                </mesh>
                <Text 
                fontSize={0.035}
                anchorX={"center"}
                anchorY={"middle"}
                position={[0,0, 0.03]}>
                    SHOP THE COLLECTION
                    <meshBasicMaterial
                    color={getTextColor() === "black" ? "white" : "black"} {...stencil}/>
                </Text>
            </group>
        </group>
    </group>
  )
}

export default ThirdModel