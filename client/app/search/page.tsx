"use client"
import React from 'react'
import SearchInput from '@/components/SearchInput'
import RecentlyVisited from '@/components/RecentlyVisited'
import { useAppSelector } from '../hooks/redux'
import DiscoverCard from '@/components/DiscoverCard'
const Search = () => {
  const {search_results, isSuccess} = useAppSelector(state => state.movie);
  return (
    <div className="bg-primary">
      <div className='p-4 pt-32 min-h-screen max-w-7xl mx-auto space-y-2'>
        <SearchInput/>
        
        {isSuccess && search_results.length === 0 && <RecentlyVisited/>}
        <div className="grid grid-cols-12">
          {search_results.length === 0 && <p className='font-semibold text-gray-light text-lg col-span-10'>no results found</p>}
          <div className="grid w-fit mx-auto sm:grid-cols-2 sm:w-auto col-span-12">
              {search_results.length !== 0 && search_results.map(res => <DiscoverCard key={res.id} movie={res}/>)}
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Search