import React from 'react'
import project1 from '../assets/password_generator.jpg';
import project2 from '../assets/currency_converter.jpg';
import project3 from '../assets/Bubble-game.jpg';
import project4 from '../assets/Chat-app.jpg';
import project5 from '../assets/Todo list.jpg';
import project6 from '../assets/Sorting.jpg';

const Projects = () => {
  return (
    
     <section>
        <div className='container m-auto px-4 sm:py-4 '>
                    <h2 className='text-xl ml-4 mt-1 font-semibold'> Projects</h2>
        <div className=' flex-flex-col sm:flex-row grid grid-cols-3 gap-10 mt-10'>
            <div className='border p-5 rounded-lg'>
                    <img src={project1} className='object-cover h-48 rounded-lg' />
                    <h3 className='underline'>Password Generator</h3>
                    <p className="mt-3">A random password generator to understand hooks in React</p>
            </div>
            <div className='border p-5 rounded-lg'>
                    <img src={project2} className='object-cover h-48 rounded-lg'/>
                    <h3 className='underline'>Currency Converter</h3>
                    <p className="mt-3">A currency converter for understanding asynchronous JavaScript</p>
            </div>
            <div className='border p-5 rounded-lg col-span-3 md:col-span-1'>
                    <img src={project6} className='object-cover h-48 rounded-lg'/>
                    <h3 className='underline'>Sorting Visualisor</h3>
                    <p className="mt-3">A sorting visualisor comapring different algorithms and their time complexities in react </p>
             </div>
            <div className='border p-5 rounded-lg'>
                    <img src={project3} className='object-cover h-48 rounded-lg'/>
                    <h3 className='underline'>Bubble game</h3>
                    <p className="mt-3">A simple game for understanding event bubbling</p>
            </div>
            <div className='border p-5 rounded-lg col-span-3 md:col-span-1'>
                    <img src={project4} className='object-cover h-48 rounded-lg'/>
                    <h3 className='underline'>Chat app</h3>
                    <p className="mt-3">A chat app in React which has backend as a framework assist from appwrite</p>
             </div>
             <div className='border p-5 rounded-lg col-span-3 md:col-span-1'>
                    <img src={project5} className='object-cover h-48 rounded-lg'/>
                    <h3 className='underline'>Todo list</h3>
                    <p className="mt-3">A basic Todo list app in javaScript </p>
             </div>
            
        </div>
    </div>

 </section>
  )
}

export default Projects