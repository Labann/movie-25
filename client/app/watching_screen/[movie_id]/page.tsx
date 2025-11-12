"use client";
import React from 'react'
import Screen from '@/components/Screen';
import Movie_details from '../../../components/Movie_details';
import Actors from '@/components/Actors';
import Reviews from '@/components/Reviews';
import { useParams } from 'next/navigation';
const Watching_screen = () => {
  const {movie_id} = useParams<{movie_id: string}>();
  return (
    <div className='bg-primary'>
        <Screen movie_id={movie_id}/>
        <Movie_details movie_id={movie_id}/>
        <Actors title='Top Cast'/>
        <Reviews/>
    </div>
  )
}

export default Watching_screen