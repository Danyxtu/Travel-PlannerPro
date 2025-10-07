import React from 'react'
import { useNavigate } from 'react-router-dom';
import Destination from './destination/Destination';

const Destinations = ({ destinations }) => {
  const navigate = useNavigate();
  return (
    <div
      className='
        flex flex-wrap
      '
    >
      {destinations.map((destination) =>{
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
            <div className={`bg-[url('../assets/example.png')] w-[250px] h-[250px] `} />
            <h3>
              {destination.id}. {destination.city} - {destination.region}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default Destinations
