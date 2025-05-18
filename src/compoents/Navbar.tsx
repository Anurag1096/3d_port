import React from "react";
import { NavLink } from "react-router-dom";
import bulb from "../assets/images/bulb.png";
type Props={
  darkMode:boolean;
  setMode:(a:boolean)=> void;
}
function Navbar({darkMode, setMode}:Props) {

 const handleMode=()=>{
  setMode(!darkMode)
 }

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-[#FFFAFA] 
        items-center flex justify-center font-bold  shadow-md
        "
      >
        <p className="text-blue-500">AC</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
           `transition-colors duration-300 ${isActive ? 'text-blue-500' : 'nav-link'}`

          }
        >
          About
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            `transition-colors duration-300 ${isActive ? 'text-red-500' : 'nav-link'}`

          }
        >
          Project
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `transition-colors duration-300 ${isActive ? 'text-blue-500' : 'nav-link'}`

          }
        >
          Contact
        </NavLink>
        <div onClick={handleMode} className="btn-front rounded-xl flex justify-center  items-center cursor-pointer  light-bulb p-2  ">
          <img
            src={bulb}
            alt="light-bulb"
            className={`w-5 h-5 object-contain ${darkMode ? 'rotate-180' : ''} transition-transform duration-300`}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
