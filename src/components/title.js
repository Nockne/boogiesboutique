import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom'

const title = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen">
        <TypeWriterEffect
          textStyle={{ fontFamily: 'Mono',
          color: 'white',
          fontSize: '4em'}}
          startDelay={100}
          cursorColor="white"
          text="Boogie's Boutique"
          typeSpeed={80}
          eraseSpeed={100}
        />
        <p className="font-mono text-white bg-gray-500 py-6 px-10 m-10 text-xl rounded-xl hover:bg-white hover:text-black hover:text-2xl">
            <Link to="/shop">Order Now</Link>
        </p>
    </div>
  )
}

export default title