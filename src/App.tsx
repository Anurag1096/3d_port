
// import './App.css'
import {useState,useEffect} from "react"
import { BrowserRouter as Router,Routes,Route, NavLink } from 'react-router-dom'
import Navbar from './compoents/Navbar'
import SideBar from "./compoents/SidebarNav";
import {About,Projects,Contact,Home3} from "./Pages";
function App() {
  const [darkMode , setDarkMode] = useState<boolean>(false)
  const [openSidebar,setCloseSidebar] =useState<boolean>(false)
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

const handelSideBarOpen=()=>{
  console.log("clicked")
  setCloseSidebar(!openSidebar)
}


// -----------------------------------------

  return (
    
    <main className=" min-h-screen transition-colors duration-700 ">
    
    
    <Router>
      <div onClick={handelSideBarOpen} className="inline w-screen  flex justify-between relative top-4 right-10 md:hidden">
       
        <NavLink
              to="/"
              className="w-10 h-10 rounded-lg bg-[#FFFAFA] 
              items-center flex justify-center font-bold  shadow-md
              "
            >
              <p className="text-blue-500">AC</p>
            </NavLink>
      <h1 >open</h1>
      </div>
      <div className="inline w-screen flex justify-end relative top-4 right-10 md:hidden ">
        <SideBar openSidebar={openSidebar} setCloseSidebar={setCloseSidebar} darkMode={darkMode} setMode={setDarkMode}/>
     
      </div>
      <span className="hidden xs:hidden sm:hidden  md:inline">

      <Navbar  darkMode={darkMode} setMode={setDarkMode}/>
      </span>
        
      <Routes>
        <Route path="/"  element={<Home3/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/project"  element={<Projects/>}/>
        <Route path="/contact"  element={<Contact/>}/>

      </Routes>
    </Router>
   
    </main>



  
  )
}

export default App
