"use client"
import React from 'react'
import Image from 'next/image'
import { IMovie } from '@/app/types/my_types';
import Link from 'next/link';
import { ImgUrl } from '@/app/util/config';
const Card = ({movie}: {movie: IMovie}) => {
  return (
    <Link href={`/watch_screen/${movie.id}`} className='w-[17em] overflow-hidden'>
        {movie.backdrop_path && <Image 
            src={`${ImgUrl}w780${movie?.poster_path}`}
            alt='card-img'
            width={200}
            height={200}
            unoptimized
            className='rounded-md h-[12em] w-full object-fit object-cover hover:scale-105 overflow-hidden'
        />}
        <div className="flex justify-between items-center py-3 text-gray-light">
            <h5 className='uppercase text-xs'>{movie.original_title}</h5>
            <div className="flex text-xs items-center space-x-2">
                <span className='capitalize'>Popularity</span>
                <p>{movie.popularity}</p>
            </div>
        </div>
    </Link>
  )
}

export const CardLoader = () => {
  return (
    <div className='w-[17em]'>
      <div className="h-[12em] bg-gray-light animate-pulse"></div>
      <div className="pt-4 flex flex-col space-y-3">
        <div className="w-1/4 h-4 bg-gray-light animate-pulse"></div>
        <div className="w-1/2 h-4 bg-gray-light animate-pulse"></div>
        <div className="w-3/4 h-4 bg-gray-light animate-pulse"></div>
      </div>
    </div>
  )
}
export default Card