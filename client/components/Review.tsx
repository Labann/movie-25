"use client"
import React from 'react'
import { GoStarFill } from "react-icons/go";

const Review = () => {
  return (
    <div className='rounded-xl p-6 bg-gray-neutral w-full text-xl flex flex-col space-y-4'>
        <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-1">
                <p>Aniket Roy</p>
                <p className='text-gray-300'>From India</p>
            </div>
            <button className='border border-white p-2 rounded-2xl flex items-center space-x-2'>
                <span className='flex space-x-2'>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                </span>
                <p className='text-xs text-white'>4.5</p>
            </button>
            
        </div>
        <p className='p-1 text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt aut quos, rerum quisquam quaerat ipsam sequi magni minima voluptatem.
        </p>
    </div>
  )
}

export default Review