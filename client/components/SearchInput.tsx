"use client"
import { useAppDispatch } from '@/app/hooks/redux';
import { search_fn } from '@/app/store/movieSlice';
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
const SearchInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(search_fn({query}))
    }, 2000)
    return () => {
      clearTimeout(delay)
    }
  }, [dispatch, query])
  return (
    <div className="text-white max-w-7xl mx-auto flex flex-col space-y-2 justify-center items-center">
        <div className="relative sm:w-lg w-sm">
            <input type="text" onChange={(e) => setQuery(e.target.value)} name='query' value={query} placeholder='Search' className='w-full pl-8 relative rounded-md p-4 bg-gray-extrabold'/>
            <IoSearchSharp size={"1.2em"} className='absolute top-5 left-2 cursor-pointer'/>
            <IoCloseCircleOutline onClick={() => setQuery("")} size={"1.2em"} className='absolute right-2 top-5 cursor-pointer'/>
        </div>
        {query && <p className='font-bold text-gray-light'>search results for {query}</p>}
      </div>
  )
}

export default SearchInput