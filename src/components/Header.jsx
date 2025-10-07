import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Header = ({ onNavigate }) => {
  const Navlinks = [
    {to: '/', label: 'Home'},
    {to: '/destinations', label: 'Destinations'},
    {to: '/favorites', label: 'Favorites'},
    {to: '/about', label: 'About'},
  ]
  return (
    <header 
      className='
        flex justify-between items-center h-[80px]
        
      '
    >
      <div className='
        flex flex-row justify-around
        text-white
        w-[100px] ml-[15px]
      '
      >
        <Instagram />
        <Facebook />
        <Twitter />
      </div>
      <nav
        className='w-auto'>
        {Navlinks.map((Link) => (
          <NavLink
          key={Link.to}
          to={Link.to}
          className={({isActive}) =>
          `
            relative pb-1 transition-all duration-300 nav-txt mr-[26px] font-medium
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
            after:bg-white after:transition-all after:duration-450
            ${isActive ? 'after:w-full' : 'after:w-0 focus:after:w-full hover:opacity-60'}
          `}
          >
            {Link.label}
          </NavLink>
        )
        
        )}
      </nav>
    </header>
  )
}

export default Header
