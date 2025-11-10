"use client"
import React from 'react'
import Image from 'next/image'
const RecentlyVisitedCard = () => {
  return (
    <div className="w-fit mx-auto">
        <Image 
            src={"/card_img.jpg"}
            alt='card-img'
            width={90}
            height={100}
            className='rounded-md'
        />
        <p className='text-gray-400 capitalize text-sm text-center'>John WICK</p>
        </div>
  )
}

export default RecentlyVisitedCard