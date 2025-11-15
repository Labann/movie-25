"use client"
import React from 'react'
import SearchInput from '@/components/SearchInput'
import RecentlyVisited from '@/components/RecentlyVisited'
import { useAppSelector } from '../hooks/redux'
import DiscoverCard, { DiscoverCardLoader } from '@/components/DiscoverCard'
const Search = () => {
  const {search_results, isSuccess, isLoading} = useAppSelector(state => state.movie);
  return (
    <div className="bg-primary">
      <div className='p-4 pt-32 min-h-screen max-w-7xl mx-auto space-y-2'>
        {<SearchInput/>}
        {/*isSuccess && search_results.length === 0 && <RecentlyVisited/>*/}
        <div className="grid grid-cols-12">
          <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4 sm:w-auto col-span-12 pt-6">
              {isLoading && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => <DiscoverCardLoader key={v}/>)}
              {!isLoading && search_results.length !== 0 && search_results.map(res => <DiscoverCard key={res.id} movie={res}/>)}
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Search