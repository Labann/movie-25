"use client"
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import Image from 'next/image'
import { IoIosShareAlt } from "react-icons/io";
import { IMovie } from '@/app/types/my_types';
import { getGenreNames } from '@/app/util/destructureGenres';
import { formatRuntimeSafe } from '@/app/util/timeFormat';
import { ImgUrl } from '@/app/util/config';
const DiscoverCard = ({movie}: {movie: IMovie}) => {
  return (
    <div className='rounded-md p-2 w-fit bg-gray-neutral'>
        {movie.backdrop_path && <Image
            alt="discover-card"
            width={300}
            height={300}
            src={`${ImgUrl}${movie.backdrop_path}`}
            unoptimized
            className='w-full object-fit rounded-md'
        />}
        <div className="flex flex-col space-y-6">
        <h1 className='capitalize text-lg md:text-5xl'>{movie.title}</h1>
        <div className="flex space-x-2 font-bold items-center text-xs">
            <button className='border-white border p-1 cursor-pointer'>{movie?.adult? "PG-18": "PG-13"}</button>
            <p>{movie.createdAt}</p>
            <GoDotFill/>
            <p>{getGenreNames(movie.genre_ids)}</p>
            <GoDotFill/>
            <p>{formatRuntimeSafe(movie.runtime)}</p>
        </div>
        <p className='text-gray-300 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe molestias porro reprehenderit nihil hic optio, incidunt perferendis dolor eveniet temporibus quisquam, nostrum qui ea magnam quod itaque, officia nobis?</p>
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
  )
}

export default DiscoverCard