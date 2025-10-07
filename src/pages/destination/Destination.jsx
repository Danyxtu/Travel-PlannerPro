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
      <h1>
        {destination.id} <br />
        {destination.city} <br />
        {destination.region} <br />
      </h1>
    </div>
  )
}

export default Destination
