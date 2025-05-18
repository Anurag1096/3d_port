
// import './App.css'
import {useState,useEffect} from "react"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './compoents/Navbar'
import {About,Projects,Contact,Home3} from "./Pages";
function App() {
  const [darkMode , setDarkMode] = useState<boolean>(false)
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    
    <main className=" min-h-screen transition-colors duration-700 ">

    
    <Router>
      <Navbar darkMode={darkMode} setMode={setDarkMode}/>
      
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
