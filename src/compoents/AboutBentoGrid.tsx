import { lazy } from "react";
import { motion } from "framer-motion";
import CustomRadarChart from "./Charts/radarCharts";
import GitHubHeatMap from "./GithubHeatMap";
import { skillsSmall } from "../constants";
import { HackerRankBadge2 } from "./HackerRankBadge";

const SVGPerson = lazy(() => import("../compoents/svgPerson"));

const AboutBentoGrid = () => {
  return (
    <>
      {/* About section */}
      <motion.section
        id="about-section"
        className="grid mx-10 sm:grid-rows-3 gap-4 max-w-4xl sm:mx-auto place-items-center "
      >
        <motion.div className=" xs:row-span-2 xs:w-full xs:min-h-[250px] sm:row-span-2 w-full h-full rounded-xl  bg-white dark:bg-[#222] shadow-lg overflow-hidden flex items-center justify-center">
          <SVGPerson className="w-full h-full object-contain" />
        </motion.div>

        <motion.div className="pb-4 sm:col-span-3 w-full h-full rounded-xl text-center bg-white dark:bg-[#222] shadow-lg">
          <h6 className="subhead-text">My Skills</h6>
          <div className="mt-10 gap-4 sm:mt-16 flex flex-wrap  sm:gap-8 items-center justify-center">
            {skillsSmall.map((item) => {
              return (
                <div className="block-container w-16 h-16">
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
        <motion.div className=" xs:row-span-2 xs:w-full xs:min-h-[300px] sm:col-span-3 w-full h-full rounded-xl text-center bg-white dark:bg-[#222] shadow-lg overflow-hidden flex items-center justify-center">
          <CustomRadarChart />
        </motion.div>
        <motion.div className=" pb-4 mt-2 sm:col-span-4 w-full h-full rounded-xl text-center bg-white dark:bg-[#222] shadow-lg">
          <h6 className="subhead-text">HackerRank Badges</h6>
          <div className="mt-10 gap-4 sm:mt-10 flex flex-wrap  sm:gap-8 items-center justify-center">
            <HackerRankBadge2
              username="anurag_011996"
              badgeUrl=" https://hrcdn.net/fcore/assets/badges/problem-solving-ecaf59a612.svg"
              badgeName="Problem Solving"
              stars={[0, 1, 2, 3]}
            />
            <HackerRankBadge2
              username="anurag_011996"
              badgeUrl=" https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg"
              badgeName="Python"
              stars={[0, 1, 2]}
            />
            <HackerRankBadge2
              username="anurag_011996"
              badgeUrl=" https://hrcdn.net/fcore/assets/badges/sql-89e76e7082.svg"
              badgeName="SQL"
              stars={[0, 1, 2]}
            />
          </div>
        </motion.div>
        <motion.div className="pb-3 sm:col-span-4 w-full h-full rounded-xl text-center bg-white dark:bg-[#222]   shadow-lg sm:px-8 sm:pt-12">
          {/* //The calling is very slow , need to add abort controler when page is changed and need to fix calling speed*/}
          <GitHubHeatMap />
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
