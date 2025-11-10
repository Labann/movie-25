"use client"
import React from 'react'
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { LiaIconsSolid } from "react-icons/lia";
import { TiStarHalf } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";


const Movie_details = () => {
  return (
    <div className="bg-primary py-10 p-4">
        <div className='mx-auto max-w-7xl'>
            <h3 className='text-gray-semibold'>More details</h3>
            <div className="grid grid-cols-4 gap-3">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-lg">
                        <IoCalendarClearOutline className=' font-semibold'/>
                        <p className='capitalized'>Released Year</p>
                    </div>
                    <p className='text-white font-extralight'>2014</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-lg">
                        <IoLanguageOutline className=' font-semibold'/>
                        <p className='capitalized'>Available languages</p>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <button className='bg-black rounded-md px-2 py-1 cursor-pointer'>English</button>
                        <button className='bg-black rounded-md px-2 py-1 cursor-pointer'>French</button>
                        <button className='bg-black rounded-md px-2 py-1 cursor-pointer'>Spanish</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-lg">
                        <LiaIconsSolid className=' font-semibold'/>
                        <p className='capitalized'>Genres</p>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <button className='bg-black rounded-md px-2 py-1 cursor-pointer'>Romance</button>
                        <button className='bg-black rounded-md px-2 py-1 cursor-pointer'>Drama</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-lg">
                        <GoStarFill className=''/>
                        <p className='capitalized'>Ratings</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <GoStarFill className='fill-amber-300'/>
                        <GoStarFill className='fill-amber-300'/>
                        <GoStarFill className='fill-amber-300'/>
                        <GoStarFill className='fill-amber-300'/>
                        <TiStarHalf className='fill-amber-300'/>
                        <span className='text-white text-xs'>4.5</span>
                    </div>
                </div>

            </div>            
        </div>
    </div>
    
  )
}

export default Movie_details