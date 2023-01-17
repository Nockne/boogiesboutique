import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 w-screen bg-white">
      <Link to="/">
      <p className="pl-8 font-mono font-bold text-xl underline">Boogie's Boutique</p>
      </Link>

        
        <div className="pr-8 font-mono flex underline">
            <Link to="/">
              <p className="p-8 hover:bg-black hover:text-white">Home</p>
            </Link>
            <Link to="/shop">
              <p className="p-8 hover:bg-black hover:text-white">Shop</p>
            </Link>
            <Link to="/about">
              <p className="p-8 hover:bg-black hover:text-white">About</p>
            </Link>
            <Link to="/contact">
              <p className="p-8 hover:bg-black hover:text-white">Contact</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
