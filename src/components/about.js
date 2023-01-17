import React from 'react'

const about = () => {
  return (
    <div className="Main">
        <div className="m-10">
            <div className="text-white font-mono flex flex-col justify-center items-center">
                <h2 className="text-3xl m-5">About Me</h2>
                <div className='grid grid-cols-1'>
                  <div>
                    <p className="w-64">My name is Asia, I am 20 years old. Boogie's Boutique is based
                    in Corvallis, Oregon. My passion is creating small jewelery pieces that are made
                    with quality while also being affordable.</p>
                    <h1 className='text-3xl mt-5'>Contact me at:</h1>
                    <p className="">Email: asia.jade@outlook.com</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about
