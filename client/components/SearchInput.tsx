"use client"
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { search_fn } from '@/app/store/movieSlice';
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
const SearchInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    const delay = setTimeout(() => {
      if(query) dispatch(search_fn({query}))
    }, 500)
    return () => {
      clearTimeout(delay)
    }
  }, [dispatch, query])
  const {search_results, isLoading} = useAppSelector(state => state.movie);
  return (
    <div className="text-white max-w-7xl mx-auto">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <div className="relative max-w-lg flex w-full">
            <input type="text" onChange={(e) => setQuery(e.target.value)} name='query' value={query} placeholder='Search' className='w-full pl-8 relative rounded-md p-4 bg-gray-extrabold'/>
            <IoSearchSharp size={"1.2em"} className='absolute top-5 left-2 cursor-pointer'/>
            <IoCloseCircleOutline onClick={() => setQuery("")} size={"1.2em"} className='absolute right-2 top-5 cursor-pointer'/>
          </div>
        </div>
        {query && <p className='font-bold text-lg text-gray-light p-4'>search results for {query}</p>}
        {query && !isLoading && search_results.length === 0 && <p className='font-semibold text-gray-light text-lg col-span-10 p-4'>no results found</p>}
    </div>
  )
}

export default SearchInput