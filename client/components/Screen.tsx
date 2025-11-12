"use client"
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
const Screen = ({movie_id}: {movie_id: string}) => {
  return (
    <div className='w-full relative pt-34 min-h-[70vh] bg-cover bg-center' style={{backgroundImage: "url('/bg_cover.jpg')"}}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-12">
                
                <div className="max-w-2xl z-20 col-span-12 md:col-span-8 text-white">
                <div className="flex flex-col space-y-6">
                    <h1 className='capitalize text-2xl md:text-5xl'>The Fault in our stars</h1>
                    <div className="flex space-x-2 font-bold items-center text-xs">
                        <button className='border-white border p-1 cursor-pointer'>PG-13</button>
                        <p>06/03/2014</p>
                        <GoDotFill/>
                        <p>Romance, Drama</p>
                        <GoDotFill/>
                        <p>2h 6min</p>
                    </div>
                    <p className='text-gray-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe molestias porro reprehenderit nihil hic optio, incidunt perferendis dolor eveniet temporibus quisquam, nostrum qui ea magnam quod itaque, officia nobis?</p>
                    <div className="pt-4 flex space-x-3 items-center">
                        <button className='bg-gray-neutral cursor-pointer flex text-sm items-center px-6 py-2 space-x-2 rounded-2xl capitalize text-white'>
                            <FaPlay />
                            <p>Play Now</p>
                        </button>
                        <button className='border-gray-semibold text-sm border cursor-pointer px-6 py-2 rounded-2xl text-white'>Trailer</button>
                        <button className='cursor-pointer text-md border-gray-semibold border rounded-full p-1'><FaPlus size={'1.5em'}/>{""}</button>
                        <button className='cursor-pointer text-md border-gray-semibold border rounded-full p-1'><IoIosShareAlt size={"1.5em"}/>{""}</button>

                    </div>  
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Screen