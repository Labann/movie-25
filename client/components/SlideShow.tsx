"use client"
import React from 'react'
import Card, { CardLoader } from './Card'
import { useAppSelector } from '@/app/hooks/redux'

const SlideShow = ({title}: {
  title: string
}) => {
  const {trending, popular, isLoading} = useAppSelector(state => state.movie);
  
  return (
    <div className='p-4 max-w-7xl mx-auto pb-14 pt-6'>
        <h3 className='font-bold text-2xl text-white capitalize pb-2'>{title}</h3>
        <div className="overflow-x-scroll scroll-none w-[50w] mx-auto">
            <div className="flex items-center space-x-4 w-fit">
                {isLoading && ["1", 2, 3].map(item => <CardLoader key={item}/>)}
                {!isLoading && title === "Trending" && trending?.map(movie => <Card key={movie.id} movie={movie}/>)}
                {!isLoading && title === "Popular searches" && popular?.map(movie => <Card key={movie.id} movie={movie}/>)}
            </div>
        </div>
        
    </div>
  )
}

export default SlideShow