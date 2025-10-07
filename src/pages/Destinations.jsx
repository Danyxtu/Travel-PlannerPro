import React from 'react'
import { useNavigate } from 'react-router-dom';
import Destination from './destination/Destination';

const Destinations = ({ destinations }) => {
  const navigate = useNavigate();
  return (
    <div
      className='
      
      '
    >
      {destinations.map((destination) =>{
        return (
          <h3
            className='
              
            '
            key={destination.id}
            onClick={() => navigate(`/destination/${destination.id}`, {state: destination})}
          >
            {destination.id}. {destination.city} - {destination.region}
          </h3>
        )
      })}
    </div>
  )
}

export default Destinations
