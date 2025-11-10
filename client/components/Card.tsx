"use client"
import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react';
const Card = () => {
  return (
    <div className='w-[17em]'>
        <Image 
            src={"/card_img.jpg"}
            alt='card-img'
            width={200}
            height={200}
            className='rounded-md h-[12em] w-full object-fit object-cover'
        />
        <div className="flex justify-between items-center py-3 text-gray-light">
            <h5 className='uppercase text-xs'>WEAPONS</h5>
            <div className="flex text-xs items-center space-x-2">
                <Star size={"1em"} className='fill-amber-300'/>
                <p>8.5</p>
            </div>
        </div>
    </div>
  )
}

export default Card