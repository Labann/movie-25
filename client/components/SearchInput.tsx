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
    dispatch(search_fn({query}))
  }, [dispatch, query])
  return (
    <div className="text-white max-w-7xl mx-auto flex justify-center items-center">
        <div className="relative sm:w-lg w-sm">
            <input type="text" onChange={(e) => setQuery(e.target.value)} name='query' value={query} placeholder='Search' className='w-full pl-8 relative rounded-md p-4 bg-gray-extrabold'/>
            <IoSearchSharp size={"1.2em"} className='absolute top-5 left-2 cursor-pointer'/>
            <IoCloseCircleOutline size={"1.2em"} className='absolute right-2 top-5 cursor-pointer'/>
        </div>
        {query && <p className='font-bold text-gray-light'>search results for {query}</p>}
      </div>
  )
}

export default SearchInput