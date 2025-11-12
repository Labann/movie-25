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
import Link from 'next/link';
const DiscoverCard = ({movie}: {movie: IMovie}) => {
  return (
    <div className='rounded-md p-2 max-w-xl bg-gray-neutral overflow-hidden'>
        {movie.poster_path && <Image
            alt="discover-card"
            width={300}
            height={300}
            src={`${ImgUrl}w780${movie.poster_path}`}
            unoptimized
            className='w-full object-fit rounded-md hover:scale-105 h-[30em]'
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
        <p className='text-gray-300 text-md'>{movie.overview}</p>
        <div className="pt-4 flex space-x-3 items-center">
            <Link href={`/watching_screen/${movie.id}`} className='bg-gray-neutral border-gray-semibold border hover:bg-gray-light cursor-pointer flex text-sm items-center px-6 py-2 space-x-2 rounded-2xl capitalize text-white'>
                <FaPlay />
                <p>Play Now</p>
            </Link>
            
            <button className='cursor-pointer text-md border-gray-semibold border rounded-full p-1'><FaPlus size={'1.5em'}/>{""}</button>
            <button className='cursor-pointer text-md border-gray-semibold border rounded-full p-1'><IoIosShareAlt size={"1.5em"}/>{""}</button>

        </div>  
    </div>
    </div>
  )
}

export const DiscoverCardLoader = () => {
    return (
        <div className='bg-gray-neutral rounded-md max-w-xl p-3'>
            <div className="h-[30em] bg-gray-light animate-pulse w-full rounded-md"></div>
            <div className="flex flex-col space-y-3 py-3">
                <div className="h-3 w-1/4 animate-pulse rounded-md bg-gray-light"></div>
                <div className="h-3 w-1/2 animate-pulse rounded-md bg-gray-light"></div>
                <div className="h-3 w-3/4 animate-pulse rounded-md bg-gray-light"></div>
            </div>
        </div>
    )
} 
export default DiscoverCard