import React, { Suspense } from "react";
import Loader from "../compoents/Loader";
import SVGComponent from "../compoents/svgComp";
import SVGComponentMask from "../compoents/svgmask";
import SVGGroup from "../compoents/SVGGroup";
import TypingComp from "../compoents/TypingComp";
function Home2() {
  return (
    <section className="w-screen h-screen relative overflow-hidden z-0">
      <Suspense fallback={<Loader />}>
      
        <div>
          <SVGComponent className="w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-screen-xl h-96 mx-auto mt-36 relative z-0" />
          <SVGComponentMask className="w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-screen-xl h-96 mx-auto mt-36 absolute inset-0 z-10" />
        </div>
        <div className=" w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-screen-xl  relative">
          <SVGGroup className="hidden md:inline-block absolute bottom-0 left-0 w-4/5 md:w-3/4 lg:max-w-screen-sm h-9 " />
        </div>

        <div className='text-white'>
        <TypingComp  text={'hi this is anurag a useless software engineer who does not know any thing in life and is planning to end it.'} speed={100} />
        </div>
      </Suspense>
    </section>
  );
}

export default Home2;
