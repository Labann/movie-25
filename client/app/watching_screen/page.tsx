"use client";
import React from 'react'
import Screen from '@/components/Screen';
import Movie_details from '../../components/Movie_details';
import Actors from '@/components/Actors';
import Reviews from '@/components/Reviews';
const Watching_screen = () => {
  return (
    <div className='bg-primary'>
        <Screen />
        <Movie_details />
        <Actors title='Top Cast'/>
        <Reviews/>
    </div>
  )
}

export default Watching_screen