import React from 'react'

import {motion } from 'framer-motion/'
function Card({name, description, image}: {name: string, description: string, image: string}) {
  console.log("Card", name, description, image)
  return (
    <div
    className="bg-black/60 shadow-amber-200 border border-black0 shadow-lg p-4 rounded-lg overflow-hidden"
   
  >
        <img src={image} alt={name} className="w-full rounded-tl-3xl rounded-br-4xl h-80 object-cover object-center" />
        <div className="p-4">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <p className="text-gray-300">{description}</p>
        </div>
    </div>
  )
}
export default Card