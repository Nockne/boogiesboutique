import React from 'react'
import Necklace from '../images/image1.jpg'
import Earrings from '../images/image2.jpg'

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center font-mono bg-black">
        <div className="m-10">
            <div className="text-white font-mono flex flex-col justify-center items-center">
                <h2 className="text-3xl">Crystal Necklaces</h2>
                <p className="p-3">Hand made necklaces curated from various crystals.</p>
            </div>
            <img src={Necklace} alt="necklace" className="h-full w-full object-contain rounded mb-20 shadow p-5"></img>
        </div>
      
      <div className="m-10">
        <div className="text-white font-mono flex flex-col justify-center items-center">
                <h2 className="text-3xl">Artisan Earrings</h2>
                <p className="p-3">Delicate sterling silver earrings made with various pendants.</p>
        </div>
        <img src={Earrings} alt="necklace" className="h-full w-full object-contain rounded mb-20 shadow p-5"></img>
      </div>
    </div>
  )
}

export default Content
