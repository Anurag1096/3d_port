import { useRef } from "react";
import { lazy } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SVGPerson = lazy(() => import("../compoents/svgPerson"));




const AboutComp = () => {
  //paralax for about section background div
  const aboutBg = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutBg,
    offset: ["start end", "end start"],
  });
  const aboutParallaxY = useTransform(aboutScroll, [0, 1], ["-30px", "30px"]);
  const smoothAboutParaY = useSpring(aboutParallaxY, {
    stiffness: 80,
    damping: 20,
  });
  return (
    <>
      {/* About section */}
      <motion.section
        ref={aboutBg}
        id="about-section"
        className="flex flex-col-reverse mt-[-200px] rounded-t-3xl z-10 items-center  min-h-screen w-full sm:flex-row sm:justify-center  section-about"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-lg text-center p-6 sm:p-1 sm:text-xl md:text-start md:max-w-xl m-auto  text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I help teams build fast, accessible, and modern interfaces that
            users love — using React, Tailwind, and clean, scalable code.
            Whether it's a landing page or a complex UI system, I turn designs
            into performant, pixel-perfect experiences.
          </p>
          <div className="text-start mt-6 mx-6 md:mx-0">
            <a
              href="/about"
              className="inline-block btn  py-2 px-5 rounded-xl hover:scale-[1.03] transition  mb-6"
            >
              Learn more
            </a>
          </div>
        </motion.div>
        <motion.div
          style={{ y: smoothAboutParaY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SVGPerson />
        </motion.div>
      </motion.section>
    </>
  );
};

export default AboutComp
