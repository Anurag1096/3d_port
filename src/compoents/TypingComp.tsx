import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
interface Props{
    text:string;
    speed:number;
}
function TypingComp({ text, speed }:Props ) {
  const [displayText, setDisText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    });
    return () => clearInterval(interval);
  }, [text, speed]);

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
