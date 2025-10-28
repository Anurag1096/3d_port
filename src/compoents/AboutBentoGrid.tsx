import { useRef } from "react";
import { lazy } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SVGPerson = lazy(() => import("../compoents/svgPerson"));

const AboutBentoGrid = () => {
  return (
    <>
      {/* About section */}
      <motion.section
        id="about-section"
        className="grid mx-10 sm:grid-rows-3 gap-4 max-w-4xl sm:mx-auto place-items-center"
      >
        <motion.div className=" xs:row-span-2 xs:w-full xs:min-h-[250px] sm:row-span-2 w-full h-full rounded-xl  bg-white dark:bg-[#222] shadow-lg overflow-hidden flex items-center justify-center">
          <SVGPerson className="w-full h-auto"/>
          
        </motion.div>
       <motion.div className="sm:col-span-3 w-full h-full rounded-xl text-center bg-white dark:bg-[#222] shadow-lg">
          <span>03 image if</span>
        </motion.div>
        <motion.div className="sm:col-span-3 w-full h-full rounded-xl text-center bg-white dark:bg-[#222] shadow-lg">
          <span>03 image if</span>
        </motion.div>
        <motion.div className="sm:col-span-2 w-full h-full rounded-xl text-center bg-white dark:bg-[#222]   shadow-lg">
          <span>04</span>
        </motion.div>
         <motion.div className="sm:col-span-2 w-full h-full rounded-xl text-center bg-white dark:bg-[#222] shadow-lg">
          <span>055 image if</span>
        </motion.div>
        <motion.div className="sm:col-span-4 w-full h-full p-4 rounded-xl overflow-hidden bg-white dark:bg-[#222]  shadow-lg">
            <p className="text-lg text-center p-6 sm:p-1 sm:text-xl md:text-start md:max-w-3xl m-auto  text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I help teams build fast, accessible, and modern interfaces that
            users love — using React, Tailwind, and clean, scalable code.
            Whether it's a landing page or a complex UI system, I turn designs
            into performant, pixel-perfect experiences.
          </p>
          <div className="text-center mt-6 mx-6 md:mx-1">
            <a
              href="/about"
              className="inline-block btn  py-2 px-5 rounded-xl hover:scale-[1.03] transition  mb-6"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default AboutBentoGrid;
