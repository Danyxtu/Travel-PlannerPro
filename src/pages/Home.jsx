import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className='
        flex items-center flex-col my-[50px]
      '
    >
      <h1
        className='
        text-[100px] text-center font-bold text-gray-300 text-outline
      '>
        Travel Planner Pro
      </h1>
      <button
        onClick={() => navigate('/destinations')}
        className={`
          font-bold 
          border-white border-2 rounded-[8px]
          p-[7px]
          relative
          after:content-[''] after:left-0 after:h-[10px] after:absolute
          hover:after:w-full
          `}
      >
        Let's Get Started
      </button>
    </div>
  )
}

export default Home
