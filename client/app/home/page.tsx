"use client"
import React, {useEffect} from 'react'
import SlideShow from '@/components/SlideShow'
import { Slider } from '@/components/Carousel'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchFamousActors } from '../store/personSlice'
import Actor, { ActorLoader } from '@/components/Actor'

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFamousActors())
  }, [dispatch])
  const {person, isLoading} = useAppSelector(state => state.person);
  return (
    <div className="pt-30 bg-primary min-h-screen">
        <Slider />
        <SlideShow title='Popular searches'/>
        <SlideShow title='Trending'/>
        
        <div className='max-w-7xl mx-auto pb-14 pt-3'>
          <h3 className='text-2xl text-white capitalize'>Most Famous actor globally</h3>
          <div className="w-[80vw] overflow-x-scroll scroll-none mx-auto">
            <div className="flex items-center pt-3 space-x-3 w-fit">
              {isLoading && [1, 2, 3, 4, 5].map(item => <ActorLoader key={item}/>)}
              {!isLoading && person?.map(actor => <Actor key={actor.id} name={actor.original_name} img={actor.profile_path}/>)}
            </div>
          </div>
        </div>
        
        <SlideShow title='Recommended For you'/>
        
    </div>
  )
}

export default Home