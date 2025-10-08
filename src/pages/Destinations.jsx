import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Destination from './destination/Destination';
import image from '../assets/example.png'
/*
itinerary builder

user -> unput ->  Day 1
                  Time
                  Activity
                  Description

*/
const Destinations = ({ destinations }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  let filtered = destinations.filter((destination) =>
    destination.city.toLowerCase().includes(q.toLowerCase()) ||
    destination.region.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div
      className='
        flex flex-col
        items-center
        w-screen
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
          flex flex-wrap
          h-[500px] w-full
          overflow-y-scroll
        '
      >
        
        {filtered.map((destination) =>{
          return (
            <div
              className='
                bg-white opacity-60
                w-1/4 h-[450px]
                m-[5px]
              '
              key={destination.id}
              onClick={() => navigate(`/destination/${destination.id}`, {state: destination})}
            >
              <div className={`bg-[url('../assets/example.png')] max-w-[250px] h-[250px] `} />
              <h3>
                {destination.id}. {destination.city} - {destination.region}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Destinations
