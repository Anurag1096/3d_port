
// import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './compoents/Navbar'
import {Home,About,Projects,Contact} from "./Pages";
function App() {
  

  return (
    
    <main className=' bg-slate-300/20 h-[100%]'>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/project"  element={<Projects/>}/>
        <Route path="/contact"  element={<Contact/>}/>

      </Routes>
    </Router>

    </main>



  
  )
}

export default App
