import React from 'react'
import Profile from '../assets/photo.jpg';


const Home = () => {
  return (
    <main>
        <section className='flex'>
            <div className=' container m-auto px-4 py-10 flex gap-6'>
                <div>
                    <h1 className='font-bold text-4xl'>Hello, I'm Aakarshit</h1>
                    <h1 className='font-bold text-4xl text-blue-700'>Frontend Developer</h1>
                    <p className='mt-4 '>I am a B-tech graduate from Jaypee Institute of Information and technology, Noida seeking to apply competent development skills with focus on collaboration and passion</p>
                </div>
                <div className='ml-auto flex-none'>
                    <img src={Profile} alt=""  className='circular--square' width={220} />
                </div>
            </div>
        </section>
       

    </main>
  )
}

export default Home