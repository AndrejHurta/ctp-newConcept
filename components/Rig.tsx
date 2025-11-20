import { useFrame } from "@react-three/fiber"
import { easing } from "maath"


const Rig = () => {
  return useFrame((state,delta)=> {
    easing.damp3(
        state.camera.position,[0,0,2],100,delta
    );
    state.camera.lookAt(0,0,0);
  })
}

export default Rig