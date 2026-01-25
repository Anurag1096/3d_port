import React, { Suspense,useRef } from "react";
import { Loader } from "@react-three/drei";
import { motion,useScroll, useTransform,useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AboutBentoGrid from "../compoents/AboutBentoGrid";


function Home3() {
  const {t}=useTranslation()
  
  const history = useNavigate();
  const buttonClick = () => {
    history("/contact");
  };


const heroRef = useRef(null);
const { scrollYProgress: heroScroll } = useScroll({
  target: heroRef,
  offset: ["start end", "end start"],
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
           className="flex justify-center items-center w-full md:min-h-screen bg-[radial-gradient(circle_at_center,_#ffe6f0_40%,_#FFFAFA_80%)]  rounded dark:bg-[radial-gradient(circle_at_center,_#4a044e_0%,_#041824_80%)]"
        >
          {/* need to work on it */}
          <motion.div
          style={{ y: smoothParallaxY }}
            id="container"
            className="text-center px-2 h-[700px] mt-20 sm:mt-60  lg:max-w-3xl lg:h-[768px]  lg:px-4 xl:h-[768px]"
          >
            <motion.h1
              className="text-4xl sm:text-5xl  font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t("hero.heading1")},{" "}
              <span className="text-[#2589FABD]"> {t("hero.heading2")}</span>, {t("hero.and")}
              {" "} {t("hero.heading3")}
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:max-w-4xl m-auto  text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
             {t("hero.subHeading")}
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
              {t("connect")}
            </motion.button>
          </motion.div>
        </section>
          <h1 className="text-5xl relative top-[-50px] sm:text-6xl  sm:top-[-70px] font-bold text-center mb-8 orrange-gradient_text  drop-shadow-2xl">
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
          
            <div className="bg-white  dark:bg-[#222] p-4 rounded-xl shadow-md hover:scale-[1.02] transition text-center">
              <img className="aspect-square" src="/reddit.png" alt="reddit image" width={512} height={512}/>
              <h3 className="font-semibold text-lg mb-1">Reddit Client</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                TypeScript,React and Axios
              </p>
            </div>
               <div className="bg-white  dark:bg-[#222] p-4 rounded-xl shadow-md hover:scale-[1.02] transition text-center">
                <img src="/pomodoro.png" alt="pomodoro image" width={512} height={512}/>
              <h3 className="font-semibold text-lg mb-1">Pomodoro Timer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Nextjs,Redux Toolkit
              </p>
            </div>
              <div className="bg-white  dark:bg-[#222] p-4 rounded-xl shadow-md hover:scale-[1.02] transition text-center">
              <img className=" aspect-square" src="/kkanban.png" alt="kanban image" width={512} height={512}/>
              <h3 className="font-semibold text-lg mb-1">Kanban Board</h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Nextjs,Redux Toolkit, Tailwind and Vitest
              </p>
            </div>
            {/* Add more as needed */}
          </div>
          <div className="text-center mt-6">
            <a
              href="/project"
              className="inline-block btn  py-2 px-5 rounded-xl hover:scale-[1.03] transition"
            >
              {t("viewAllProject")}
            </a>
          </div>
           
        </motion.section>
        
      </Suspense>
    </section>
  );
}

export default Home3;
