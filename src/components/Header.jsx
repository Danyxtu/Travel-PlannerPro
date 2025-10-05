import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ onNavigate }) => {
  return (
    <header>
      <h1>Travel Planner Pro </h1>
      <nav>
        <NavLink to='/' >
          Destination
        </NavLink>
        <NavLink to='/favorites' >
          Favorites
        </NavLink>
        <NavLink to='/about' >
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
