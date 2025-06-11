import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import arrow from "../assets/icons/arrow.svg";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { Link } from "react-router-dom";
import CTA from "../compoents/CTA";
function Projects() {
  return (
    <section className="max-container">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="head-text"
      >
        My{" "}
        <span className="orrange-gradient_text font-semibold  drop-shadow-2xl">
          Projects
        </span>
      </motion.h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-600">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Explore my portfolio of front-end development projects. From
          responsive designs to interactive user interfaces, each project
          reflects my commitment to crafting visually appealing and seamlessly
          functional web experiences. Dive into the world of code and creativity
          to see how I bring ideas to life on the front end of the digital
          landscape.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap my-20 gap-16"
      >
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center  items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-600">{project.description}</p>
              <div className="mt-2 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <hr />
      <CTA />
    </section>
  );
}

export default Projects;
