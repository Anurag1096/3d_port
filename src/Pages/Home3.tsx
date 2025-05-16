import React,{Suspense} from 'react'
import { Loader } from '@react-three/drei'
function Home3() {
  return (
    <section className="w-screen h-screen relative overflow-hidden ">
       <Suspense fallback={<Loader/>}>
       </Suspense>
       
       
    </section>
  )
}

export default Home3