"use client"
import React from 'react'
import Actor, { ActorLoader } from './Actor'
import { useAppSelector } from '@/app/hooks/redux'
const Actors = ({title}: {title: string}) => {
  const {cast, isLoading} = useAppSelector(state => state.movie);
  return (
    <div className='max-w-7xl mx-auto pb-14 p-4 pt-3'>
      <h3 className='text-2xl text-white capitalize'>{title}</h3>
      <div className="xl:w-[80vw] w-[90vw] overflow-x-scroll scroll-none mx-auto">
        <div className="flex items-center pt-3 space-x-3 w-fit">
          {isLoading && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ActorLoader key={item}/>)}
          {!isLoading && cast.map(actor => <Actor key={actor.id} name={actor.original_name} img={actor.profile_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default Actors