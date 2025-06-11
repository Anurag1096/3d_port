import React from "react";
import {motion} from 'framer-motion';
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../compoents/CTA";

function About() {
  return (
    <section className=" max-container">
      <motion.h1 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      
      
      className="head-text">
        Hello I'm{" "}
        <span className="orrange-gradient_text font-semibold  drop-shadow-2xl">
          Anurag
        </span>
      </motion.h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-600">
        <motion.p
        initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
        >
          Software Engineer based in India, specilazing in Frontend devlopment
          through hands on learning and building applications.
        </motion.p>
      </div>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      
      className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap  gap-12">
          {skills.map((item) => {
            return (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div
                  className="btn-front  rounded-xl flex justify-center
                item-center
                "
                >
                  <img
                    className="w-1/2 h-1/2 object-contain"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-600">
          <p className="">
            I have worked with all sorts of companies, leveling up my skils and
            teaming up with smart people. Hear's the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={exp.company_name}
                date={exp.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: exp.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: exp.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {exp.title}
                  </h3>
                  <p
                    className="text-slate-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {exp.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li
                      key={`experience-point-${index}-${idx}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}

export default About;
