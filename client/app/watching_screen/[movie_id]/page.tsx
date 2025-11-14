"use client";
import React, { useEffect } from 'react'
import Screen from '@/components/Screen';
import Movie_details from '../../../components/Movie_details';
import Actors from '@/components/Actors';
import Reviews from '@/components/Reviews';
import { useParams } from 'next/navigation';
import { useAppDispatch } from '@/app/hooks/redux';
import { fetchMovieCast } from '@/app/store/movieSlice';
const Watching_screen = () => {
  const {movie_id} = useParams<{movie_id: string}>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(movie_id){
      dispatch(fetchMovieCast({movie_id}))
    }
  }, [movie_id, dispatch])
  return (
    <div className='bg-primary'>
        <Screen movie_id={parseInt(movie_id)}/> 
        <Movie_details movie_id={movie_id}/>
        <Actors title='Top Cast'/>
        <Reviews movie_id={movie_id}/>
    </div>
  )
}

export default Watching_screen