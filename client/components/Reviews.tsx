"use client"
import React, { useEffect } from 'react'
import Review from './Review'
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux'
import { fetch_movie_reviews } from '@/app/store/movieSlice'
const Reviews = ({movie_id}:{
  movie_id: string
}) => {
  const {reviews} = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetch_movie_reviews({movie_id}))
  }, [dispatch, movie_id])
  return (
    <div className='max-w-7xl mx-auto p-4'>
        <h2 className='font-bold text-lg text-white'>Reviews</h2>
        <div className="grid grid-cols-2 scroll-none gap-3 space-x-3 pt-4 overflow-x-scroll">
            {reviews.length === 0 && <p className='font-bold text-sm text-gray-light'>no reviews</p>}
            {reviews.length !== 0 && reviews.map(review => <Review key={review.id} review={review}/>)}
        </div>    
    </div>
  )
}

export default Reviews