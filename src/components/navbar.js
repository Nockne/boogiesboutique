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
              <p className="m-8">Home</p>
            </Link>
            <Link to="/shop">
              <p className="m-8">Shop</p>
            </Link>
            <Link to="/about">
              <p className="m-8">About</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
