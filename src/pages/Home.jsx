import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex items-center flex-col my-[50px]'>
      <h1
        className='
          text-[100px] mt-[50px] text-center font-extrabold
          bg-gradient-to-r from-[#cce5ff] via-[#e0f7ff] to-[#a3bffa]
          text-transparent bg-clip-text
          drop-shadow-[0_0_15px_rgba(173,216,230,0.4)]
        '
      >
        Travel Planner Pro
      </h1>

      <button
        onClick={() => navigate('/destinations')}
        className={`
          group font-semibold text-[22px]
          text-[#e0f7ff] border-2 border-[#e0f7ff]
          rounded-[10px] px-8 py-3 mt-[70px]
          flex items-center gap-3
          relative overflow-hidden
          backdrop-blur-sm
          transition-all duration-300 hover:cursor-pointer
          hover:scale-105 hover:shadow-[0_0_25px_rgba(224,247,255,0.5)]
          active:scale-95
        `}
      >
        <span className="relative">
          Let’s Get Started
          <span
            className="
              absolute bottom-[-3px] left-0 w-0 h-[2px]
              bg-[#a3bffa] group-hover:w-full
              transition-all duration-500 ease-out
            "
          ></span>
        </span>

        <ArrowRight
          className="transition-transform duration-300 group-hover:translate-x-2 text-[#a3bffa]"
          size={26}
        />
      </button>
    </div>
  )
}

export default Home
