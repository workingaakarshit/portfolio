
import {ThemeProvider} from "./pages/ThemeContext";
import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
function App() {
  

  return (
    <>
     <ThemeProvider>
         <Navbar/>
         <Home/>
         </ThemeProvider>
         <Projects/>
         <Skills/>
        
			
    </> 
  )
}

export default App
