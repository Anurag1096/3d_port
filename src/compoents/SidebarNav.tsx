//This code is copyed from my other work.
import React from "react";
import bulb from "../assets/images/bulb.png";
import "./sideBar.css";
import { Link } from "react-router-dom";
type Props = {
  openSidebar: boolean;
  darkMode:boolean;
  setMode:(b:boolean)=>void;
  setCloseSidebar: (a: boolean) => void;
};

//will take 4 props one for darkmode and setMode and other for sidebar open/close function.
const SideBar = (props: Props) => {
  const { openSidebar, setCloseSidebar,darkMode,setMode } = props;

  const handleClick = () => {
    setCloseSidebar(!openSidebar);
  };

 const handleMode=()=>{
  setMode(!darkMode)
 }

// -------------------------Start of return------------------------
  return (
    <>
   
      <div
        className={openSidebar ? `main_wrapper2` : "main_wrapper"}
        aria-label="Sidebar"
      >
       <button className="btn_close" onClick={handleClick}>
            close
          </button>
          <div onClick={handleMode} className="btn-front rounded-xl flex justify-center  items-center cursor-pointer  light-bulb p-2  ">
          <img
            src={bulb}
            alt="light-bulb"
            className={`w-5 h-5 object-contain ${darkMode ? 'rotate-180' : ''} transition-transform duration-300`}
          />
        </div>
        <ul className="list_container">
          <li className="list_item">
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
          </li>
          <li className="list_item">
            <Link style={{ textDecoration: "none" }} to="/project">
              Projects
            </Link>
          </li>
          <li className="list_item">
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </>
  );

//   ---------------------------------End of return-----------------------------------------
};

export default SideBar;
