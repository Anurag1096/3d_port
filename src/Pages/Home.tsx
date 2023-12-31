import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../compoents/Loader";
import Island from "../models/Island";



const Home = () => {
 
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43];
    const screenRotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, screenRotation];
  };

  const [IslandScale, IslandPosition, IslandRotation] =
    adjustIslandForScreenSize();
console.log(IslandScale,IslandPosition)
  return (
    <section className="w-full h-screen relative">
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
   Popup
   </div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight/>
          <pointLight/>
          <spotLight/>
          <hemisphereLight/>
          <Island
            positon={IslandPosition}
            scale={IslandScale}
            rotation={IslandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
