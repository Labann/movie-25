"use client"
import React from 'react'
import SearchInput from '@/components/SearchInput'
import RecentlyVisited from '@/components/RecentlyVisited'
const Search = () => {
  return (
    <div className='p-4 bg-primary pt-32 min-h-screen'>
      <SearchInput/>
      <RecentlyVisited/>
    </div>
  )
}

export default Search