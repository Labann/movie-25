"use client"
import React from 'react'
import Actor, { ActorLoader } from './Actor'
import { useAppSelector } from '@/app/hooks/redux'
const Actors = ({title}: {title: string}) => {
  const {cast, isLoading} = useAppSelector(state => state.movie);
  const {person} = useAppSelector(state => state.person)
  const loadingPerson = useAppSelector(state => state.person.isLoading);
  return (
    <div className='max-w-7xl mx-auto py-4 p-4'>
      <h3 className='text-lg text-white capitalize font-bold'>{title}</h3>
      <div className="w-[90vw] xl:w-[85vw] overflow-x-scroll scroll-none">
        <div className="flex items-center pt-3 space-x-3 w-fit">
          {isLoading || loadingPerson && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => <ActorLoader key={item}/>)}
          {!loadingPerson && title === "Most Famous actor globally" && person.map(actor => <Actor key={actor.id} name={actor.original_name} img={actor.profile_path}/>)}
          {!isLoading && title === "Top Cast" && cast.map(p => <Actor key={p.id} name={p.original_name} img={p.profile_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default Actors