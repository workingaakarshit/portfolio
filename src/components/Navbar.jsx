import React from 'react'
import  logo  from "../assets/logo.jpg";


import { useTheme } from "../pages/ThemeContext";

function Navbar() {
   
    const { theme, toggleTheme} = useTheme();
  
    
    const navItems =[
     {link : "Home", path: "home"},
     {link : "Contact", path: "Contact"},
     {link : "Projects", path: "Projects"},
     {link : "Technologies", path: "Technologies"},
    ]
  return (
   <nav >
    <div className='text-l container mx-auto flex justify-between items-center font-medium'>
      <div className=' flex space-x-15  items-center'>
         <a href = "/" className=' text-2xl  flex items-center space-3'>
            <img src={logo} alt="" className='w-8 ml-2 mt-2 inline-block items-center' />
            <span className='ml-2 mt-3 font-bold'>Portfolio</span>
         </a>
         {/* {using map to produce nav items } */}
         <ul className='md:flex space-x-12 ml-10 mt-3'>
            {
                navItems.map(({ link, path }) => 
                        
                    <a key={link} href={path} 
                    
                    className=' hover:text-gray-300'>
                    
                     
                     {link}
                     
                    </a>)
            }
         </ul>
      </div>
      <div className='space-x-12 hidden md:flex items-center'>
        <div className='hidden lg:flex items-center hover '>
          <div className='mode-switch'>
             <label >
              <input type="checkbox" 
              onChange={ toggleTheme}
              checked = {theme === "dark"}/>
               <span className='slider-round'></span>
             </label>
          </div>
        </div>
        <button className=' bg-secondary  py-2 px-2 text-semibold  transition-all duration-300 rounded hover:text-white '> Sign Up</button>
      </div>

    </div>
   </nav>
  )
}

export default Navbar