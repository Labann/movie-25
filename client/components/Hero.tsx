"use client"
import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className="bg-[url('/hero.png')] relative bg-cover bg-center h-[60vh] p-4 flex flex-col justify-center border-b-4 border-b-gray-light">
        <div className="absolute top-0 left-0 h-[60vh] w-full bg-black/50 z-20"></div>
        <div className="max-w-lg mx-auto text-white space-y-6 flex z-40 flex-col items-center">
            <p className='text-3xl md:text-4xl font-extrabold text-wrap text-center'>Unlimited films, stay tuned and chilled</p>
            <Link href="/sign_up" className='bg-gray-semibold hover:bg-gray-light px-8 py-2 text-sm md:text-sm rounded-3xl  cursor-pointer'>sign up now</Link>
        </div>
    </div>
  )
}

export default Hero