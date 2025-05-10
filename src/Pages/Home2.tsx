import React from "react";
import SVGComponent from "../compoents/svgComp";
import SVGComponentMask from "../compoents/svgmask";
import SVGGroup from "../compoents/SVGGroup";
function Home2() {
  return (
    <section className="w-screen h-screen relative overflow-hidden z-0">
      <div>
        <SVGComponent className="w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-screen-xl h-96 mx-auto mt-36 relative z-0" />
        <SVGComponentMask className="w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-screen-xl h-96 mx-auto mt-36 absolute inset-0 z-10" />
      
      <SVGGroup className="hidden sm:inline-block w-4/5 md:w-3/4 lg:max-w-screen-xl h-9 absolute    "/>
      </div>
      {/* <div className=" w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-screen-xl  relative">

      </div> */}
    </section>
  );
}

export default Home2;
