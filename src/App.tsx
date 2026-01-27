// import './App.css'
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Navbar from "./compoents/Navbar";
import SideBar from "./compoents/SidebarNav";
import { About, Projects, Contact, Home3 } from "./Pages";
import Hamburg from "./compoents/HamBurger";
import Footer from "./compoents/Footer/Footer";
import useOnlineStatus from "./useOnlineStatus";
import ScrollToTop from "./compoents/scrollToTop";
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [openSidebar, setCloseSidebar] = useState<boolean>(false);

  useEffect(() => {
    const userPref = localStorage.getItem("darkVal");
    if (userPref === null) {
      localStorage.setItem("darkVal", JSON.stringify(darkMode));
    } else {
      setDarkMode(JSON.parse(userPref)); // convert string back to boolean
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (localStorage.getItem("darkVal") === "true") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handelSideBarOpen = () => {
    setCloseSidebar(!openSidebar);
  };

  // -----------------------------------------
  const online = useOnlineStatus();

  if (!online) {
    return (
      <>
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
          You’re offline
        </div>
      </>
    );
  }

  return (
    <>
      <main className=" min-h-screen transition-colors duration-1000 ">
        <Router>
          <ScrollToTop/>
          <div className="inline w-screen  flex justify-between items-center p-5 md:hidden">
            <NavLink
              to="/"
              className="w-10 h-10 rounded-lg bg-[#FFFAFA] 
              items-center flex justify-center font-bold  shadow-md
              "
            >
              <p className="text-blue-500">AC</p>
            </NavLink>
            <Hamburg onClick={handelSideBarOpen} className="w-5 h-5" />
          </div>
          <div className="inline w-screen flex justify-end relative top-4 right-10 md:hidden ">
            <SideBar
              openSidebar={openSidebar}
              setCloseSidebar={setCloseSidebar}
              darkMode={darkMode}
              setMode={setDarkMode}
            />
          </div>
          <span className="hidden xs:hidden sm:hidden  md:inline">
            <Navbar darkMode={darkMode} setMode={setDarkMode} />
          </span>

          <Routes>
            <Route path="/" element={<Home3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>

      <Footer />
    </>
  );
}

export default App;
