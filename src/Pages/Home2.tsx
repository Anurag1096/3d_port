import React, { Suspense } from "react";
import Loader from "../compoents/Loader";
import SVGComponent from "../compoents/svgComp";
import SVGComponentMask from "../compoents/svgmask";
import SVGGroup from "../compoents/SVGGroup";
import { TypeAnimation } from "react-type-animation";


function Home2() {
  return (
    <section className="w-screen h-screen relative overflow-hidden z-0">
      <Suspense fallback={<Loader />}>
        {/* Container for SVG and Typing */}
        <div className="relative w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-[843px] h-96 mx-auto mt-36">
          {/* Background SVG */}
          <SVGComponent className="w-full h-full relative z-0" />
          {/* Foreground mask */}
          <SVGComponentMask className="absolute inset-0 w-full h-full z-10" />

          {/* Typing animation over both - now responsive */}
          {/* Typing animation on the left side - responsive & constrained */}
          <div className="absolute font-semibold top-1/2 left-0 transform -translate-y-1/2 z-20 pl-4 sm:pl-6  md:px-12 md:max-w-4xl  md:flex md:justify-between md:items-center ">

            <div className="max-w-xs  sm:max-w-sm md:max-w-md lg:max-w-xl text-left">
              <TypeAnimation
                sequence={[
                  "Frontend engineer. Backend explorer. Let’s create something amazing.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1.5em", display: "inline-block", }}
                repeat={Infinity}
                className="text-blue"
              />
            </div>
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
             
            </div>
          </div>
        </div>

        {/* SVG Group at bottom */}
        <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-[843px] relative">
          <SVGGroup className="hidden md:inline-block absolute bottom-0 left-0 w-4/5 md:w-3/4 lg:max-w-[843px] h-9" />
        </div>
      </Suspense>
    </section>
  );
}

export default Home2;
