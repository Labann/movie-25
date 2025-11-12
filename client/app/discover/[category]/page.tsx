"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DiscoverCard, { DiscoverCardLoader } from '@/components/DiscoverCard'
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux'
import { discoverActions, discoverAnimations, discoverDocumentaries, discoverSeries } from '@/app/store/discoverSlice'
const Discover = () => {
  
  const {category} = useParams<{category: string}>()
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.discover)
  useEffect(() => {
    if(category === "Movie"){
      dispatch(discoverActions())
    }
    if(category === "Series"){
      dispatch(discoverSeries())
    }
    if(category === "Animation"){
      dispatch(discoverAnimations())
    }

    if(category === "Documentaries"){
      dispatch(discoverDocumentaries())
    }

  }, [dispatch, category])
  const {content} = useAppSelector(state => state.discover)
    return (
    <div className='min-h-screen bg-primary py-34 p-4'>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2">
        {!isLoading && content.map(item => <DiscoverCard key={item.id} movie={item}/>)}
        {isLoading && ["1", "2", "3", "4"].map(item => <DiscoverCardLoader key={item} />)}
      </div>
    </div>
  )
}

export default Discover