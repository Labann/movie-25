"use client"
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='bg-default/60 z-50 px-6 fixed top-0 left-0 w-full flex items-center justify-between'>
        <div className="">
            <Image
                src={"/logo_.png"}
                alt='logo'
                width={150}
                height={150}
            />
        </div>
        <div className="flex spacex-x-2 items-center">
            <button className='text-sm bg-gray-semibold hover:bg-gray-light rounded-2xl px-10 py-1 text-white cursor-pointer'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar