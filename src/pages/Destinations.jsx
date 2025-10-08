import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Destination from './destination/Destination';
import image from '../assets/example.png'
import { Heart, TruckElectric } from 'lucide-react';
/*
itinerary builder

user -> unput ->  Day 1
                  Time
                  Activity
                  Description

*/
const Destinations = ({ destinations }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  let filtered = destinations.filter((destination) =>
    destination.city.toLowerCase().includes(q.toLowerCase()) ||
    destination.region.toLowerCase().includes(q.toLowerCase())
  );

  const toggleFavorites = (id) =>{
    setFavorites((prevState) => {
      const newFavorites = prevState.includes(id) ? 
        prevState.filter((i) => i !== id):
        [...prevState, id]
    
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    return newFavorites;
  });
  }

  return (
    <div
      className='
        flex flex-col 
        items-center
        w-screen h-full
      '
    >
      <input 
          className='
            py-[8px] px-[10px]
            bg-white opacity-80
            outline-none rounded-[8px]
            font-poppins font-semibold
            w-[500px]

          '
          value={q}
          onChange={(e) => setSearchParams({q: e.target.value})}
          placeholder='Search Something...'
        />
      <div
        className='
          flex flex-wrap justify-center gap-[30px]
          h-[580px] w-full
          overflow-y-scroll
          mt-[20px]
        '
      >
        
        {filtered.map((destination) =>{
          return (
            <div
              className='
                bg-[rgba(255,255,255,0.6)]
                min-h-[430px] sm:w-1/2 md:w-1/3 lg:w-1/5
                rounded-[15px]
              '
              key={destination.id}
            >
              <div
                className='
                  flex items-center flex-col
                  w-full h-[300px]
                  pt-[20px]
                  mb-[20px]
                  px-[20px]
                  
                '
              >
                <img 
                  src={image}
                  className='
                    rounded-[10px]
                    h-[300px] w-[240px]
                    transition-transform duration-300 
                    hover:scale-110 hover:cursor-pointer
                    active:scale-105
                  '
                  onClick={() => navigate(`/destination/${destination.id}`, {state: destination})}
                />
                <div
                  className='
                    pt-[10px]
                    flex justify-between
                    w-full
                  '
                >
                  <h3 
                    className='
                      font-semibold
                      text-start
                      mr-[20px]
                      w-[200px]
                    '
                    onClick={() => navigate(`/destination/${destination.id}`, {state: destination})}
                  >
                    {destination.city} - {destination.region}
                  </h3>
                  <Heart 
                    className={`
                      text-[20px] z-10 
                      hover:cursor-pointer
                      active:scale-80 transition-transform duration-100
                      ${favorites.includes(destination.id) ? 'fill-red-600' : 'bg-none'}
                    `}
                    onClick={() => toggleFavorites(destination.id)}
                  />
                </div>
              </div>
             
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Destinations
