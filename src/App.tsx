
// import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './compoents/Navbar'
import {Home,About,Projects,Contact,Home2} from "./Pages";
function App() {
  

  return (
    
    <main className=' bg-[#08113A] h-full'>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home2/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/project"  element={<Projects/>}/>
        <Route path="/contact"  element={<Contact/>}/>

      </Routes>
    </Router>

    </main>



  
  )
}

export default App
