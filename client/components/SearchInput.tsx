"use client"
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
const SearchInput = () => {
  return (
    <div className="text-white max-w-7xl mx-auto flex justify-center items-center">
        <div className="relative sm:w-lg w-sm">
            <input type="text" placeholder='Search' className='w-full pl-8 relative rounded-md p-4 bg-gray-extrabold'/>
            <IoSearchSharp size={"1.2em"} className='absolute top-5 left-2 cursor-pointer'/>
            <IoCloseCircleOutline size={"1.2em"} className='absolute right-2 top-5 cursor-pointer'/>
        </div>
        
      </div>
  )
}

export default SearchInput