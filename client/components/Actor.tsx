import React from 'react'
import Image from 'next/image'
import { ImgUrl } from '@/app/util/config'
import { IoIosContact } from "react-icons/io";

export const ActorLoader = () => {
  return (
    <div className='w-[9em] p-1 h-[15em] mx-auto'>
      <div className="bg-gray-light w-[7em] h-[7em] rounded-full animate-pulse mx-auto"></div>
      <div className="w-3/4 mx-auto bg-gray-light mt-2 h-2 animate-pulse"></div>
      </div>
  )
}
const Actor = ({name, img}: {name: string, img: string}) => {
  return (
    <div className="w-[9em] p-2 flex-col text-center space-y-2">
            {img && <Image 
              src={`${ImgUrl}w185${img}`}
              alt='thumbnail'
              unoptimized
              width={100}
              height={100}
              className='rounded-full w-[7em] h-[7em] mx-auto'
              />}
              {
                !img && <IoIosContact size={"4em"} className='mx-auto w-[7em] h-[7em] rounded-full'/>
              }          
              <p className='text-gray-light text-sm'>{name}</p>  
          </div>
  )
}

export default Actor