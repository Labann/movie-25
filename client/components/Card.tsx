"use client"
import React from 'react'
import Image from 'next/image'
import { IMovie } from '@/app/types/my_types';
import Link from 'next/link';
const Card = ({movie}: {movie: IMovie}) => {
  return (
    <Link href={`/watch_screen/${movie.id}`} className='w-[17em]'>
        {movie.backdrop_path && <Image 
            src={movie?.backdrop_path}
            alt='card-img'
            width={200}
            height={200}
            className='rounded-md h-[12em] w-full object-fit object-cover'
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

export default Card