import React from 'react'
import danny from '../assets/danny.jpg'
import charles from '../assets/charles.jpg'
import Ameer from '../assets/Ameer.jpg'
import Sheena from '../assets/Sheena.jpg'
import Benedict from '../assets/Benedict.jpg'
import Footer from '../components/Footer'

const About = () => { 
  return (
    <div className='h-screen overflow-y-scroll'> 
      <div>
        <h1 className= 'text-4xl font-poppins font-bold text-center mt-8'> 
          ABOUT TRAVEL PLANNER PRO 
        </h1> 
        <div>
        <p className='text-center font-poppins font-semibold text-lg mt-15 mx-8 pb-8 bg-[rgba(255,255,255,0.5)] text-black p-5 rounded-lg shadow-lg'> 
            Travel Planner Pro is an all-in-one app that helps you organize trips with ease. 
            Plan itineraries, book flights, track expenses, and discover destinations all in one place. 
            Stay organized, save time, and enjoy a hassle-free travel experience.
          </p>
        </div> 
      </div>
      <h1 className="text-4xl font-bold text-center  mt-[400px] ">The Developers:</h1> 
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
          <div className="bg-white text-black p-5 rounded-lg shadow-lg ">
            <div className="text-center">
              <img 
                src={danny} 
                className="w-[300px] h-[200px] object-cover rounded-lg 
                transform transition-transform duration-300 hover:scale-110"/>
              <h1 className="font-bold mt-4">Danny Dinglasa Jr</h1>
              <h2 className="text-sm">Project Manager & Lead Developer</h2>
            </div>
          </div>

          <div className="bg-white text-black p-5 rounded-lg shadow-lg ">
            <div className="text-center">
              <img 
                src={charles} 
                className="w-[300px] h-[200px] object-cover rounded-lg 
                transform transition-transform duration-300 hover:scale-110"/>
              <h1 className="font-bold mt-4">Charles Dominic O. Gumondas</h1>
              <h2 className="text-sm">Frontend Developer & Business Analyst</h2>
            </div>
          </div>

          <div className="bg-white text-black p-5 rounded-lg shadow-lg ">
            <div className="text-center">
              <img 
                src={Benedict} 
                className="w-[300px] h-[200px] object-cover rounded-lg 
                transform transition-transform duration-300 hover:scale-110"/>
              <h1 className="font-bold mt-4">Benedict C. Jambre</h1>
              <h2 className="text-sm">Backend Developer & System Analyst</h2>
            </div>
          </div>
          <div className="bg-white text-black p-5 rounded-lg shadow-lg ">
            <div className="text-center">
              <img 
                src={Sheena} 
                className="w-[300px] h-[200px] object-cover rounded-lg transform 
                transition-transform duration-300 hover:scale-110"/>
              <h1 className="font-bold mt-4">Sheena Dianne DeGuzman</h1>
              <h2 className="text-sm">Ui/Ux Developer</h2>
            </div>
          </div>
          <div className="bg-white text-black p-5 rounded-lg shadow-lg ">
            <div className="text-center">
              <img 
                src={Ameer} 
                className="w-[300px] h-[200px] object-cover rounded-lg 
                transform transition-transform duration-300 hover:scale-110"/>
              <h1 className="font-bold mt-4">Ameer Sabtal</h1>
              <h2 className="text-sm">Quality Assurance & Assistant UI/UX Designer</h2>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default About;
