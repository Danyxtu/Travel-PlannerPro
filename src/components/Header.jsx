import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Instagram, Menu, Twitter, X } from 'lucide-react'

const Header = () => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/about', label: 'About' },
  ]

  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <header className="flex justify-between items-center h-[80px] px-4 bg-[rgba(255,255,255,0.2)] text-white">
      {/* Left Side: Socials */}
      <div className="flex gap-3">
        <Instagram />
        <Facebook />
        <Twitter />
      </div>

      {/* Hamburger Button (Mobile Only) */}
      <button className="md:hidden hover:cursor-pointer block" onClick={toggleNav}>
        <Menu size={28} />
      </button>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-[250px] bg-blue-200 z-20 flex flex-col items-start p-6 space-y-4 transform transition-transform duration-300 
        ${navOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <button className="self-end hover:cursor-pointer mb-4" onClick={toggleNav}>
          <X size={28} />
        </button>

        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setNavOpen(false)} // close when clicked
            className={({ isActive }) =>
              `
              text-lg font-medium transition-all duration-300
              ${isActive ? 'underline' : 'hover:opacity-70'}
              `
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `
              relative pb-1 transition-all duration-300 font-medium
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:bg-white after:transition-all after:duration-300
              ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full hover:opacity-70'}
              `
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
