"use client"
import { IReview } from '@/app/types/my_types';
import React from 'react'
import { GoStarFill } from "react-icons/go";

const Review = ({review}: {review: IReview}) => {
  return (
    <div className='rounded-xl p-6 bg-gray-neutral w-full text-xl flex flex-col space-y-4'>
        <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-1">
                <p>{review.author}</p>
                <p className='text-gray-300'>{review.author_details.username}</p>
            </div>
            <button className='border border-white p-2 rounded-2xl flex items-center space-x-2'>
                <span className='flex space-x-2'>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                    <GoStarFill size={".6em"} className='fill-yellow-200/80'/>
                </span>
                <p className='text-xs text-white'>{review.updated_at}</p>
            </button>
            
        </div>
        <p className='p-1 text-gray-300'>
                {review.content}
        </p>
    </div>
  )
}

export default Review