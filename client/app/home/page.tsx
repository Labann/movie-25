import React from 'react'
import SlideShow from '@/components/SlideShow'
import { Slider } from '@/components/Carousel'
import Actors from '@/components/Actors'
const Home = () => {
  return (
    <div className="pt-30 bg-primary min-h-screen">
        <Slider />
        <SlideShow title='Popular searches'/>
        <SlideShow title='Trending'/>
        <Actors title='Most Famous actor globally right now'/>
        <SlideShow title='Recommended For you'/>
        
    </div>
  )
}

export default Home