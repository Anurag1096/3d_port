
// import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './compoents/Navbar'
import {About,Projects,Contact,Home3} from "./Pages";
function App() {
  

  return (
    
    <main className=' bg-slate-300/20 h-full'>

    <Router>
      <Navbar/>
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
