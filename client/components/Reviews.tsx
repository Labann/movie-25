"use client"
import React from 'react'
import Review from './Review'
const Reviews = () => {
  return (
    <div className='max-w-7xl mx-auto p-4'>
        <h2 className='font-bold text-lg text-white'>Reviews</h2>
        <div className="grid grid-cols-2 scroll-none gap-3 space-x-3 pt-4 overflow-x-scroll">
            <Review/>
            <Review />
            <Review/>
            <Review />
        </div>
        
    </div>
  )
}

export default Reviews