import React from 'react'
import { Link } from 'react-router-dom'
import Bats from '../images/bats.jpg'
import Fairy from '../images/fairy.jpg'
import Necklaces from '../images/image1.jpg'
import Jade from '../images/image2.jpg'

const Shop = () => {
  return (
    <div className="">
        <h1 className="text-white m-10 font-mono font-bold text-3xl">Shop</h1>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 font-mono font-bold m-9">
            <Link to="/soldout">
                <div className="bg-white rounded-lg shadow-xl hover:ring-4 hover:ring-yellow-400">
                    <p className="m-2 pt-6">Crystal Necklaces - $5</p>
                    <img src={Necklaces} alt="necklace" className="p-4 rounded-3xl"></img>
                </div>
            </Link>
            <Link to="/soldout">
                <div className="bg-white rounded-lg shadow-xl hover:ring-4 hover:ring-yellow-400">
                    <p className="m-2 pt-6">Bat Earrings - $10</p>
                    <img src={Bats} alt="Bats" className="p-4 rounded-3xl"></img>
                </div>
            </Link>
            <Link to="/soldout">
                <div className="bg-white rounded-lg shadow-xl hover:ring-4 hover:ring-yellow-400">
                    <p className='m-2 pt-6'>Fairy Earrings - $10</p>
                    <img src={Fairy} alt="Fairy" className="p-4 rounded-3xl"></img>
                </div>
            </Link>
            <Link to="/soldout">
                <div className="bg-white rounded-lg shadow-xl hover:ring-4 hover:ring-yellow-400">
                    <p className='m-2 pt-6'>Jade Earrings - $10</p>
                    <img src={Jade} alt="Jade" className="p-4 rounded-3xl"></img>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Shop
