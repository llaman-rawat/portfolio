import Home from "./Components/Home/Home"

import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Navbar from "./components/navbar/Navbar"
import Project from "./Components/Projects/Project"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden ">
   <Navbar/>
   <Home/>
   <About/>
   <Project/>
   <Experience/>
   <Contact/>
     
    </div>
  )
}

export default App
