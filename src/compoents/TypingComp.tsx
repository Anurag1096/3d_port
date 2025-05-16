import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
interface Props{
    text:string;
    speed:number;
}
// need more work
function TypingComp({ text, speed }:Props ) {
  const [displayText, setDisText] = useState<string>("");
  const [index,setIndex] =useState<number>(0)
  useEffect(() => {
    if(index < text.length){
      const timer=setTimeout(()=>{
        setDisText(text.substring(0,index + 1))
        setIndex(index + 1)
      })
      return ()=> clearInterval(timer)
    }
  }, [index,text, speed]);

  return (
    <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    style={{ fontFamily: "monospace", whiteSpace: "pre" }}
  >
    {displayText}
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      |
    </motion.span>
  </motion.p>
  );
}

export default TypingComp;
