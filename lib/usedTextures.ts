import * as THREE from "three";
import { useCubeTexture, useTexture, useVideoTexture } from "@react-three/drei"
import { environmentPaths, SectionType, ShirtType, studioTextures, videoTextures } from "./textures"

export const useMainStudioTextures= () => {
    return useModifiedTextures(studioTextures.main, true);
}

export const useShirtSectionTextures= (
    shirtType: ShirtType,
    section: SectionType,
    setModifier: boolean
) => {
    const paths = studioTextures.shirts[shirtType]
    [section];
    return useModifiedTextures(paths, setModifier);
}

export const useShirtEnvCube = (shirtType: ShirtType) => {
    const path = environmentPaths[shirtType];
    return useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], 
            { path })
}

export const useShirtVideoTexture = (shirType: ShirtType) => {
    const path = videoTextures[shirType]
    return useVideoTexture(path)
}

function useModifiedTextures(paths:Record<string, string>, setModifier: boolean) {
    const textures = useTexture(paths);
    Object.values(textures).forEach((tex) => {
        tex.flipY = false;
        tex.colorSpace = THREE.SRGBColorSpace;
    });
    return textures;
}
