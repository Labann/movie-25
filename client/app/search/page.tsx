"use client"
import React from 'react'
import SearchInput from '@/components/SearchInput'
import RecentlyVisited from '@/components/RecentlyVisited'
import { useAppSelector } from '../hooks/redux'
import DiscoverCard from '@/components/DiscoverCard'
const Search = () => {
  const {search_results, isSuccess} = useAppSelector(state => state.movie);
  return (
    <div className='p-4 bg-primary pt-32 min-h-screen max-w-7xl mx-auto flex flex-col space-y-2'>
      <SearchInput/>
      {isSuccess && search_results.length === 0 && <RecentlyVisited/>}
      {search_results.length === 0 && <p className='font-semibold text-gray-light text-lg'>no results found</p>}
      {search_results.length !== 0 && search_results.map(res => <DiscoverCard key={res.id} movie={res}/>)}
    </div>
  )
}

export default Search