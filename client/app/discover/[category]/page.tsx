"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import DiscoverCard from '@/components/DiscoverCard'
import { useAppDispatch } from '@/app/hooks/redux'
import { discoverActions } from '@/app/store/discoverSlice'
const Discover = () => {
  
  const {category} = useParams<{category: string}>()
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(category){
      dispatch(discoverActions())
    }
  }, [dispatch, category])
    return (
    <div className='min-h-screen bg-primary py-34 p-4'>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2">
        <DiscoverCard/>
        <DiscoverCard/>
        <DiscoverCard/>
        <DiscoverCard/>
        <DiscoverCard/>
        <DiscoverCard/>
      </div>
    </div>
  )
}

export default Discover