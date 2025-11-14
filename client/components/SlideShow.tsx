"use client"
import React, { useEffect } from 'react'
import Card, { CardLoader } from './Card'
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux'
import { fetch_recommendations, fetchPopular, fetchTrending } from '@/app/store/movieSlice'

const SlideShow = ({title, movie_id}: {
  title: string, movie_id: number
}) => {
  const {trending, popular, isLoading, recommendations} = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchPopular());
    dispatch(fetch_recommendations({movie_id}))
  }, [dispatch, movie_id])
  return (
    <div className='p-4 max-w-7xl mx-auto pt-6'>
        <h3 className='font-bold text-lg text-white capitalize pb-2'>{title}</h3>
        <div className="overflow-x-scroll scroll-none w-[80w] mx-auto">
            <div className="flex items-center space-x-4 w-fit">
                {isLoading && ["1", 2, 3, 4, 6, 7].map(item => <CardLoader key={item}/>)}
                {!isLoading && title === "Trending" && trending?.map(movie => <Card key={movie.id} movie={movie}/>)}
                {!isLoading && title === "Popular searches" && popular?.map(movie => <Card key={movie.id} movie={movie}/>)}
                {!isLoading && title === "Recommended For you" && recommendations?.map(movie => <Card key={movie.id} movie={movie}/>)}
            </div>
        </div>
    </div>
  )
}

export default SlideShow