import React, { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom'
function Home3() {
  const history=useNavigate()
  const buttonClick=()=>{
    history('/contact')
  }
  return (
    <section className="w-screen h-screen  overflow-hidden">
      <Suspense fallback={<Loader />}>
        <section
          id="hero-section"
          className="flex justify-center  w-screen h-screen bg-inherit"
        >
          <div
            id="container"
            className="text-center mt-20 sm:mt-40  lg:max-w-3xl px-4"
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Crafting Fast, <span className="text-[#2589FABD]"> Responsive</span>, and Accessible Web Experiences
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:max-w-xl m-auto  text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              I’m a front-end engineer who builds performant interfaces with
              clean code, modern tools, and a strong focus on user experience
            </motion.h2>

            <motion.button
              onClick={buttonClick}
              className="bg-[#F21E49B0] hover:bg-[#F21E49C9] text-white font-semibold py-2 px-6 rounded-3xl shadow-lg transition duration-300"
              initial={{
                opacity: 0,
                y: 10,
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileHover={{
                y: -3,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Let’s Connect
            </motion.button>
          </div>
        </section>
      </Suspense>
    </section>
  );
}

export default Home3;
