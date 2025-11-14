"use client"
import React, {useEffect} from 'react'
import SlideShow from '@/components/SlideShow'
import { Slider } from '@/components/Carousel'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchFamousActors } from '../store/personSlice'
import Actor, { ActorLoader } from '@/components/Actor'
import Actors from '@/components/Actors'
import Screen from '@/components/Screen'
const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFamousActors())
  }, [dispatch])
  
  const {movie} = useAppSelector(state => state.movie)
  return (
    <div className="pt-30 bg-primary min-h-screen">
        <Screen movie_id={String(movie.id)}/>
        <SlideShow title='Popular searches' movie_id={movie.id}/>
        <SlideShow title='Trending' movie_id={movie.id}/>    
        <Actors title={"Most Famous actor globally"} />
        <SlideShow title='Recommended For you' movie_id={movie.id}/>
    </div>
  )
}

export default Home