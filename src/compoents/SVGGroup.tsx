import * as React from "react";
import { motion } from "framer-motion";

const MotionDiv=motion.div;
const SVGGroup = (props) => (
  

<MotionDiv 
  initial={{ x: "-100vw" }}
  animate={{ x: 235 ,y:4}}
  transition={{ duration: 2, type: "spring", stiffness: 40 }}
  {...props}
>
  <svg
    width={145}
    height={43}
    viewBox="0 0 165 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <rect
      x={14.2891}
      y={0.0380859}
      width={10}
      height={42}
      rx={5}
      transform="rotate(15 14.2891 0.0380859)"
      fill="white"
    />
    <rect
      x={126.902}
      y={0.0380859}
      width={10}
      height={42}
      rx={5}
      transform="rotate(15 126.902 0.0380859)"
      fill="white"
    />
    <rect
      x={70.5955}
      y={0.0380859}
      width={10}
      height={42}
      rx={5}
      transform="rotate(15 70.5955 0.0380859)"
      fill="white"
    />
    <rect
      x={42.4423}
      y={0.0380859}
      width={10}
      height={42}
      rx={5}
      transform="rotate(15 42.4423 0.0380859)"
      fill="white"
    />
    <rect
      x={155.055}
      y={0.0380859}
      width={10}
      height={42}
      rx={5}
      transform="rotate(15 155.055 0.0380859)"
      fill="white"
    />
    <rect
      x={98.7487}
      y={0.0380859}
      width={10}
      height={42}
      rx={5}
      transform="rotate(15 98.7487 0.0380859)"
      fill="white"
    />
  </svg>
  </MotionDiv>
);
export default SVGGroup;
