import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {arrow} from '../assets/icons';
type Props = {
  btnText: string;
  link: string;
};

function SpotlightButton(props: Props) {
  const { btnText, link } = { ...props };
  const btnRef=useRef(null)
  const spanRef=useRef(null)
  const handleMouseMove=(e)=>{
   const {width} = e.target.getBoundingClientRect();
   const offsetX=e.offsetX;
   
   const left=`${(offsetX/width)* 100}%`;
   spanRef.current.animate({left},{
    duration:250,fill:'forwards'
   })
  }
  const handleMouseLeave=(e)=>{
  
    spanRef.current.animate({left:'50%'},{
     duration:500,fill:'forwards'
    })
   }
  useEffect(() => {
    // This block of code will run after the component has mounted
     const btnInstance=btnRef.current
    // Adding a "mousemove" event listener to the element referenced by btnRef
    btnInstance.addEventListener("mousemove", handleMouseMove);
    btnInstance.addEventListener("mouseleave",handleMouseLeave)
    // The return statement is for cleanup when the component is unmounted
    return () => {
      // Removing the "mousemove" event listener when the component is unmounted
      btnInstance.removeEventListener("mousemove", handleMouseMove);
      btnInstance.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render
  return (
    <Link to={link}>
      <button ref={btnRef} className="relative w-full max-w-xs overflow-hidden
      rounded-lg px-4 py-3 text-lg font-medium
     neo-brutalism-white  neo-btn  
      ">
        <span className="pointer-events-none relative z-10
        mix-blend-difference flex gap-1 items-center
        ">{btnText}
         <img src={arrow} />
        </span>
        <span ref={spanRef} className="pointer-events-none absolute
        left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2
        rounded-full bg-blue-300 text-white
        "></span>
      </button>
    </Link>
  );
}

export default SpotlightButton;
