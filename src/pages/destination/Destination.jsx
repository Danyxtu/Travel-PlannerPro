import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Destination = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const destination = location.state;
  console.log(location)

  return (
    <div>
      <img src="" alt="" />
      <h1>
        {destination.id} <br />
        {destination.city} <br />
        {destination.region} <br />
      </h1>
      <table>
        <thead>
          
        </thead>
        <tbody>

        </tbody>
      </table>
      <button

        onClick={() => navigate(`itinerary`, {state: destination})}
      >
        Travel Plan
      </button>
    </div>
  )
}

export default Destination
