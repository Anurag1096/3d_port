import React, { Suspense,useRef } from "react";
import { Loader } from "@react-three/drei";
import { motion,useScroll, useTransform,useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AboutComp from "../compoents/AboutComp";
import AboutBentoGrid from "../compoents/AboutBentoGrid";


function Home3() {
  const history = useNavigate();
  const buttonClick = () => {
    history("/contact");
  };


const heroRef = useRef(null);
const { scrollYProgress: heroScroll } = useScroll({
  target: heroRef,
  offset: ["start end", "end start"]
});
const heroParallaxY = useTransform(heroScroll, [0, 1], ["-50px", "50px"]);
const smoothParallaxY = useSpring(heroParallaxY, {
  stiffness: 80,
  damping: 20,
});





  return (
    //main home
    <section className=" min-h-full  overflow-x-hidden w-full   z-0">
      <Suspense fallback={<Loader />}>
        <section
          id="hero-section"
          ref={heroRef}
           className="flex justify-center items-center w-full md:min-h-screen bg-[radial-gradient(circle_at_center,_#ffe6f0_40%,_#FFFAFA_100%)] bg-fixed rounded dark:bg-[radial-gradient(circle_at_center,_#4a044e_0%,_#041824_100%)]"
        >
          {/* need to work on it */}
          <motion.div
          style={{ y: smoothParallaxY }}
            id="container"
            className="text-center h-[700px] mt-20 sm:mt-40  lg:max-w-3xl lg:px-4"
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Crafting Fast,{" "}
              <span className="text-[#2589FABD]"> Responsive</span>, and
              Accessible Web Experiences
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:max-w-4xl m-auto  text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              I’m a front-end engineer who builds performant, accessible interfaces using clean, maintainable code. 
              I leverage modern frameworks and tools to craft 
              seamless digital experiences with a strong focus on usability, responsiveness, and visual clarity. 
              Passionate about delivering products that not only look great but feel fast and intuitive for every user.
            </motion.h2>

            <motion.button
              onClick={buttonClick}
              className="bg-[#F21E49B0] hover:bg-[#F21E49C9] text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
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
          </motion.div>
        </section>
          <h1 className="text-5xl relative top-[-80px] sm:text-4xl  sm:top-[-100px] font-bold text-center mb-8 orrange-gradient_text  drop-shadow-2xl">
            About
          </h1>
             <AboutBentoGrid/>
          
        <motion.section
          id="projects-section"
          className="py-20 px-6 bg-[#FFFAFA] dark:bg-[#041824]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl sm:text-4xl font-bold text-center mb-8 orrange-gradient_text  drop-shadow-2xl">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white cursor-pointer dark:bg-[#222] p-4 rounded-xl shadow-md hover:scale-[1.02] transition text-center">
              <h3 className="font-semibold text-lg mb-1">Kanban Board</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                React, Zustand, Tailwind
              </p>
            </div>
            <div className="bg-white cursor-pointer dark:bg-[#222] p-4 rounded-xl shadow-md hover:scale-[1.02] transition text-center">
              <h3 className="font-semibold text-lg mb-1">3D Portfolio</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Three.js, Framer Motion
              </p>
            </div>
               <div className="bg-white cursor-pointer dark:bg-[#222] p-4 rounded-xl shadow-md hover:scale-[1.02] transition text-center">
                
              <h3 className="font-semibold text-lg mb-1">3D Portfolio</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Three.js, Framer Motion
              </p>
            </div>
            {/* Add more as needed */}
          </div>
          <div className="text-center mt-6">
            <a
              href="/project"
              className="inline-block btn  py-2 px-5 rounded-xl hover:scale-[1.03] transition"
            >
              View All Projects
            </a>
          </div>
           
        </motion.section>
        
      </Suspense>
    </section>
  );
}

export default Home3;
